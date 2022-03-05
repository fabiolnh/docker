const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'test'
};
var resultados = []

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO tabela(name) values('Teste')`
connection.query(sql)
connection.query("select name from test.tabela", function(err, result, fields) {
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        resultados.push(row.name)
      })
})
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1> <br/> ' + resultados)
})   

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})