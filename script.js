// local library array to store data 
let myLibrary = [];
// Call the HTML book shelf element as Shelf
const shelf = document.querySelector('.main-left');
// calling the button
const button = document.getElementById('button')
// input values
const inputTitle = document.getElementById('title');
console.log(title.value)
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

myLibrary.forEach(books => {
	let book = document.createElement('div');
	book.className = 'book';
	shelf.append(book);
	// creating unordered list
	let uList = document.createElement('ul');
	book.append(uList);
	// creating list Items
	// title
	let tPara = document.createElement('li');
	tPara.innerText = `Title: ${books.title}`;
	uList.append(tPara);
	// author
	let aPara = document.createElement('li');
	aPara.innerText = `Author: ${books.author}`;
	uList.append(aPara);

	// page
	let pPara = document.createElement('li');
	pPara.innerText = `Page: ${books.page}`;
	uList.append(pPara);
	// date
	let dPara = document.createElement('li');
	dPara.innerText = `Date: ${books.date}`;
	uList.append(dPara);
	// comment
	let cPara = document.createElement('li');
	cPara.innerText = `Comment: ${books.comment}`
	uList.append(cPara);

	// console.table(books.author);
})

button.addEventListener('click', addBook);

function addBook(){
	console.table(myLibrary[0])
}

// console.table(myLibrary);