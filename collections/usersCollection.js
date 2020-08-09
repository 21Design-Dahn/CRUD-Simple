const Users = require('../models/Users')
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID

exports.user_landing = async function(req, res) {
  const users = [
    {
      name: 'Dave',
      password: 'dave123456',
      status: true,
      dateRegistered: new Date().toLocaleDateString()
    },
    {
      name: 'George',
      password: 'george123456',
      status: false,
      dateRegistered: new Date().toLocaleDateString()
    }
  ]
  
  try{
    const usersdb = await Users.find()
    res.render('Users', {title: 'CRUD application', users: usersdb})
  }catch(err){
    console.log(err)
    res.send(err)
  }
}

exports.user_new = function(req, res){
  res.render('Users/New', {/*users: new db()*/})
}

exports.user_edit = async function(req,res){
  try{
    let user = await Users.findById(req.params.id)
    res.render('Users/Edit', {user: user})
  } catch(err){
    res.send(err)
  }
}

exports.get_user = async function(req, res){
  try{
    const user = await Users.findById(req.params.id).exec()
    console.log(user)
    res.render(`Users/Specific`, { user: user })
  }catch(err){
    res.send(err)
  }
}

//POST request
exports.create_user = function(req, res){
  const newUsers = new Users({
    name: req.body.name,
    password: req.body.password,
    status: false
  })

  newUsers.save()
    .then(data => {
      res.redirect('/users')
    }).catch(err => {
      res.send(err)
    })
}

exports.patch_user = async function(req, res){
  try{
    const updateUser = await Users.updateOne(
      { _id: req.params.id },
      { $set: {
          name: req.body.name,
          password: req.body.password
        }
      }
    )
    res.redirect('/users')
  }catch(err){
    console.log(err)
    res.send(err)
  }
}

exports.delete_user = async function(req, res){
  try{
    const removedPost = await Users.remove({ _id: req.params.id })
    res.redirect('/users')
  } catch(err){
    console.log(err)
    res.send(err)
  }
}