const { text } = require("express");
const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})
const ToDoModel = mongoose.model('ToDo',todoSchema);
module.exports = { ToDoModel };