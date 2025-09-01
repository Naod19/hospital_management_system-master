require("dotenv").config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const jwtSecret = process.env.PRIVATE_KEY;
const User = require('../models/User');

//calling the middlewares
const {admin} = require("../middlewares/admin");

const superAdmin = require("../controllers/admin");

const {requireLogin} = require("../middlewares/loginrequest");

const reviews = require("../controllers/review");

const Blogs = require("../controllers/Blog ");

const upcomingPosts = require("../controllers/upcoming");


router.get('/users', admin, superAdmin.users);

router.get('/adminMoreReview/:id', reviews.reviewsAdmin);

router.get('/adminMorePost/:id', Blog s.Blog Admin);

router.get('/upcomingMorePost/:id', upcomingPosts.upcomingAdmin);

router.post('/deleteUser', requireLogin, superAdmin.deleteUser);

router.post('/suspendUser', requireLogin, superAdmin.suspendUser);

router.post('/unsuspendUser', requireLogin, superAdmin.unsuspendUser);

router.post('/isVerified', requireLogin, superAdmin.isVerified);


module.exports = router;
