const User = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(404).json({msg:"data not sent"});
    }
    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// 
const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find({});
    if (!userData) {
      return res.status(404).json({ msg: "user data for all not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: `user data not found` });
    }
    return res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateUser=async(req,res)=>{
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: `user data not found` });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {  new: true});
    return res.status(200).json(updatedData);
    
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

// 
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "user data not found" });
    }

    await User.findByIdAndDelete(userExist.id);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
// 
module.exports = {createUser ,getAllUsers,getOneUser,updateUser,deleteUser}

