const express =require('express')
const {create,getAll,updateTodo} = require('../controllers/todoController')
const router = express.Router()
router.use(express.json());
router.use(express.urlencoded({extended:false}));
router.post('/add',(req,res)=>{
    // console.log(req.params.titre);
    console.log(req.body)})
router.get('/add', (req,res)=>{
    res.render('ajout')

})
router.get('/list',getAll)
router.patch('/update',updateTodo)

module.exports=router