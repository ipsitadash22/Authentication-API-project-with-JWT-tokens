const express = require("express");
const {registerUser,loginUser,getUsers}=require('../userController');
const {userRegisterValidate,userLoginValidate}=require('../utils/userValidation');
const {ensureAuthenticated}=require('../utils/auth')

const routes=express.Router();
//yahan pe sirf routes ko define karenge
//middleware and url
routes.post('/register',userRegisterValidate,registerUser);
routes.post('/login',userLoginValidate,loginUser);
//a route to check if the user has authenticated jwt token if yes then only u can access it
routes.get('/users',ensureAuthenticated,getUsers);
module.exports=routes;