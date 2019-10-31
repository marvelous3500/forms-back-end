
const express = require("express");
const bodyParser = require ('body-parser');
import userrouter from './src/api/routes/usersRouter'
import * as auth from './src/api/Middleware/auth'
const connectDB = require('./src/api/config/db');


var app = express()
connectDB();
const port = process.env.PORT || 5000
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/login', auth.getToken)
app.use('/api/v1/users', userrouter)

app.get('/', (req, res) => res.send('welocme to Form App'))
app.listen(port, () => console.log(` server is runing  on port ${port}!`))
export default app

