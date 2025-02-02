import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateTodo, deleteTodo } from "./Utils/HandelAPI";


function App() {
  const [toDo,settoDo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdating,setisUpdating] = useState(false);
  const [toDoId,settoDoId] = useState("");

  useEffect(()=>{
    getAllToDo(settoDo);
  },[])

  const updateMode =(_id,text)=>{
    setisUpdating(true);
    setText(text);
    settoDoId(_id);
    
  }


  return (
    <div className="App">

      <div className="container">

        <h1>To Do App</h1>
        <div className="top">
          <input type="text" placeholder="Add toDo..." 
            value={text}
            onChange ={(e)=> setText(e.target.value)}
          />
          <button className="add" onClick={isUpdating ? ()=>  updateTodo(toDoId,text, settoDo, setText, setisUpdating) 
          : ()=>addToDo(text, setText, settoDo)}>{isUpdating ? "Update" : "Add"}</button>
        </div>

        <div className="list">

          {toDo.map((item) =><ToDo key={item._id} text={item.text}
            updateMode = {() => updateMode(item._id,item.text)}
            deletetodo = {()=>deleteTodo(item._id,settoDo)}
          />)}

        </div>

      </div>
      <p style={{ paddingTop: "50px", textAlign: "center" }}>
        Developed by <strong>Jammu Durga Prasad</strong>
      </p>

    </div>
  );
}

export default App;
