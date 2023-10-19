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

//! Get all data houseOwner, securityGuard, visitor
getData.get('/apis/getAllData',async (req,res)=>{
    const db = await connection();
    const [houseOwner] = await db.query(`select * from HouseOwner`);
    const [securityGuard] =await db.query(`select * from SecurityGuard`);
    const [visitor] = await db.query(`select * from visitor`);
    res.json({houseOwner,securityGuard,visitor});
});

//! Security who works that current time.
getData.get('/apis/getSecurity', async (req, res) => {
    try {
        const db = await connection();
        const [result] = await db.query(`
        select SecurityGuard.ID_SeG,SecurityGuard.FirstName,SecurityGuard.LastName,SecurityGuard.phone_number from SecurityGuard
        inner join WorkTime
        on SecurityGuard.ID_SeG = WorkTime.ID_SeG
    `)
        res.json( result[0] );
    } catch (err) {
        console.log(err)
    }
});

getData.post("/getDataById",async(req, res)=>{
    try{
        const { _id } = req.body;
        const db = await connection();
        const [id] = await db.query(`select * from HouseOwner where ID_Owner = ? or HouseNumber = ?`,[_id,_id]);
        /* const [houseNo] = await db.query(`select * from HouseOwner where HouseNumber = ?`,_id); */
        if(id ){
            return res.json(id);
        }else{
            return res.json({message:"There is no data."})
        }
    }catch(err){
        console.log(err);
        res.json(err);
    }
});

getData.post('/getDataFromTime', async(req, res)=>{

});
module.exports = getData;