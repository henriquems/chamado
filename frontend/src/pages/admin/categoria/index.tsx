import { AxiosRequestConfig } from "axios";
import CategoriaFilter from "components/CategoriaFilter";
import Pagination from "components/Pagination";
import TitleBar from "components/TitleBar";
import TitleResult from "components/TitleResult";
import { useCallback, useEffect, useState } from "react";
import { Categoria } from "types/categoria";
import { SpringPage } from 'types/spring';
import { requestBackend } from "util/requests";

type ControlComponetsData = {
    activePage: number;
};  

const Categorias = () => {
  const [page, setPage] = useState<SpringPage<Categoria>>();

  const [controlComponetsData, setControlComponetsData] =
    useState<ControlComponetsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponetsData({
      activePage: pageNumber,
    });
  };

  const getCategorias = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/categorias",
      params: {
        page: controlComponetsData.activePage,
        size: 5,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponetsData]);

  useEffect(() => {
    getCategorias();
  }, [getCategorias]);

  return (
    <>
      <div className="container">
        <TitleBar tituloPagina="Categorias" />
        
        <CategoriaFilter />

        <TitleResult descricao="categoria" quantidade={20} />

        <div className="container-datatable">
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Categorias</th>
                </tr>
              </thead>
              <tbody>
                {page?.content.map((item) => (
                  <tr key={item.codigo}>
                    <td>{item.descricao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination
            forcePage={page?.number}
            pageCount={page ? page.totalPages : 0}
            range={5}
            onChange={handlePageChange}
          />
      </div>
    </>
  );
};

export default Categorias;
