const express = require('express');
const cors = require('cors');

require('dotenv').config();

const routes = require('./routes');


const app = express();


const AuthRegisterUserRoutes = require('./routes/AuthRegisterUserRoutes');

const AuthRegisterUserController = require('./controllers/AuthRegisterUserController');




app.use('/', AuthRegisterUserRoutes);
app.use(express.json());
app.use(cors());   
app.use(routes); 

const port = process.env.PORT || 3030;

app.listen(3030, () => {
    console.log('api running on port 3030'); 
});

require ("./database/connection")