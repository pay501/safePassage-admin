require('dotenv').config();
const express = require('express');
const getSecurity = express.Router();
const password = process.env.PASSWORD;
const host = process.env.HOST;
const mysql = require('mysql2/promise');

const connection = () => {
    return (
        mysql.createConnection({
            user: 'admin',
            password: password,
            host: host,
            database: 'testVilla'
        })
    )
}

getSecurity.get('/apis/getSecurity', async (req, res) => {
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
})

module.exports = getSecurity;