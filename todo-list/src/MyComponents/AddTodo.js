import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc, setdesc] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank!");
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}id="title" aria-describedby="emailHelp"/>
            
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" value = {desc}onChange={(e)=>setdesc(e.target.value)}id="desc"/>
                </div>
    
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
