var http = require('http');
var library = require('./library');
var url = require('url');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Routers
app.get('/getAllBestSellersBooks', function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

	var books = library.getAllBestSellersBooks();
	if (books!= null){
		res.json(books);
	}else{
		res.status(200).send({'error':'no result'});
	}
});
app.get('/getBooksByMonth', function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

	// Get month param
	var urlPart= url.parse(req.url, true);
	var query = urlPart.query;

	if (query.month != null){
		var books = library.getBooksByMonth(query.month.toLowerCase());
		if (books!= null){
			res.json(books);
		}else{
			res.status(200).send({'error':'no result'});
		}
	}else{
		res.status(200).send({'error':'make sure you send "month" as param'});
	}
});
app.param('id', function(req,res,next,value){
	console.log('Requsl received with id: '+value);
	next();
});
app.get('/getBookById/:id', function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

	//get id parameter
	var id = req.params.id;

	var book = library.getBookById(id);
	if (book!= null){
		res.json(book);
	}else{
		res.status(200).send({'error':'no result, make sure you send number as ID'});
	}
});
app.get('/getBookByName', function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

	//get name parameter
	var urlPart= url.parse(req.url, true);
	var query = urlPart.query;

	if (query.name != null){
		var book = library.getBookByName(query.name.toLowerCase());
		if (book!= null){
			res.json(book);
		}else{
			res.status(200).send({'error':'no result'});
		}
	}else{
		res.status(200).send({'error':'make sure you send "month" as param'});
	}
});
app.get('/', function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

	//return api
	res.send('server root');
});
app.all('*', function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	
	res.send('Wellcom to my project.');
});


app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
});

//app.listen(precess.env.PORT || 3000);
//console.log('server running...');