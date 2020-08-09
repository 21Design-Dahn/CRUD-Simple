const React = require('react')
const Layout = require('./Layout')
const Navbar = require('./Navbar')

function Users(props){
  //console.log(props)
  return(
    <Layout title={props.title}>
      <Navbar />
      <div className="container">
        <h1>User List</h1>
        <a className="btn btn-primary" href="/users/new">Create new users</a>
        {
          props.users.map(user =>{
            return(
              <div key={user.id} className="card my-2">
                <div className="card-body">
                  <h4 className="card-title">Name: {user.name}</h4>
                  <p className="card-text">Password: {user.password}</p>
                  <p className="card-text">Status: {user.status ? <span>Active</span> : <span>Offline</span>}</p>
                  <a href={`users/${user._id}`} className="btn btn-primary mr-2">Show more</a>
                  <a href={`users/edit/${user._id}`} className="btn btn-info mr-2">Edit</a>
                  <form action={`users/${user._id}?_method=DELETE`} method="POST" className="d-inline">
                    <button type="submit" className="btn btn-danger">Delete</button>
                  </form>
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

module.exports = Users