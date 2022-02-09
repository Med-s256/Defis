const todo =require('../models/todo')



const create= async(req,res)=>{
 const todo1= await todo.create(req.body)
 res.status(201).json ({ todo1})

}

const getAll = async(req,res)=>{
    const all = await todo.find({})
    // console.log(all);
    //res.send(all)
    res.render('index',{all})
}

const updateTodo = async(req,res) => {
    const t = req.body.titre;
    const exist = todo.findOne({titre: t})
    console.log(exist);
    const t1 =await todo.findOneAndUpdate(t, req.body)
    .then (data => {
        if (!data){
            res.send("erreur")
        }else res.send("succes")
    })
    .catch(err => {
        res.send(err)
    })
}


module.exports={create,getAll,updateTodo};