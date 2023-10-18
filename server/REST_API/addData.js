require('dotenv').config()
const express = require('express');
const addData = express.Router();
const mysql = require('mysql2/promise');
const password = process.env.PASSWORD;
const host = process.env.HOST;

const connection =()=>{
    return(
        mysql.createConnection({
            user:"admin",
            password:password,
            host:host,
            database:"testVilla"
        })
    )
};
/*addData.use(express.json()); */

addData.post('/addNew',async (req,res)=>{
    const { houseNo, idOwner, firstName, lastName, tel } = req.body;
    try{
        const db = await connection();
        await db.query(`insert into HouseOwner values(?,?,?,?,?)`,[houseNo, idOwner, firstName, lastName, tel]);
        res.json({message:"Insert successfully"})
    }catch(err){
        console.log(err)
        res.json({message:"Insert failed"});
    }
});

module.exports = addData;