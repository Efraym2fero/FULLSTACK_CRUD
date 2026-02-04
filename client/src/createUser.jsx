import React, { useState } from "react" 
import { useLoaderData, useNavigate } from "react-router-dom"
import axios from "axios"

function CreateUser (){
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [email,setEamil] = useState()
    const nav = useNavigate()
    const [loading,setLoading] = useState(false)

    const Submit = async(e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post("http://localhost:3000/create",{name,age,email})
             nav("/")
        } catch (error) {
            console.log(error)
        }  
        finally{
            setLoading(false)
        }
    }
     const goBack = ()=>{
        nav("/")
     }

    return( 
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-light rounded p-3">
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Your Name" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Your Age" className="form-control" onChange={(e)=>setAge(e.target.value)} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter Your Email" className="form-control" onChange={(e)=>setEamil(e.target.value)}/>
                </div>
                <button type="submit" disabled={loading} className="btn btn-primary m-1">
                {loading ? 'Saving...' : 'Submit'}
                </button>
                <button onClick={goBack}  className="btn btn-primary " >Back</button>
            </form>
        </div>
    </div>
    )
};
export default CreateUser;