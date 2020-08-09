const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')

function Specific(props){
  //console.log(props)
  return(
    <Layout>
      <Navbar />
      <div className="container">
        <table className="table table-striped mb-6">
          <tbody>
            <tr>
              <th className="font-weight-bold" scope="row">Name:</th>
              <td>{props.user.name}</td>
            </tr>
            <tr>
              <th className="font-weight-bold" scope="row">ID:</th>
              <td>{props.user._id.toString()}</td>
            </tr>
            <tr>
              <th className="font-weight-bold" scope="row">Password:</th>
              <td>{props.user.password}</td>
            </tr>
          </tbody>
        </table>
      {/* <h1>Name : {props.user.name}</h1>
        <p className="text-muted mb-2">ID : {props.user._id.toString()}</p>
        <h3 className="mb-4">Password: {props.user.password}</h3> */}
        <a className="btn btn-primary mr-2 mt-2" href="/users">Back to users</a>
        <a className="btn btn-info mt-2" href={`users/edit/${props.user._id}`}>Edit</a>
      </div>
    </Layout>
  )
}

module.exports = Specific