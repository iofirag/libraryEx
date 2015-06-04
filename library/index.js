//Library modul

var books = [
	{
		'id' : '1000',
		'name' : 'book_a',
		'author' : 'shimon swissa',
		'price' : '199$',
		'month' : 'may'
	},{
		'id' : '1001',
		'name' : 'book_b',
		'author' : 'shaul rosenberg',
		'price' : '199$',
		'month' : 'april'
	},{
		'id' : '1002',
		'name' : 'book_c',
		'author' : 'vidran abdovich',
		'price' : '199$',
		'month' : 'july'
	},{
		'id' : '1003',
		'name' : 'book_d',
		'author' : 'bibi netanyahu',
		'price' : '199$',
		'month' : 'july'
	},{
		'id' : '1004',
		'name' : 'book_e',
		'author' : 'stiv jobs',
		'price' : '199$',
		'month' : 'juny'
	},{
		'id' : '1005',
		'name' : 'book_f',
		'author' : 'bill gates',
		'price' : '199$',
		'month' : 'april'
	}
]


// Export functions
exports.getAllBestSellersBooks = function (){
	return books;
};
exports.getBooksByMonth = function (month){
	var booksByMonth = [];
	// Iterate json and return the book with
	// the same id
	for (var i in books){
		console.log(i+' : '+books[i].month);
		if (books[i].month == month)
			booksByMonth.push(books[i]);
	}
	return booksByMonth;
};
exports.getBookById = function (id){
	// Iterate json and return the book with
	// the same id
	for (var book in books){
		if (book.id == id)
			return book;
	}
};
exports.getBookByName = function (name){
	// Iterate json and return the book with
	// the same id
	for (var book in books){
		if (book.name == name)
			return book;
	}
};
