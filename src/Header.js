
function Header() {
  return (
    <>
    <nav className="container navbar fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h1>Felipe Las Casas</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Felipe Las Casas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projetos">Projetos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contatos">Contatos</a>
          </li>
          </ul>
      </div>
    </div>
  </div>
</nav>
</>
    
    
  );
}

export default Header;
