import { useEffect, useState } from "react";
import { Permissao } from "types/permissao";
import { requestBackend } from "util/requests";
import { Controller, useForm } from 'react-hook-form';
import Select from "react-select";

export type GrupoFilterData = {
    descricao: string;
    permissao: Permissao | null;
}

type Props = {
    onSubmitFilter : (data: GrupoFilterData) => void;
}

const GrupoFilter = ({onSubmitFilter} : Props) => {
    const [selectPermissoes, setSelectPermissoes] = useState<Permissao[]>();

    useEffect(() => {
        requestBackend({ url: "/permissoes" }).then((response) => {
            setSelectPermissoes(response.data.content);
        });
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control,
    } = useForm<GrupoFilterData>();

    const onSubmit = (formData: GrupoFilterData) => {
        onSubmitFilter(formData);
    }
    
    const handleFormClear = () => {
        setValue('descricao', '');
        setValue('permissao', null);
    }
    
    const handleChangePermissao = (value: Permissao) => {
        setValue('permissao', value);
    
        const obj : GrupoFilterData = {
          descricao: getValues('descricao'),
          permissao: getValues('permissao')
        }
    
        onSubmitFilter(obj);
    }
    
    return (
        <div className='base-card'>
            <div className="container-tituto-pesquisa">
                <label className="titulo-pesquisa">Filtro para pesquisa</label>
            </div>
            
            <div className="container-campos-pesquisa">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-sn-12 col-md-6 col-lg-6">
                            <label className="label-form-pesquisa">Descrição: </label>
                            <input
                                {...register('descricao')}
                                type="text"
                                className="form-control"
                                name="descricao"
                            />
                        </div>
                        <div className="col-sn-12 col-md-6 col-lg-6">
                            <label className="label-form-pesquisa">Permissão: </label>
                            <Controller
                                name="permissao"
                                control={control}
                                render={({ field }) => (
                                    <Select {...field}
                                    options={selectPermissoes}
                                    isClearable
                                    classNamePrefix="product-crud-select"
                                    onChange={value => handleChangePermissao(value as Permissao)}
                                    getOptionLabel={(permissao: Permissao) => permissao.nome}
                                    getOptionValue={(permissao: Permissao) => String(permissao.codigo)
                                    }
                                    />
                                )}
                            />
                        </div>
                        <div className="col-sn-12 col-md-6 col-lg-6">
                            <div className="container-buttons-pesquisa">
                                <button className="btn btn-primary buttons-pesquisa text-white">
                                    PESQUISAR
                                </button>
                                <button onClick={handleFormClear} className="btn btn-secondary buttons-pesquisa">
                                    LIMPAR
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GrupoFilter;