
var middleware = {
    requiredAuthentication: function(req, resp, next) {
        console.log('private route hit');
        next();
    },
    logger: function(req, resp, next) {
        d = new Date().toString();
        console.log('Request (' + d + '): ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;
