import { useEffect, useState } from "react";
import { Permissao } from "types/permissao";
import { requestBackend } from "util/requests";
import { useForm } from "react-hook-form";
import Select from "react-select";

export type GrupoFilterData = {
  descricao: string;
  permissao: Permissao | null;
};

type Props = {
  onSubmitFilter: (data: GrupoFilterData) => void;
};

const GrupoFilter = ({ onSubmitFilter }: Props) => {
  const [selectPermissoes, setSelectPermissoes] = useState<Permissao[]>();

  useEffect(() => {
    requestBackend({ url: "/permissoes" }).then((response) => {
      setSelectPermissoes(response.data.content);
    });
  }, []);

  const { register, handleSubmit, setValue, getValues } = useForm<GrupoFilterData>();

  const onSubmit = (formData: GrupoFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangePermissao = (value: Permissao) => {
    setValue("permissao", value);

    const obj: GrupoFilterData = {
      descricao: getValues("descricao"),
      permissao: getValues("permissao"),
    };

    onSubmitFilter(obj);
  };

  const limpar = () => {
    setValue("descricao", "");
    setValue("permissao", null);
  };

  return (
    <div className="base-card">
      <div className="container-card-titulo">
        <label className="card-titulo">Filtros para pesquisa</label>
      </div>

      <div className="container-card-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          
        <div className="row">
          <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
            <div className="container-label-form">
              <label>Nome:</label>
            </div>
          </div>
          <div className="col-6 col-lg-4 col-md-10 col-12 col-sm-12">
            <div className="container-campo-form">
              <input
                  {...register("descricao")}
                  type="text"
                  className="form-control"
                  name="descricao"
                />
            </div>
          </div>
          
          <div className="w-100"></div>

          <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
            <div className="container-label-form">
              <label>Permissão:</label>
            </div>
          </div>
          <div className="col-6 col-lg-4 col-md-10 col-12 col-sm-12">
            <div className="container-campo-form">
              <Select
                options={selectPermissoes}
                isClearable
                classNamePrefix="product-crud-select"
                onChange={(value) =>
                  handleChangePermissao(value as Permissao)
                }
                getOptionLabel={(permissao: Permissao) => permissao.nome}
                getOptionValue={(permissao: Permissao) =>
                  String(permissao.codigo)
                }
              />
            </div>
          </div>

          <div className="w-100"></div>
          
          <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
            <div className="container-label-form"></div>
          </div>
          <div className="col-6 col-lg-4 col-md-10 col-12 col-sm-12">
            <div className="container-buttons-form">
              <div className="container-button">
                  <button
                    type="submit"
                    className="btn btn-primary text-white"
                  >
                    PESQUISAR
                  </button>
                </div>
                <div className="container-button">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={limpar}
                  >
                    LIMPAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GrupoFilter;
