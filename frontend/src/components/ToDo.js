import React from 'react'

const ToDo = ({text,updateMode ,deletetodo}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <button onClick={updateMode }>Edit</button>
        <button onClick={deletetodo}>Delete</button>
    </div>
  )
}

export default ToDo