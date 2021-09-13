import './HeaderPre.css';
function HeaderPre(props) {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <h2><i className="fas fa-user-edit" ></i></h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div align='center'>
                    {/* <form >
                        
                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </form> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderPre;
