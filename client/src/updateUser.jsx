import React, { useState,useEffect } from "react" 
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function UpdateUser (){
    const nav = useNavigate()
    const {id} = useParams()
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [email,setEamil] = useState()
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/update/${id}`)
            const user = response.data
            setName(user.name)
            setAge(user.age)
            setEamil(user.email)
        } catch (error) {
            console.log(error)}
        }
    fetchUser()
},[id])  
                
          

    const Update = async (e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            await axios.put(`http://localhost:3000/update/${id}`,{name,age,email})
            nav("/")
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }
    const goBack =()=>{
        nav("/")
    } 
    return( 
    <div>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-light rounded p-3">
            <form onSubmit={Update}>
                <h2>Uppdate User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Your Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Your Age" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter Your Email" className="form-control" value={email} onChange={(e)=>setEamil(e.target.value)}/>
                </div>
                <button className="btn btn-primary m-1">Update</button>
                <button onClick ={goBack} className="btn btn-primary">Back</button>
            </form>
        </div>
    </div>
    </div>
    )
};
export default UpdateUser;