// local library array to store data 
let myLibrary = [];

function Book(title, author, page, date, comment) {
	// the constructor...
	this.title = title;
	this.author = author;
	this.page = page;
	this.date = date;
	this.comment = comment;
};

function addBookToLibrary(title, author, page, date, comment) {
	let newBook = new Book(title, author, page, date, comment);
	myLibrary.push(newBook);
}

addBookToLibrary('T-she Hussien', 'Bogale Teferi', 195, 1990, 'scarey book');
addBookToLibrary('Yoratorad', 'Yismake', 100, 1998, 'Fantacy');
addBookToLibrary('Tebegna Ewnetoch', 'Betty', 200, 2000, 'critics book');

console.table(myLibrary);