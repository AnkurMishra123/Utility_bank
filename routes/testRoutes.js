const express =  require('express');
const { testController } = require('../controllers/testController');

// route object
const router= express.Router();

// orutes
router.get("/",testController);

// export 
module.exports= router;



