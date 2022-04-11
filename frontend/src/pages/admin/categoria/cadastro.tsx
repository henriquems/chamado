import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { requestBackend } from "util/requests";
import { Categoria } from "types/categoria";
import TitleBar from "components/TitleBar";
import { Subcategoria } from "types/subcategoria";
import Swal from "sweetalert2";
import Select from "react-select";

type UrlParams = {
  codigo: string;
};

const CadastroCategoria = () => {
  const { codigo } = useParams<UrlParams>();

  const isEditing = codigo !== "create";

  const history = useHistory();

  const [selectSubcategorias, setSelectSubcategorias] =
    useState<Subcategoria[]>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Categoria>();

  useEffect(() => {
    requestBackend({ url: "/subcategorias" }).then((response) => {
      setSelectSubcategorias(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/categorias/${codigo}` }).then((response) => {
        const categoria = response.data as Categoria;
        setValue("descricao", categoria.descricao);
        setValue("subcategorias", categoria.subcategorias);
      });
    }
  }, [isEditing, codigo, setValue]);

  const onSubmit = (formData: Categoria) => {
    const config: AxiosRequestConfig = {
      method: isEditing ? "PUT" : "POST",
      url: isEditing ? `/categorias/${codigo}` : "/categorias",
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Categoria salva com sucesso!",
          showConfirmButton: false,
          timer: 1500,
        });

        history.push("/admin/categoria");
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Erro ao cadastrar categoria!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const voltar = () => {
    history.push("/admin/categoria");
  };

  const limpar = () => {
    setValue("descricao", "");
    setValue("subcategorias", []);
  };

  return (
    <div className="container-chamado">
      <TitleBar tituloPagina="Cadastro de Categorias" />

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
                </div>
              </div>

              <div className="w-100"></div>

              <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
                <div className="container-label-form">
                  <label>Subcategorias:</label>
                </div>
              </div>
              <div className="col-6 col-lg-4 col-md-10 col-12 col-sm-12">
                <div className="container-campo-form">
                  <Controller
                    name="subcategorias"
                    rules={{ required: true }}
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={selectSubcategorias}
                        classNamePrefix="product-crud-select"
                        isMulti
                        getOptionLabel={(subcategoria: Subcategoria) =>
                          subcategoria.descricao
                        }
                        getOptionValue={(subcategoria: Subcategoria) =>
                          String(subcategoria.codigo)
                        }
                      />
                    )}
                  />
                  {errors.subcategorias && (
                    <div className="invalid-feedback d-block">
                      Campo obrigatório
                    </div>
                  )}
                </div>
              </div>

              <div className="w-100"></div>

              <div className="col-6 col-lg-2 col-md-2 col-12 col-sm-12">
                <div className="container-label-form"></div>
              </div>
              <div className="col-6 col-lg-4 col-md-4 col-12 col-sm-12">
                <div className="container-buttons-form">
                  <div className="container-button">
                    <button
                      type="submit"
                      className="btn btn-primary product-crud-buttom text-white"
                    >
                      SALVAR
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
                  <div className="container-button">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={voltar}
                    >
                      VOLTAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroCategoria;
