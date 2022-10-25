// retrieving  DOM element

const domTitle = document.getElementById('title');
const domAuthor = document.getElementById('author');
const domPage = document.getElementById('page');
const domDate = document.getElementById('date');
const domComment = document.getElementById('comment');
const subBtn = document.querySelector('#button');



let myLibrary = [];

function Book(title, author, page, date, comment) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page;
  this.date = date;
  this.comment = comment;
};



function addBookToLibrary() {
	let title = `${domTitle.value}`;
	let author = `${domAuthor.value}`;
	let page = `${domPage.value}`;
	let date = `${domDate.value}`;
	let comment = `${domComment.value}`;
	let newBook = new Book(title, author, page, date, comment);
	
	myLibrary.push(newBook);
	console.table(myLibrary)
	// addDom();
}

subBtn.addEventListener('click', addBookToLibrary);

// function addDom(){
// 	console.log('hello')
// }