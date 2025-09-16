

const express = require('express');
const session = require('express-session');



const path = require('path');
const contactRoutes = require('./routes/contactRoutes');
const doctorsRoute = require('./routes/doctors');
const appointmentRoutes = require('./routes/appointment');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

const dotenv=require('dotenv');
dotenv.config();
const connectDB = require("./config/db");
connectDB();
const app = express();

// Connect to database


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
  res.render("login");
});
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static('public'));

app.use("/", contactRoutes);
app.use('/', doctorsRoute);
app.use('/', appointmentRoutes);
app.use('/', blogRoutes);

app.use('/', authRoutes);
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get('/home', (req, res) => {
    res.render('home', { user: req.session.user });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/departments', (req, res) => {
    res.render('departments');
});

app.get('/doctors', (req, res) => {
    res.render('doctors');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/facilities', (req, res) => {
    res.render('facilities');
});



// const PORT = process.env.PORT || 3002;

app.use('/appointment', require('./routes/appointment'));



app.listen( process.env.PORT, () => {
    console.log(`🚀 Server running on ${process.env.PORT}`);
  });