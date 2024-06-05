const express=require('express')
const signupRoute=require('./routes/signup')
 const loginRoute=require('./routes/login')
const bodyParser=require('body-parser')
const userRoute=require("./routes/user")
const createAdminAccount=require('./scripts/admin')
const app = express();
const PORT=process.env.PORT||5000;
const cors=require("cors")

createAdminAccount()
app.use(bodyParser.json())
app.use(cors())
app.use('/user',signupRoute)
app.use('/auth',loginRoute)
app.use("/api",userRoute)
app.listen(PORT,()=>{
    console.log(`Server is Running on:http://localhost:${PORT}`);
})