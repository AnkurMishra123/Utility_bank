const express = require('express');
const dotenv= require('dotenv')
const colors= require('colors');
const morgan = require('morgan')
const cors= require('cors');
const connectDB = require('./config/db');

// dot config
dotenv.config();

// mongoDb connection
connectDB();

// rest object
const app = express();

// middlewaare
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

// routes
// 1 test route 
app.use('/api/v1/test', require("./routes/testRoutes"));

// port
const PORT = process.env.PORT || 8000;


// listen
app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} PORT : ${process.env.PORT}`
        .bgBlue.white
    );
});