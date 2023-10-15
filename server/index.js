require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const bcrypt = require('bcrypt');
const login = require('./LOGIN/login');

app.use(express.json());
app.use(cors({

}))

/* const password = '1510401227611spy'
async function hash (){
    console.log(await (bcrypt.hash(password,10)))
}
hash() */

app.use('/',login)

app.listen(1510,()=>{
    console.log('server is running')
})