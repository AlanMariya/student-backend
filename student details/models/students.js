const mongoose = require('mongoose');
var Schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    StdId:Number 
})
var StudentModel = mongoose.model("student",Schema)

module.exports = StudentModel