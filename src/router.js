var express = require('express');
var router = express.Router();

router.get('/', require('./controllers/index').index)
router.get('/category',function(req,res) {
    res.redirect('/category/1');
})
router.get('/category/:id',require('./controllers/categories').category)
router.get('/post/:id',require('./controllers/post').post)

module.exports = router;