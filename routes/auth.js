const express=require("express");
const bcrypt =require("bcrypt");
const User =require("../models/user");

const router = express.Router();

//register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

     await User.create({ name, email, password:hash});
    // User.save();
    res.redirect("/");
  } catch (err) {
    // Show error on registration page
    res.render("register", { error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
   // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "dileepchitta");
    // res.cookie("token", token, { httpOnly: true });

    // Redirect to navbar/home page after successful login
  
    const { email, password } = req.body;

     
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    const match = await bcrypt.compare(password, user.password);
    console.log('user tryed to log in',user.email);
    if (!user) return res.render("login", { error: "User not found" });

    // const match = await bcrypt.compare(password, user.password);
    
   else if (!match) return res.render("login", { error: "Invalid password" });else{return res.redirect('/home')};
    
});

router.get('/logout',(req,res)=>{
  res.render('login');
})


module.exports= router;
