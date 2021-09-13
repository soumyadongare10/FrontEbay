import './Header.css';
function Header(props) {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h2><i className="fas fa-user-edit" ></i></h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    
    <li class="nav-item">
<a className="nav-link active"aria-current="page"href="/Attendence">Mark Attendence</a>
</li>
<li className="nav-item">
<a className="nav-link active"href="/salary">Salary</a>
</li>
<li className="nav-item">
<a className="nav-link active"href="/EmployeeForm">EmployeeForm</a>
</li>
<li className="nav-item">
<a className="nav-link active"href="/">Logout</a>
</li>

                                
                                
                                
                                
                                

                            </ul>
                       
                   
                   
                </div>
            </div>
        </nav>
    )
}

export default Header;
