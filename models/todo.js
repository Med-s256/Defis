const mongoose=require('mongoose')


const todoSchema = new mongoose.Schema ({
      

    date :{
        type:String,
    },

    titre:{
        type:String,
    },
    message:{
 type:String
    }
})

module.exports= mongoose.model("todo",todoSchema);