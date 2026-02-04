const express = require("express");
const users = require("../models/users");
const router = express.Router();

const {createUser, updateUser, deleteUser,getAllUsers,getaUser} = require("../controllers/usersControllers");

router.get("/",getAllUsers);
router.get("/:id",getaUser);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;



