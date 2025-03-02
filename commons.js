require('dotenv').config();


module.exports.DB_CONFIG = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    max: process.env.DB_MAX_POOL_SIZE || 20,
};