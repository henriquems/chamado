import TitleBar from "components/TitleBar";
import TitleResult from "components/TitleResult";
import { useCallback, useEffect, useState } from "react";
import { requestBackend } from "util/requests";
import { SpringPage } from "types/spring";
import { Usuario } from "types/usuario";
import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import UsuarioFilter from "components/UsuarioFilter";

type ControlComponetsData = {
    activePage: number;
};

const Usuarios = () => {
  const [page, setPage] = useState<SpringPage<Usuario>>();

  const [controlComponetsData, setControlComponetsData] =
    useState<ControlComponetsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponetsData({
      activePage: pageNumber,
    });
  };

  const getUsuarios = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/usuarios",
      params: {
        page: controlComponetsData.activePage,
        size: 10,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponetsData]);

  useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  return (
    <div className="container">
      <TitleBar tituloPagina="Usuários" />

      <UsuarioFilter />

      <TitleResult descricao="usuário" quantidade={page ? page.totalElements : 0} />

      <div className="container-datatable">
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {page?.content.map((usuario) => (
                <tr key={usuario.codigo}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.nome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-paginacao">
        <Pagination
          forcePage={page?.number}
          pageCount={page ? page.totalPages : 0}
          range={10}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Usuarios;
