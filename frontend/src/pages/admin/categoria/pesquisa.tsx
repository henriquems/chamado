import { AxiosRequestConfig } from "axios";
import CategoriaFilter, { CategoriaFilterData } from "components/CategoriaFilter";
import Pagination from "components/Pagination";
import TitleBar from "components/TitleBar";
import TitleResult from "components/TitleResult";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Categoria } from "types/categoria";
import { SpringPage } from "types/spring";
import { requestBackend } from "util/requests";
import { BiTrash } from "@react-icons/all-files/bi/BiTrash";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
import Swal from "sweetalert2";

type ControlComponetsData = {
  activePage: number;
  filterData: CategoriaFilterData;
};

const PesquisaCategorias = () => {
  const [page, setPage] = useState<SpringPage<Categoria>>();

  const [controlComponetsData, setControlComponetsData] =
    useState<ControlComponetsData>({
      activePage: 0,
      filterData: { descricao: '' }
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponetsData({ activePage: pageNumber, filterData: controlComponetsData.filterData});
  };

  const handleSubmitFilter = (data: CategoriaFilterData) => {
    setControlComponetsData({ activePage: 0, filterData: data});
  };

  const getCategorias = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/categorias",
      withCredentials: true,
      params: {
        page: controlComponetsData.activePage,
        size: 10,
        descricao: controlComponetsData.filterData.descricao,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
      console.log(response.data);
    });
  }, [controlComponetsData]);

  useEffect(() => {
    getCategorias();
  }, [getCategorias]);

  const handleDelete = (codigo: number) => {
    Swal.fire({
      title: 'Deseja realmente excluir a categoria?',
      text: "Você não será capaz de reverter essa ação!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.isConfirmed) {
        const config: AxiosRequestConfig = {
          method: 'DELETE',
          url: `/categorias/${codigo}`,
        };
    
        requestBackend(config).then(() => {
          getCategorias();
        });
      }
    })    
  };

  return (
    <div className="container-chamado">
      <TitleBar tituloPagina="Pesquisa de Categorias" />

      <CategoriaFilter onSubmitFilter={handleSubmitFilter} />

      <TitleResult descricao="categoria" quantidade={page ? page.totalElements : 0} caminho="categoria" />
      
      <div className="container-datatable">
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Categorias</th>
                <th className="coluna-pequena">Editar</th>
                <th className="coluna-pequena">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {page?.content.map((categoria) => (
                <tr key={categoria.codigo}>
                  <td>{categoria.descricao}</td>
                  <td className="coluna-pequena">
                    <Link to={`/admin/categoria/${categoria.codigo}`}>
                      <BiEdit title="Editar" className="icone-editar" />
                    </Link>
                  </td>
                  <td className="coluna-pequena">
                    <BiTrash onClick={() => handleDelete(categoria.codigo)} 
                      title="Excluir" className="icone-excluir" />
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

export default PesquisaCategorias;
