const con = require('../db')
const functions = require('../functions.js')
exports.category = function(req, res){
    functions.logger(functions.getCallerIP(req)+ ' Accessed category '+ req.params.id)
    con.query("SELECT * FROM content WHERE type = ?",req.params.id, function (err, categories, fields) {
        if (err) throw err;
        res.render('pages/categories',{
            headline: 'Laynester',
            categories: categories
        })
    });
}