const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello Node Web Server</h1>')
})

const sql = require('mssql');

const config = {

    user: 'jakurstedt',
    password: 'jakurstedt2020',
    server: 'NAVSQL.ntdomain',
    database: 'Emsig Sandbox'
}

sql.connect(config, function (err)  {

    if (err) {
        console.log(err)
    }
    else {
        console.log('HI');
    }

    sql.close
})

const server = app.listen(5000, function() {
    console.log('Node web serve is runn..')
})