const todo =require('../models/todo')



const create= async(req,res)=>{
    // console.log(req.params.titre);
    console.log(req.params.titre);
 const todo1= await todo.create(req.body)
 res.status(201).json ({ todo1});
//  res.render('ajout');

}

const getAll = async(req,res)=>{
    const all = await todo.find({})
    // console.log(all);
    //res.send(all)
    res.render('index',{all})
}

const updateTodo = async(req,res) => {
    const t = req.body.titre;
    const t1 =await todo.findOneAndUpdate({titre: t}, req.body)
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