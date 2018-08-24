// https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/yabba-tabba-do'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/yabba-tabba-do/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
