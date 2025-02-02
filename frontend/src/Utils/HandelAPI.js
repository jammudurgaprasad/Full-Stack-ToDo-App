import axios from 'axios';


const baseURL = "http://localhost:5001";

const getAllToDo = (setToDo) =>{
    axios
        .get(baseURL)
        .then(({data}) =>{
            console.log('data -->',data);
            setToDo(data);
        })
}

const addToDo = (text, setText, setToDo) =>{
    axios
        .post(`${baseURL}/save`,{text})
        .then((data)=>{
            console.log(data);
            setText("");
            getAllToDo(setToDo);
        })
}


const updateTodo = (toDoId,text,setToDo, setText, setisUpdating) =>{
    axios
        .post(`${baseURL}/update`,{_id:toDoId,text})
        .then((data)=>{
            setText("");
            setisUpdating(false);
            getAllToDo(setToDo);
        })
        .catch((err)=>console.log(err))
}


const deleteTodo = (_id, setToDo) =>{
    axios
        .post(`${baseURL}/delete`,{_id})
        .then((data)=>{
            getAllToDo(setToDo);
        })
        .catch((err)=>console.log(err))
}

export {getAllToDo, addToDo, updateTodo, deleteTodo}