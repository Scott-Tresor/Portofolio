let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(__dirname + '/dist/portofolio'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/portofolio/index.html'));
});

app.listen(process.env.PORT || 8080);
