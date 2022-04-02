import TitleBar from "components/TitleBar";
import { GoSearch } from "@react-icons/all-files/go/GoSearch";


import './styles.css';
import Pagination from "components/Pagination";

const Usuario = () => {
    return (
        <div className="container">
            <TitleBar tituloPagina="Usuários" />
            
            <div className='base-card'>
                <div className="container-tituto-pesquisa">
                    <label className="titulo-pesquisa">Pesquisa</label>
                </div>
                
                <div className="container-campos-pesquisa">
                    <form action="">
                        <div className="row">
                            <div className="col-sn-12 col-md-6 col-lg-4">
                                <label className="label-form-pesquisa">Perfil: </label>
                                <select className="form-control base-input">
                                    <option>Selecione aqui...</option>
                                    <option>ADMINISTRADOR</option>
                                    <option>TÉCNICO</option>
                                    <option>FUNCIONÁRIO</option>
                                </select>
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
                        </div>
                        <div className="container-buttons-pesquisa">
                            <button className="btn btn-secondary buttons-pesquisa">
                                LIMPAR
                            </button>
                            <button className="btn btn-primary buttons-pesquisa text-white">
                                PESQUISAR
                            </button>
                        </div>        
                    </form> 
                </div>
            </div>

            <div className="container-resultado-pesquisa">
                <div>
                    <label>Foram encontrados 50 registros para sua pesquisa</label>
                </div>
                <div>
                    <button type="button" className="btn btn-link">Novo Usuário</button>
                </div>
            </div>

            <div className="container-datatable">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination />

        </div>
    );
}

export default Usuario;