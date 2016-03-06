module.exports = function(app, opts) {

    app.get('/api/:id/metrics', function(req, res) {

        var pathtofile = String(opts.data)
            .concat(req.params.id)
            .concat('/metrics.json');

        var data = opts.getJson(pathtofile);
        res
            .status(200)
            .send(JSON.stringify(data));
    });

    app.post('/api/:id/metrics', function(req, res) {
       res.sendStatus(200);
    });

    app.delete('/api/:id/metrics', function(req, res) {
       res.sendStatus(200);
    });

    app.put('/api/:id/metrics', function(req, res) {
        res.sendStatus(200);
    });
}
