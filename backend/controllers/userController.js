const User = require('../models/User');
const bcrypt =  require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv=require('dotenv');
dotenv.config();

// Create token with user id
const createToken = (_id) =>{
    // expiresIn 1 day
    // JWT_SECRET is a secret string that is used to sign the token
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn:'1d'});
};

// User creation 
const createUser = async (req, res) => {
    try {
        const {
            username,
            name,
            email,
            password,
            googleId,
            facebookId,
            profilePicture,
            role,
            userType,
            bio,
            portfolio,
            socialLinks
        } = req.body;
        // Ensure essential fields are provided based on the registration type
        if (!username) return res.status(400).json({error: 'Username is required'});
        
        if (!email) return res.status(400).json({error: 'Email is required'});
        // Password required only for email-based sign-up
        if(!password && !googleId && !facebookId){
            return res.status(400).json({error: "Password is required for email sign-up"});
        }
        // Check for unique email or social IDs
        const existingUser = await User.findOne({
            $or: [
              { email },
              ...(googleId ? [{ googleId }] : []),
              ...(facebookId ? [{ facebookId }] : [])
            ]
          });
          
          if (existingUser) {
            return res.status(400).json({ error: 'Bu eposta adresiyle veya kimlik bilgisiyle zaten bir kullanıcı mevcut' });
          }
          // generate salt and hash password for secure storage.
          let hashedPassword;
          if(password && password.trim() !== ''){
            
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt); 
          }
         
        // Creating user with only the fields provided
        const newUser = new User({
            username,
            name,
            email,
            password: googleId || facebookId ? undefined : hashedPassword,
            googleId,
            facebookId,
            profilePicture,
            role,
            userType,
            bio,
            portfolio,
            socialLinks,
        });
        await newUser.save();
        const token = createToken(newUser._id);
        res.status(201).json({newUser:newUser, token:token});
    } catch (error) {
        console.error("Error during user creation:", error);
        res.status(500).json({error: "User creation is failed."});
    }
}
// Listing all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(users.length === 0){
            res.status(200).json({message: "No users found", users: [] });
        }else{
            res.status(200).json(users);
        }
        
    } catch (error) {
        res.status(500).json({ error: 'All users couldnt got' });
    }
};
// Login User
const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if(!validPassword){
           return res.status(400).json({
                message:"Invalid Password",
                status: "400 Bad Request",
            });
        }
        const token = createToken(user._id);
     
        res.status(200).json({user:user, token:token});
        
    } catch (error) {
        res.status(500).json({error: " Kullanıcı getirilemedi."})
    }
};
// Get User
const getUserById= async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({error: " Kullanıcı getirilemedi."})
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,  // Contains the updated fields
            {new: true, runValidators: true} // Returns the updated user and applies schema validations
        );

        if(!updatedUser) {
            return res.status(404).json({message: 'User not found.'});
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({error: "Kullancı bilgileri güncellenemedi."});
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) {
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        res.status(500).json({error: "Kullanıcı silinemedi."})
    }
};

// Get User By Type 
const getUserByType = async(req, res) => {
    try {
        const userType = req.params.type;
        const users = await User.find({userType});

        if(users.length === 0){
            return res.status(404).json({message: "No users found for this type"});
        }
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({error: "İstenilen kullanıcılar getirilemedi. "});
    }
};



module.exports = { getAllUsers, createUser , loginUser, getUserById, updateUser, deleteUser, getUserByType};
