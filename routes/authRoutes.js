const express = require('express')
const { registerController, loginController } = require('../controllers/authController')

const router = express.Router()

// routes
// Register || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

module.exports = router