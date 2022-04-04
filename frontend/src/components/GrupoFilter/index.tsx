const GrupoFilter = () => {
    return (
        <div className='base-card'>
            <div className="container-tituto-pesquisa">
                <label className="titulo-pesquisa">Filtro para pesquisa</label>
            </div>
            
            <div className="container-campos-pesquisa">
                <form action="">
                    <div className="row">
                        <div className="col-sn-6 col-md-6 col-lg-6">
                            <label className="label-form-pesquisa">Descrição: </label>
                            <input type="text" className="form-control base-input" />
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

export default GrupoFilter;