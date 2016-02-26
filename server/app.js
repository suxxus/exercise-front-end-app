var express = require('express'),
    bodyparser = require('body-parser'),
    data = __dirname + '/data/',
    path = require('path'),
    port = process.env.PORT || 5000,
    jsonfileservice = require('./utils/jsonfilesrv'),
    endPoinstApi = require('./end-point-services/api'),
    CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

endPoinstApi(app, {
    data: data,
    getJson: jsonfileservice.getJsonFromFile

});

var server = app.listen(port, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
