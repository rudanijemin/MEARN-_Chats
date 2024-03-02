const generateToken = require("../config/generateToken");
const User = require("../models/userModels")

const registerUser=async(req,res)=>{
    try {
        const { name, email, password,pic } = req.body;

        if (!name || !email || !password) {
          res.status(400).json({
            message:"Please Enter all the Feilds"
          })
        }

      
        const userExists = await User.findOne({ email });
      
        if (userExists) {
          res.status(400).json({
            message:"User already exists"
          })
        }

        const user = await User.create({
          name,
          email,
          password,
          pic
        });

        if (user) {
          res.status(201).json({
            // _id: user._id,
            // name: user.name,
            // email: user.email,
                // isAdmin: user.isAdmin,
            // pic: user.pic,
            token: generateToken(user._id),
            user
          });
        } else {
          res.status(400).json({
            message:"user not found"
          })
        }
    } catch (error) {
        res.json({
            message:"code not run run"
        })
    }
}

const authUser = async (req, res) => {
    const { email, password } = req.body;
    console.log("email",email);
  
    const user = await User.findOne({ email });
  
    if (user) {
      res.json({
        user,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({
        message:"Invalid Email or Password"
      })
    }
  };

const allUsers = async(req,res)=>{
    const keyWord = req.query.search
    ? {
      $or: [
        { name: { $regex: req.query.search, $options: "i" } },
        { email: { $regex: req.query.search, $options: "i" } },
      ],
    }:{};
    const users = await User.find(keyWord).find({ _id: { $ne: req.user._id } });
    res.send(users);
}
module.exports = {registerUser,authUser,allUsers}