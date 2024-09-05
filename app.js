const express = require('express');
const app =express();
const bodyParser =require('body-parser');
const cors=require('cors');
// const mongoose=require('mongoose');

const passengerRoutes= require('./api/routes/passenger');

// mongoose.connect("mongodb+srv://nodeApi:nodeApi@nodeapi.khkvqze.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true});
app.use('/uploads', express.static('uploads'));  // to access image publically
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'DELETE',
      'PATCH',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));

// app.use('/products',productRoutes);

// router.get('/list', async (req, res, next) => {
//     const id = req.params.productId;
//     await Product.findById(id)
//         .exec()
//         .then(result => {
//             if (result)
//                 res.status(200).json(result);
//             else
//                 res.status(404).json({
//                     message: 'Not a valid Entery'
//                 })
//         })
//         .catch(err => {
//             res.status(500).json({
//                 err
//             })
//         })
// })
app.use('/passengers',passengerRoutes);
app.use((req,res,next)=>{
   res.status(404);
   res.json({
    error:{
        message: 'Not Found'
    }
   })
})

module.exports=app;
