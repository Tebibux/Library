// local library array to store data 
let myLibrary = [];
let newLibrary = [];
// Call the HTML book shelf element as Shelf
const shelf = document.querySelector('.main-left');
// calling the button
const button = document.getElementById('button');


// input values
const inputTitle = document.querySelector('#title');
const inputAuthor = document.getElementById('author');
const inputPage = document.getElementById('page');
const inputPubDate = document.getElementById('date');
const inputComment = document.getElementById('comment');


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
	// to resolve repetition remove all cards
	if (shelf !== '') {
		shelf.innerHTML = '';
	}

	myLibrary.push(newBook);
	addToDom()

}
function remove() {
	shelf.replaceChild()
}
// addBookToLibrary('T-she Hussien', 'Bogale Teferi', 195, 1990, 'scarey book');
// addBookToLibrary('Yoratorad', 'Yismake', 100, 1998, 'Fantacy');
// addBookToLibrary('Tebegna Ewnetoch', 'Betty', 200, 2000, 'critics book');


button.addEventListener('click', addBook);

function addBook() {
	//_____________
	if ((inputTitle.value || inputAuthor.value || inputPage.value || inputPubDate.value || inputComment.value) == "") return;
	else {
		let ttl = `${inputTitle.value}`;
		let auth = `${inputAuthor.value}`;
		let pg = `${inputPage.value}`;
		let dt = `${inputPubDate.value}`;
		let cmt = `${inputComment.value}`;

		addBookToLibrary(ttl, auth, pg, dt, cmt);
	}
}

function addToDom() {
	myLibrary.forEach(books => {
		if (myLibrary.includes(books.title)) return;
		else {

			let book = document.createElement('div');
			book.className = 'book';
			shelf.append(book);
			book.id = `${books.title}`;
			// create Read button
			let redBtn = document.createElement('button');
			redBtn.innerText = 'Read';
			book.append(redBtn);
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
			// delete button
			let delBtn = document.createElement('button');
			delBtn.innerText = 'Delete Book';
			delBtn.addEventListener('click', () => {
				{
					console.log(book.id);
					if (myLibrary.includes(books)) {
						newLibrary = myLibrary.filter((book) => {
							return book.id == books.title
						})
						myLibrary.pop(newLibrary[0]);
						shelf.innerHTML = '';
						addToDom()
					}
				}
			})
			book.append(delBtn);
			reset();
			// console.table(books.author);

		}
	})
	// console.table(myLibrary);
}
function reset() {
	inputTitle.value = inputAuthor.value = inputPage.value = inputPubDate.value = inputComment.value = "";
}

function deleteButton() {
	console.log('hello');
	console.log(myLibrary[dataset.attBook].title)
	if (myLibrary.includes(attBook.title)) {
		shelf.innerHTML = '';
		myLibrary.pop(attBook);
		addToDom();
	}
}


addToDom()