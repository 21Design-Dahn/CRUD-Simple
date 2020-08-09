const express = require('express')
const Users = require('../../models/Users')
const usersCollections = require('../../collections/usersCollection')

const router = express.Router()

router.get('/', usersCollections.user_landing)
router.get('/new', usersCollections.user_new)
router.get('/edit/:id', usersCollections.user_edit)

//BASIC CRUD OPERATIONS

//CREATE a new user - POST: POST a request to create new users
router.post('/', usersCollections.create_user)

//READ a specific user - GET: GET a request to read a specific user
router.get('/:id', usersCollections.get_user)

//UPDATE a specific user - POST: PATCH or update a user
router.patch('/edit/:id', usersCollections.patch_user)

//DELETE a specific user - POST: DELETE or remove specific user
router.delete('/:id', usersCollections.delete_user)
module.exports = router