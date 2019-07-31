const con = require('../db')
const functions = require('../functions.js')
exports.post = function(req, res){
    con.query("SELECT * FROM content WHERE id = ?",req.params.id, function (err, post, fields) {
        if (err) throw err;
        res.render('pages/post',{
            headline: 'Laynester',
            postTitle: post[0].name,
            postBody: post[0].body
        })
        functions.logger(functions.getCallerIP(req)+ ' Accessed post '+ post[0].name)
    });
}