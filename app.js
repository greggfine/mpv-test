var express = require('express'),
	app = express();



app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));


app.get('/', function(req,res){
	res.render('index');
})






app.listen(app.get('port'), function(){
	console.log('Running');
})