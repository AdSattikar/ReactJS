import React from 'react'
import { useState } from 'react';
function UseStateRegister() {
    const [form, setForm] = useState({
        userName: "",
        email: "",
        password: "",
    }
    );
    const handleInput = (event) =>{
        const name = event.target.name
        const value = event.target.value

        setForm((prev) =>{
            return{
                ...prev,[name] : value
            }
        })
    }
    return (
        
        <div> <h2>UseStateRegister:<br /></h2>
            <div className="container">
                <form>
                <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" name='userName' value={form.userName} onChange={handleInput} id="exampleInputName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={form.email} onChange={handleInput} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"value={form.password} onChange={handleInput} id="exampleInputPassword1" />
                    </div>
                    <div  className="form-text d-flex flex-row justify-content-evenly">Name: {form.userName} Email: {form.email}</div>
                    <button type="submit" className="btn btn-primary my-3">Register</button>
                    
                </form>
            </div>
        </div>
    )
}

export default UseStateRegister