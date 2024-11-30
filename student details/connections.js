const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://alanmariya001:dbuseralanmariya@cluster0.h5vof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to MongoDB Atlas");
})
.catch((err)=>{
    console.log(err);

})