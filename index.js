const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const Users = require('./models/Users')
const UsersRouter = require('./routes/api/users')

const app = express()
const port = 3000
const uri = 'mongodb+srv://dahn:dahn123@testcluster-kd2js.mongodb.net/datas?retryWrites=true&w=majority'

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
let options = { beautify: true }
app.engine('jsx', require('express-react-views').createEngine(options))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', require('./collections').index)

// Connecting to mongodb thru mongoose 
mongoose.connect(uri , {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected')
});

// Serving server side rendering or static files

//Routes : users
app.use('/users', UsersRouter)

app.listen(port, () => {
  console.log(`you are listening to port ${port}`)
})