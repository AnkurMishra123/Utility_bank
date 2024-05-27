const express = require('express')
const { registerController, loginController, CurrentUserController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router()

// routes
// Register || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

// gET CURRENT USER || GET
router.get('/current-user', authMiddleware,CurrentUserController)

module.exports = router