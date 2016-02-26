var express = require('express'),
    bodyparser = require('body-parser'),
    data = __dirname + '/data/',
    path = require('path'),
    port = process.env.PORT || 5000,
    jsonfileservice = require('./utils/jsonfilesrv'),
    endPoinstApi = require('./end-point-services/api'),
    favicon = require('serve-favicon'),
    CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


endPoinstApi(app, {
    data: data,
    getJson: jsonfileservice.getJsonFromFile

});

var server = app.listen(port, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log(path.join(__dirname, 'public', 'favicon.ico'));
    console.log('Example app listening at http://%s:%s', host, port);
});
