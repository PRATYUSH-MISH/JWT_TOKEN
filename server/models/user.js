const mongoose=require('../configuration/dbConfig')

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    //store two data admin and customer by default its customer
    role :{type:String,enum:["admin","customer"],default:"customer"}
})
module.exports=mongoose.model("User",userSchema)