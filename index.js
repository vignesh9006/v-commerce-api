const express = require ('express');
const mongoose = require ('mongoose');
const cors =require('cors');
const dbConnection = require("./db");


const app = express();
app.use(express.json());
app.use(cors());


dbConnection();

  const customerDetailsSchema = new mongoose.Schema({
    userName : String,
    password : String,
    clientdetail : {
        address: String,
        city: String ,
        phoneNumber: String
    }
  });

  const CustomerDetailsModel =  mongoose.model('customerDetails',customerDetailsSchema);

app.listen(3002,()=>{
    console.log("server initiated");
})

app.get('/',async(req,res)=>{
  console.log("test30")

  CustomerDetailsModel.find().then((client) => {res.json(client)})
    .catch((err) => console.log('MongoDB connection error:', err));
})
app.post('/createClient',(req,res)=>{   
  
const{userName,password,clientdetail} = req.body;
console.log("test42",req.body)
CustomerDetailsModel.create({
userName,
password,
clientdetail
}).then((client)=>{res.json(client)})
.catch(err=>console.log(err))

    })