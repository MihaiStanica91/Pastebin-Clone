const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "mihai",
    host: "localhost",
    database: "pastebin",
    password: "password",
    port: 5432,
});

module.exports = pool;