require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const bcrypt = require('bcrypt');
const login = require('./LOGIN/login');
const getData = require('./REST_API/getData');
const getSecurity = require('./REST_API/getSecurity')

app.use(express.json());
app.use(cors({

}))

/* const password = ''
async function hash (){
    console.log(await (bcrypt.hash(password,10)))
}
hash() */

app.use('/',login)
app.use('/',getData)
app.use('/',getSecurity)

app.listen(1510,()=>{
    console.log('server is running')
})