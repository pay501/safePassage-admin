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

addData.post('/search_date', async (req, res) => {
    const { start, end } = req.body;
    try {
        const db = await connection();
        const result = await db.query(`
        SELECT *
        FROM HouseOwner
        left JOIN HouseHold ON HouseOwner.HouseNumber=HouseHold.OwnerHouse
            WHERE InTime BETWEEN ? AND ?
        `, [start, end]);

        res.json(result);
    } catch (err) {
        // Handle errors here
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

addData.post('/search_date_visitor', async (req, res) => {
    const { start, end } = req.body;
    try {
        const db = await connection();
        const result = await db.query(`
        SELECT *
        FROM visitor
        WHERE entry_time BETWEEN ? AND ?
        ORDER BY entry_time DESC`, [start, end]);

        res.json(result);
    } catch (err) {
        // Handle errors here
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = addData;