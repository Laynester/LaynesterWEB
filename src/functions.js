module.exports = {
    logger: function(message, type = ''){
        var time = new Date()
        var date = module.exports.dateformat(time)
        if(type == 'error') {
         console.log('\x1b[31m[LWEB] [ERROR] \x1b[0m' + message)
        } else {
         console.log('\033[38;5;5m[LWEB] \x1b[94m['+date+'] \x1b[0m' + message)
        }
    },
    dateformat: function(a){
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    },
    getCallerIP: function(request) {
        var ip = request.headers['x-forwarded-for'] ||
            request.connection.remoteAddress ||
            request.socket.remoteAddress ||
            request.connection.socket.remoteAddress;
        ip = ip.split(',')[0];
        ip = ip.split(':').slice(-1); //in case the ip returned in a format: "::ffff:146.xxx.xxx.xxx"
        return ip;
    }
};