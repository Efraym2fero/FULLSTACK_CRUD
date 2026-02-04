const users = require("../models/users");


const getAllUsers = async (req,res)=>{
    try {
        const user = await users.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getaUser = async (req,res)=>{
    try {
        const {id} = req.params 
        const user = await users.findById({_id:id});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const createUser = async (req,res)=>{
    try {
        const user = await users.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const updateUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await users.findByIdAndUpdate(id,req.body);
        if(!user){
            return res.status(404).json({message:"not found"});
        }
        const updatedUser = await users.findByIdAndUpdate(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await users.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message:"not found"});
        }
        res.status(200).json({message:"Deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    getAllUsers,
    getaUser,
    createUser,
    updateUser,
    deleteUser
}
