const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname,'/dist/App1/')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',api);

// app.get('*',(req,res) => {
// 	res.sendFile(path.join(__dirname,'/dist/App1/index.html'));
// });
app.get('*',(req,res) => {
    //res.send('api works1');
    res.sendFile(path.join(__dirname,'/dist/App1/index.html'));
});

app.listen(port,() => {
	console.log("Server running on localhost: "+port);
})