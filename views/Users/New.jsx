const React = require('react')
const Navbar = require('../Navbar')
const Layout = require('../Layout')
const NewFormFields = require('./NewFormFields')

function New(){
  return(
    <Layout>
      <Navbar />
      <form action="/users" method="POST">
        <NewFormFields />
      </form>      
    </Layout>
  )
}

module.exports = New