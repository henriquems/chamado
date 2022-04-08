import { useForm } from "react-hook-form";

export type UsuarioFilterData = {
  nome: string;
  email: string;
};

type Props = {
  onSubmitFilter: (data: UsuarioFilterData) => void;
};

const UsuarioFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue, } = useForm<UsuarioFilterData>();

  const onSubmit = (formData: UsuarioFilterData) => {
    onSubmitFilter(formData);
  };

  const limpar = () => {
    setValue("nome", "");
    setValue("email", "");
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
              <div className="col-6 col-lg-4 col-md-4 col-12 col-sm-12">
                <div className="container-campo-form">
                  <input
                    {...register("nome")}
                    type="text"
                    className="form-control"
                    name="nome"
                  />
                </div>
              </div>
              <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
                <div className="container-label-form">
                    <label>E-mail:</label>
                  </div>
              </div>
              <div className="col-6 col-lg-4 col-md-4 col-12 col-sm-12">
                <div className="container-campo-form">
                  <input
                    {...register("email")}
                    type="text"
                    className="form-control"
                    name="email"
                  />
                </div>
              </div>

              <div className="w-100"></div>

              <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
                <div className="container-label-form">
                  <label>Instituto:</label>
                </div>
              </div>
              <div className="col-6 col-lg-4 col-md-4 col-12 col-sm-12">
                <div className="container-campo-form">
                  <input
                    {...register("email")}
                    type="text"
                    className="form-control"
                    name="email"
                  />
                </div>
              </div>
              <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
                <div className="container-label-form">
                  <label>Setor:</label>
                </div>
              </div>
              <div className="col-6 col-lg-4 col-md-4 col-12 col-sm-12">
                <div className="container-campo-form">
                  <input
                    {...register("email")}
                    type="text"
                    className="form-control"
                    name="email"
                  />
                </div>
              </div>

              <div className="w-100"></div>

              <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12"></div>
              <div className="col-6 col-lg-4 col-md-4 col-12 col-sm-12">
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
}

export default UsuarioFilter;