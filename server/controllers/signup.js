const userService = require("../services/signup")
async function createUser(req, res) {
    try {
        const userData = req.body;
        //extracts the data from req.body and 
        //assigns it to a new constant variable called userData.
        const user = await userService.createUser(userData);
        res.status(201).json({ user: user, message: "User created SuccessFully!" })
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}
module.exports={createUser}