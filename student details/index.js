const express = require('express')
require("./connections")
var studentModel= require("./models/students")
var app = express()

app.use(express.json());

app.post("/add",async(req,res)=>{
    try {
        console.log(req.body)
        await studentModel(req.body).save()
        res.send({message:"employee data added"});
    } catch (error) {
        console.log(error)
    }
})
app.get("/view",async(req,res)=>{
    try {
        var data = await studentModel.find()
    res.send(data)
    } catch (error) {
        console.log(error)
     }
    
});

app.delete("/delete",async(req,res)=>{
    try {
        await studentModel.findByIdAndDelete(req.body.id)
        res.send({message:"employee data deleted"});
    } catch (error) {
        console.log(error)
    }
});
app.put("/update/:id",async(req,res)=>{
    try {
        await studentModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"employee data updated"});
    } catch (error) {
        console.log(error)
    }
})

app.listen(3002,()=>{
    console.log("server started at port 3002")
})

