let express = require('express');
let path = require('path');
var compression = require('compression');

let app = express();
app.use(compression());
app.use(express.static(__dirname + '/dist/portofolio'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/portofolio/index.html'));
});


const listener = app.listen(process.env.PORT || 8080, function() {
	console.log('Your app is listening on port ' + listener.address().port);
});
