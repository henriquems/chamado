import TitleBar from "components/TitleBar";
import TitleResult from "components/TitleResult";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL, requestBackend } from "util/requests";
import { SpringPage } from "types/spring";
import { Usuario } from "types/usuario";
import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import UsuarioFilter, { UsuarioFilterData } from "components/UsuarioFilter";

type ControlComponetsData = {
  activePage: number;
  filterData: UsuarioFilterData;
};

const PesquisaUsuarios = () => {
  const [page, setPage] = useState<SpringPage<Usuario>>();

  const [controlComponetsData, setControlComponetsData] =
    useState<ControlComponetsData>({
      activePage: 0,
      filterData: { nome: '', email: ''},
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponetsData({ activePage: pageNumber, filterData: controlComponetsData.filterData});
  };

  const handleSubmitFilter = (data: UsuarioFilterData) => {
    setControlComponetsData({ activePage: 0, filterData: data});
  };

  const getUsuarios = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: "/usuarios",
      withCredentials: true,
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
    <div className="container-chamado">
      <TitleBar tituloPagina="Usuários" />

      <UsuarioFilter onSubmitFilter={handleSubmitFilter}  />

      <TitleResult descricao="usuário" quantidade={page ? page.totalElements : 0} caminho="usuario" />

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

export default PesquisaUsuarios;
