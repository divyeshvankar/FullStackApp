const express = require ('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

const database= [{
    email:"hello@gmail.com",
    password:"123"
}]


app.post("/login",(req,res)=>{
    console.log("here")
    const userInfo= req.body;
    const exist = database.some(user=>user.email===userInfo.email && user.password===userInfo.password);
    if(exist)
    {
        res.status(200).json({message:"User Login Successfully!"})
    }else
    {
        res.status(404).json({message:"User Not Found"})
    }
    console.log("out")
})


app.post("/signup",(req,res)=>{
    console.log("here")
    const userInfo= req.body;
    const exist = database.some(user=>user.email===userInfo.email);
    if(!exist)
    {
        database.push(userInfo);
        res.status(200).json({message:"User Sign Up Successfully!"})
    }else
    {
        res.status(403).json({message:"User Already Exist"})
    }
    console.log("out")
})


app.listen(3000,()=>{
    console.log("server is running on 3000")
})
