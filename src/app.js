const   express = require('express'),
        app = express(),
        path = require('path'),
        router = require('./router.js'),
        functions = require('./functions.js'),
        sassMiddleware = require('node-sass-middleware')
const server = app.listen(7000, () => {
    console.clear()
    console.log('\033[38;5;5m')
    console.log(` _                                _          __        _______ ____  `)
    console.log(`| |    __ _ _   _ _ __   ___  ___| |_ ___ _ _\\ \\      / / ____| __ ) `)
    console.log("| |   / _` | | | | '_ \\ / _ \\/ __| __/ _ \\ '__\\ \\ /\\ / /|  _| |  _ \\ ")
    console.log(`| |__| (_| | |_| | | | |  __/\\__ \\ ||  __/ |   \\ V  V / | |___| |_) |`)
    console.log(`|_____\\__,_|\\__, |_| |_|\\___||___/\\__\\___|_|    \\_/\\_/  |_____|____/ `)
    console.log(`            |___/                                                    \n\x1b[0m`)
    functions.logger(`Express running →\x1b[32m PORT ${server.address().port}\x1b[0m`);
});
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/',router);
app.use('/stylesheets',sassMiddleware({
        src: __dirname + '/sass',
        dest: __dirname + '/public/stylesheets',
        debug: false,
        outputStyle: 'compressed',
    })
);  
app.use(express.static(__dirname + '/public'));