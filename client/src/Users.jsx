import axios from "axios";
import React, {useEffect, useState} from "react" 
import { Link } from "react-router-dom";

function Users (){
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then(res => setUsers(res.data))
        .catch(e => console.log(e))
    })

    const Delete = async(id)=>{
        try {
            await axios.delete(`http://localhost:3000/delete/${id}`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return( 
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-dark rounded p-3">
            <Link to="/create" className="btn btn-light m-2 ">Add +</Link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return(
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>
                                <Link to={`/update/${user._id}`} className="btn btn-dark m-1">Update</Link>
                                <button className="btn btn-danger" onClick={(e)=>Delete(user._id)}>Delete</button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
    )
};
export default Users;