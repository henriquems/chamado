import { AxiosRequestConfig } from 'axios';
import { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { requestBackend } from 'util/requests';
import { Categoria } from 'types/categoria';
import { Subcategoria } from 'types/subcategoria';
import TitleBar from 'components/TitleBar';
import Swal from 'sweetalert2';

type UrlParams = {
  codigo: string;
};

const CadastroSubcategoria = () => {
  const { codigo } = useParams<UrlParams>();

  const isEditing = codigo !== 'create';

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Categoria>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/subcategorias/${codigo}` }).then((response) => {
        const subcategoria = response.data as Subcategoria;
        setValue('descricao', subcategoria.descricao);
      });
    }
  }, [isEditing, codigo, setValue]);

  const onSubmit = (formData: Categoria) => {
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/subcategorias/${codigo}` : '/subcategorias',
      data: formData,
      withCredentials: true
    };

    requestBackend(config).then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Subcategoria salva com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      
      history.push('/admin/subcategoria');
    })
    .catch(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Erro ao cadastrar subcategoria!',
        showConfirmButton: false,
        timer: 1500
      })
    });
  };

  const voltar = () => {
    history.push('/admin/subcategoria');
  };

  const limpar = () => {
    setValue('descricao', '');
  }

  return (
    <div className="container-chamado">
      <TitleBar tituloPagina="Cadastro de Subategorias" />
      
      <div className="base-card">
        <div className="container-card-titulo">
          <label className="card-titulo">Dados de cadastro</label>
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
                    {...register("descricao", {
                      required: "Campo descrição obrigatório",
                    })}
                    type="text"
                    className={`form-control ${
                      errors.descricao ? "is-invalid" : ""
                    }`}
                    name="descricao"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback d-block">{ errors.descricao?.message }</div>
                </div>
              </div>

              <div className="w-100"></div>

              <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
                <div className="container-label-form"></div>
              </div>
              <div className="col-6 col-lg-4 col-md-10 col-12 col-sm-12">
                <div className="container-buttons-form">
                  <div className="container-button">
                    <button type='submit' className="btn btn-primary product-crud-buttom text-white">
                      SALVAR
                    </button>
                  </div>
                  <div className="container-button">
                    <button type='button' className="btn btn-secondary" onClick={limpar}>
                      LIMPAR
                    </button>
                  </div>
                  <div className="container-button">
                    <button type='button' className="btn btn-light" onClick={voltar}>VOLTAR</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroSubcategoria;