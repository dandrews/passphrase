var express = require('express'),
passphrase = require('./routes/passphrase');
 
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/passphrase', passphrase.generate);
app.get('/passphrase/:n', passphrase.generate_n);
 
app.listen(3000);
console.log('Listening on port 3000...');
