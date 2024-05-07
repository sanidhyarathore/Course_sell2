const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course, User } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

router.post('/signup', async(req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/signin', async(req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    const user= await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        
        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect Email or Password"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {

    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

    const newcourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully', courseId: newcourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {

    const response = await Course.find({});
    res.json({
        courses:response
    })
});

module.exports = router;