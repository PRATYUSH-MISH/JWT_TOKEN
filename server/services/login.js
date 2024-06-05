const User = require('../models/user')
const bcrypt = require("bcrypt")
const { generateToken } = require('../utils/jwtUtils')
const { verifyToken } = require('../utils/authMiddleWare')
async function login(email, password) {
   try {
      const existingUser = await User.findOne({ email })
      if (!existingUser) {
         throw new Error("User not Found")
      }
      const isPasswordValid = bcrypt.compare(password, existingUser.password)
      if (!isPasswordValid) {
         throw new Error("Invalid Password")
      }
      const token = generateToken(existingUser)
      return token
   } catch (error) {
      console.log("Login error:", error.message);
      throw new Error("Invalid Credentials")
   }

}
async function refreshToken(oldToken) {
   try {
      const decodedToken = verifyToken(oldToken)
      const user = User.findById(decodedToken._id)
      if (!user) {
         throw new error("User not Found ");

      };
      const newToken = generateToken(user)
      return newToken;
   } catch (error) {
      throw new error ("Invalid Token")
   }
}
module.exports = { login, refreshToken }