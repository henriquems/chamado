import { AxiosRequestConfig } from "axios";
import GrupoFilter, { GrupoFilterData } from "components/GrupoFilter";
import Pagination from "components/Pagination";
import TitleBar from "components/TitleBar";
import TitleResult from "components/TitleResult";
import { useCallback, useEffect, useState } from "react";
import { Grupo } from "types/grupo";
import { SpringPage } from "types/spring";
import { requestBackend } from "util/requests";

type ControlComponetsData = {
    activePage: number;
    filterData: GrupoFilterData;
};

const PesquisaGrupos = () => {
    const [page, setPage] = useState<SpringPage<Grupo>>();

    const [controlComponetsData, setControlComponetsData] =
        useState<ControlComponetsData>({
        activePage: 0,
        filterData: { descricao: '', permissao: null},
    });

    const handlePageChange = (pageNumber: number) => {
        setControlComponetsData({ activePage: pageNumber, filterData: controlComponetsData.filterData});
    };

    const handleSubmitFilter = (data: GrupoFilterData) => {
        setControlComponetsData({ activePage: 0, filterData: data});
    };

    const getGrupos = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: "GET",
            url: "/grupos",
            params: {
                page: controlComponetsData.activePage,
                size: 10,
                descricao: controlComponetsData.filterData.descricao,
                codigoPermissao: controlComponetsData.filterData.permissao?.codigo
            },
        };

        requestBackend(config).then((response) => {
            setPage(response.data);
        });
    }, [controlComponetsData]);

    useEffect(() => {
        getGrupos();
    }, [getGrupos]);

    return (
        <div className="container-chamado">
            <TitleBar tituloPagina="Grupos" />

            <GrupoFilter onSubmitFilter={handleSubmitFilter} />

            <TitleResult descricao="grupo" quantidade={page ? page.totalElements : 0} caminho="grupo" />

            <div className="container-datatable">
                <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Categorias</th>
                        </tr>
                    </thead>
                    <tbody>
                    {page?.content.map((grupo) => (
                        <tr key={grupo.codigo}>
                        <td>{grupo.descricao}</td>
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
}

export default PesquisaGrupos;