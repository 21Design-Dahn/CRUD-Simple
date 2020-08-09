const React = require('react')
const Layout = require('../Layout')
const Navbar = require('../Navbar')
const EditFormFields = require('./EditFormFields')

function Edit(props){
  //console.log(props)
  return(
    <Layout>
      <Navbar />
      <div className="container">
        <h3 className="mb-4">Information</h3>
        <table className="table table-striped mb-6">
          <tbody>
            <tr>
              <th className="font-weight-bold" scope="row">Current Name:</th>
              <td>{props.user.name}</td>
            </tr>
            <tr>
              <th className="font-weight-bold" scope="row">ID:</th>
              <td>{props.user._id.toString()}</td>
            </tr>
            <tr>
              <th className="font-weight-bold" scope="row">Current Password:</th>
              <td>{props.user.password}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <form className="mt-4" action={`/users/edit/${props.user._id}?_method=PATCH`} method="POST">
        <EditFormFields data={props} />
      </form>
    </Layout>
  )
}

module.exports = Edit