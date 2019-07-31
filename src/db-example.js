var mysql = require('mysql')
const functions = require('./functions.js')
var con = mysql.createConnection({
    host     : 'secret',
    user     : 'Layne',
    password : 'secret',
    database : 'layne'
})

con.connect(function(err) {
    if (err) throw err
    functions.logger('Connected to databse[layne] - Layne@secret')
});
module.exports = con,getCategories