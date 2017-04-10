var express = require('express');
var app = express();
var port=process.env.port||3000;
var morgan= require('morgan');
var mongoose=require('mongoose');
var bodyParser=require('body-parser')
var router= express.Router();
var routes=require('./app/routers/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname+ '/public'));

app.use('/api',routes);


 
mongoose.connect('mongodb://localhost/mean',function(err){
   if(err){
       console.log('database is not connected'+ ' '+ err);

   }
   else{
       console.log('database is connected to Mongodb');
   }

});


app.get('*', function(req,res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
})





app.listen(port,function(){
    console.log('server is running on' +' '  +port)
}); 