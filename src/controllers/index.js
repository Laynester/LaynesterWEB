const con = require('../db')
const functions = require('../functions.js')
exports.index = function(req, res){
    functions.logger(functions.getCallerIP(req)+ ' Accessed page index')
    con.query("SELECT * FROM content WHERE type = -1", function (err, categories, fields) {
        if (err) throw err;
        res.render('pages/index',{
            headline: 'Laynester',
            categories: categories
        })
    });
}