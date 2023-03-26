const express = require('express')
const dotenv =require('dotenv')

const connectDB =require('./Config/Config.js')
const morgan = require('morgan')



dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(morgan('dev'))


//route
app.use(require('./routes/pizzaRoutes'));
app.use(require('./routes/userRoutes'));



app.get('/', (req, res) => {


    res.send('<h1>Hello from node server</h1>');
})

const port =process.env.Port || 8080
app.listen(port, () => {

    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT} `);



});

