import { useForm } from "react-hook-form";

export type SubcategoriaFilterData = {
  descricao: string;
};

type Props = {
  onSubmitFilter: (data: SubcategoriaFilterData) => void;
};

const SubcategoriaFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } =
    useForm<SubcategoriaFilterData>();

  const onSubmit = (formData: SubcategoriaFilterData) => {
    onSubmitFilter(formData);
  };

  const limpar = () => {
    setValue("descricao", "");
  };

  return (
    <div className="base-card">
      <div className="container-card-titulo">
        <label className="card-titulo">Filtro para pesquisa</label>
      </div>

      <div className="container-card-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
              <div className="container-label-form">
                <label>Descrição:</label>
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
              <div className="container-label-form"></div>
            </div>
            <div className="col-6 col-lg-4 col-md-10 col-12 col-sm-12">
              <div className="container-buttons-form">
                <div className="container-button">
                  <button type="submit" className="btn btn-primary text-white">
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

export default SubcategoriaFilter;
