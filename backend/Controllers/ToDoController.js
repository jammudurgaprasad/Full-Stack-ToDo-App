const { ToDoModel } = require('../Models/ToDoModels');
module.exports.getToDo = async(req,res)=>{
    const toDo = await ToDoModel.find();
    res.send(toDo);
}

module.exports.SaveToDo = async(req,res)=>{
    const { text } = req.body;
    ToDoModel
        .create({ text })
        .then((data)=>{
            console.log("Added");
            console.log(data);
            res.send(data);
        })
}

module.exports.UpdateToDo = async(req,res)=>{
    const{ _id, text } = req.body;
    ToDoModel
        .findByIdAndUpdate(_id,{text})
        .then(()=>res.send("Updated successfully..."))
        .catch((err)=>console.log(err))
}

module.exports.DeleteToDo = async(req,res)=>{
    const {_id} = req.body;
    ToDoModel
        .findByIdAndDelete(_id)
        .then(()=>res.send("Deleted successfully..."))
        .catch((err)=>console.log(err))
}
