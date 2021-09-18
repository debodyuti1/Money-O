const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

router.post("/register", async (req,res)=>{
    try {
        //password hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
          fullname:req.body.fname,
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        });

        console.log(newUser);
        const user = await newUser.save();
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err)
      }
})

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404)
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400)
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  });

module.exports = router