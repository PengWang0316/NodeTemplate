const normalRouter = require('express').Router();
// const cloudinary = require('cloudinary');

require('dotenv').config(); // Loading .env to process.env

// Controllers import
const login = require('../controllers/Login');
const registerNewUser = require('../controllers/RegisterNewUser');

// cloudinary.config({ // confige the cloudinary library.
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

/* User login */
normalRouter.get('/login', login);

/* Register a new user */
normalRouter.post('/registerNewUser', registerNewUser);

module.exports = normalRouter;
