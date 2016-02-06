var express = require('express');
var app = express();
var PORT = 3000;

//app.get('/',function(req, resp) {
//    resp.send('Hello, express');
//});

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

// especify middleware up on top, otherwise it will never run

app.use(middleware.logger);

app.get('/about', middleware.requiredAuthentication, function(req, resp) {
    resp.send('About us!');
})

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function() {
    console.log('Express servers running on port(' + PORT + ')');
});
