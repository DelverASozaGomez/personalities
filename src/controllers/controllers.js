const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://bqjidnmxvodnan:413f5a3937b31a5e1091e80547ae3d667fc23e78b0707f283b11d74a12abcccb@ec2-107-22-83-3.compute-1.amazonaws.com:5432/d1kavnb8ai2q5p';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async(req, res)=>{
    res.status(200).json({ 
        message: 'Holis :3'
    });
}

const getPersonalities = async (req, res) =>{
    const response = await pool.query('SELECT * FROM personalities;');
    res.status(200).json(response.rows);
}

module.exports = {
    welcome, 
    getPersonalities
}