// --------------------------Dependencies
// npm init
// npm install express nodemon mongoose dotenv
// dotenv is used to hide data inputs for authentication purposes

// TO ALLOW CROSS INFORMATION SHARING BETWEEN WEBSITES:
// npm install cors
// const cors = require('cors')
// --------Middleware
// app.use(cors())

// Load express to create routes
const express = require('express');
const app = express();

// Load environment tools (.env)
require('dotenv/config')

// Load mongoose
const mongoose = require('mongoose');

// Load body content parser
const bodyParser = require('body-parser');

// --------------------------Middlewares (actions that our app will make from the routes)
app.use(bodyParser.json());

// app.use('/posts', () => {
//     console.log("This is a middleware running")    
// })

// To ensure a user is authenticated in our web
// app.use(auth)

// --------------------------Import routes
const postsRoute = require('./routes/posts');

// --------------------------Middleware for routes
// Everytime we ask for '/posts', the app will use './routes/posts'
app.use('/posts', postsRoute)

// --------------------------Routes (we will put these on .env under router)
// app.get('/', (req, res) => {
//     res.send('You are in home')
// })

// app.get('/posts', (req, res) => {
//     res.send('You are in posts')    
// })

// DB connection
mongoose.connect(
    // (The following line is hardcode; we will use the connection in the .env file to hide the sign in data)
    // "mongodb+srv://testuser:demoniclaugh@first.0ry8b.mongodb.net/sample_analytics?retryWrites=true&w=majority",
    process.env.DB_CONNECTION, // We summon DB_CONNECTION from .env file to hide "user" and "password"
    {useNewUrlParser: true,
        useUnifiedTopology: true },
    () => console.log("Connected to DB!")
    );

// Server listening
app.listen(process.env.port || 3005, () => console.log('Running at Port 3005'));