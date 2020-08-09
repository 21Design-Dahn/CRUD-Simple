var React = require('react')

const Layout = require('./Layout')
const Navbar = require('./Navbar')
const Showcase = require('./Showcase')

function index(props) {
  return(
    <Layout title={props.title}>
      <Navbar />
      <Showcase />
    </Layout>
  )
}

module.exports = index