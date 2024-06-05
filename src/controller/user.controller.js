const jwt = require('jsonwebtoken');
let User = require("../model/user.model");
module.exports.SignUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let user = new User({ username, email, password });
    let result = await user.save();
    res.send({ success: true, data: user });
  } catch (err) {
    res.send({ success: false, data: err.message });
  }
};

module.exports.Signin = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({email});
        if(!user){
            res.send({ success: false, data:'User not found' });
        } else {
            if(!user.authenticate(password)){
                res.send({ success: false, data: 'Incorrect password' });
            } else {
                const token = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET)
                // res.send({success:true, data: `Welcome to ${user.username}`})
                res.send({success:true, data: token});
            }
        }
    }
    catch (err) {
        res.send({ success: false, data: err.message });
    }
};
