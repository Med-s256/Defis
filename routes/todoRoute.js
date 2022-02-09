const express =require('express')
const {create,getAll,updateTodo} = require('../controllers/todoController')

const router = express.Router()


router.post('/add',create)
router.get('/list',getAll)
router.patch('/update',updateTodo)

module.exports=router