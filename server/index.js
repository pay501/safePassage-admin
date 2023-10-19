require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const bcrypt = require('bcrypt');
const login = require('./LOGIN/login');
const getData = require('./REST_API/getData');
const addData = require('./REST_API/addData');
const updateData = require('./REST_API/updateData');
const deleteData = require('./REST_API/deleteData');

app.use(express.json());
app.use(cors({

}));

/* const password = ''
async function hash (){
    console.log(await (bcrypt.hash(password,10)))
}
hash() */

app.use('/',login);
app.use('/',getData);
//app.use('/',getSecurity);
app.use('/api',addData);
app.use('/',updateData);
app.use('/',deleteData)
app.listen(1510,()=>{
    console.log('server is running')
});