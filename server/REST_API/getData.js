require('dotenv').config();
const express = require('express');
const getData = express.Router();
const password = process.env.PASSWORD;
const host = process.env.HOST;
const mysql = require('mysql2/promise');

const connection = ()=>{
    return(
        mysql.createConnection({
            user:'admin',
            password:password,
            host:host,
            database:'testVilla'
        })
    )
}

getData.get('/apis/getData', async(req,res)=>{
    const db =await connection();
    const [houseOwner] =await db.query('select count(ID_Owner) as houseOwner from HouseOwner');
    const [visitor] = await db.query('select count(password) as visitor from visitor')
    const [securityGuard] = await db.query('select count(ID_SeG) as securityGuard from SecurityGuard')
    
    res.json({visitor:visitor[0].visitor,houseOwner:houseOwner[0].houseOwner,securityGuard:securityGuard[0].securityGuard});
})

module.exports = getData;