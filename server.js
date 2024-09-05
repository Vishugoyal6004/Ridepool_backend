require('dotenv').config();
const http= require('http');
const mongoose=require('mongoose');
const app =require('./app');
const port = process.env.PORT || 5000;


mongoose.set('strictQuery',false);
const connectDB=async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true});
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


const server =http.createServer(app);

connectDB().then(()=>{
    server.listen(port,()=>{
    console.log(`Listening on port ${port}`);
} );

})