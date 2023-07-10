const express = require('express')
const dotenv =require('dotenv')
const cors = require('cors');

const connectDB =require('./Config/Config.js')


const fs = require('fs');
const path = require('path');

// Use your routes


const app = express()
const corsOptions = {
   origin: 'https://vikashpizza.vercel.app',
   credentials: true,
   optionSuccessStatus: 200,
 };
 app.use(cors(corsOptions));



dotenv.config()

connectDB()


app.use(express.json())


//route
app.use(require('./routes/pizzaRoutes.js'));
app.use(require('./routes/userRoutes.js'));
app.use(require('./routes/orderRoutes.js'));



app.get('/', (req, res) => {


    res.send('<h1>Hello from node server</h1>');
})

const port =process.env.Port || 8080
app.listen(port, () => {

    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT} `);



});

