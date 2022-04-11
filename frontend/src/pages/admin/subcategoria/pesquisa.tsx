import Pagination from "components/Pagination";
import SubcategoriaFilter, {SubcategoriaFilterData} from "components/SubcategoriaFilter";
import TitleBar from "components/TitleBar";
import TitleResult from "components/TitleResult";
import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { SpringPage } from "types/spring";
import { Subcategoria } from "types/subcategoria";
import { BASE_URL, requestBackend } from "util/requests";
import { Link } from "react-router-dom";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
import { BiTrash } from "@react-icons/all-files/bi/BiTrash";
import Swal from "sweetalert2";

type ControlComponetsData = {
  activePage: number;
  filterData: SubcategoriaFilterData;
};

const PesquisaSubcategorias = () => {
  const [page, setPage] = useState<SpringPage<Subcategoria>>();

  const [controlComponetsData, setControlComponetsData] =
    useState<ControlComponetsData>({
      activePage: 0,
      filterData: { descricao: "" },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponetsData({
      activePage: pageNumber,
      filterData: controlComponetsData.filterData,
    });
  };

  const handleSubmitFilter = (data: SubcategoriaFilterData) => {
    setControlComponetsData({ activePage: 0, filterData: data });
  };

  const getSubcategorias = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: "/subcategorias",
      withCredentials: true,
      params: {
        page: controlComponetsData.activePage,
        size: 10,
        descricao: controlComponetsData.filterData.descricao,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponetsData]);

  useEffect(() => {
    getSubcategorias();
  }, [getSubcategorias]);

  const handleDelete = (codigo: number) => {
    Swal.fire({
      title: "Deseja realmente excluir a subcategoria?",
      text: "Você não será capaz de reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Não",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
    }).then((result) => {
      if (result.isConfirmed) {
        const config: AxiosRequestConfig = {
          method: "DELETE",
          url: `/subcategorias/${codigo}`,
        };

        requestBackend(config).then(() => {
          getSubcategorias();
        });
      }
    });
  };

  return (
    <div className="container-chamado">
      <TitleBar tituloPagina="Pesquisa de Subcategorias" />

      <SubcategoriaFilter onSubmitFilter={handleSubmitFilter} />

      <TitleResult
        descricao="subcategoria"
        quantidade={page ? page.totalElements : 0}
        caminho="subcategoria"
      />

      <div className="container-datatable">
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Subcategorias</th>
                <th className="coluna-pequena">Editar</th>
                <th className="coluna-pequena">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {page?.content.map((subcategoria) => (
                <tr key={subcategoria.codigo}>
                  <td>{subcategoria.descricao}</td>
                  <td className="coluna-pequena">
                    <Link to={`/admin/subcategoria/${subcategoria.codigo}`}>
                      <BiEdit title="Editar" className="icone-editar" />
                    </Link>
                  </td>
                  <td className="coluna-pequena">
                    <BiTrash
                      onClick={() => handleDelete(subcategoria.codigo)}
                      title="Excluir"
                      className="icone-excluir"
                    />
                  </td>
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

export default PesquisaSubcategorias;
