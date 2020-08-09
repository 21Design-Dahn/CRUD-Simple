var React = require('react')


function Navbar(){
  return(
    <nav className="navbar navbar-expand-md bg-dark navbar-dark m-0 py-1 mb-4">
    <div className="container">
    <a className="navbar-brand text-light" href="/">User Crud</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse float-right"id="collapse">
        <ul className="navbar-nav float-right">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/users">Users</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  )
}

module.exports = Navbar