module.exports = function(app)
    {
        app.get('*', function(req, res){
            res.status(200).sendFile(appRoot+'/public/dist/index.html');
        });
    }