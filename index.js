const express = require('express');
const app = express();


app.set('views','./views');
app.set('view engine','pug');

const connectDB=require('./db/db')
require('dotenv').config();
const todoRoute = require('./routes/todoRoute')
port = process.env.PORT || 3000;


app.use(express.json());
app.use('/',todoRoute)

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
    

app.listen(port, () => console.log(`the server is running on port ${port}`));

}

catch(error){
console.log(error)}

}

start()