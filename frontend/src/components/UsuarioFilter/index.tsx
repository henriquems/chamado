import { useEffect, useState } from "react";
import { Permissao } from "types/permissao";
import { requestBackend } from "util/requests";
import Select from "react-select";

const UsuarioFilter = () => {
    const [selectPermissao, setSelectPermissao] = useState<Permissao[]>();

    useEffect(() => {
        requestBackend({ url: "/permissoes" }).then((response) => {
        setSelectPermissao(response.data.content);
        });
    }, []);
    
    return (
        <div className="base-card">
        <div className="container-tituto-pesquisa">
          <label className="titulo-pesquisa">Filtros para pesquisa</label>
        </div>

        <div className="container-campos-pesquisa">
          <form action="">
            <div className="row">
              <div className="col-sn-12 col-md-6 col-lg-4">
                <label className="label-form-pesquisa">Permissão: </label>
                <Select
                  options={selectPermissao}
                  classNamePrefix="select"
                  isMulti
                  getOptionLabel={(permissao: Permissao) => permissao.nome}
                  getOptionValue={(permissao: Permissao) =>
                    String(permissao.codigo)
                  }
                />
              </div>
              <div className="col-sn-12 col-md-6 col-lg-4">
                <label className="label-form-pesquisa">Instituto: </label>
                <input type="text" className="form-control base-input" />
              </div>
              <div className="col-sn-12 col-md-6 col-lg-4">
                <label className="label-form-pesquisa">Setor: </label>
                <input type="text" className="form-control base-input" />
              </div>
              <div className="col-sn-12 col-md-6 col-lg-4">
                <label className="label-form-pesquisa">Nome: </label>
                <input type="text" className="form-control base-input" />
              </div>
              <div className="col-sn-12 col-md-6 col-lg-4">
                <label className="label-form-pesquisa">E-mail: </label>
                <input type="text" className="form-control base-input" />
              </div>
              <div className="col-sn-12 col-md-6 col-lg-4">
                <label className="label-form-pesquisa">Status: </label>
                <input type="text" className="form-control base-input" />
              </div>
              <div className="col-sn-12 col-md-6 col-lg-4">
                <div className="container-buttons-pesquisa">
                  <button className="btn btn-primary buttons-pesquisa text-white">
                    PESQUISAR
                  </button>
                  <button className="btn btn-secondary buttons-pesquisa">
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

export default UsuarioFilter;