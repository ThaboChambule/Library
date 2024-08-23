const myLibrary = [];

addBookToLibrary();
displayBook();

function displayBook() {

  let displayBook = "";

  myLibrary.forEach((element) => {
    const html = `
    <div class="me">
    <p> Title: ${element.title}<p>
    <p>Author: ${element.auther}<p>
    <p> Year: ${element.year}</p>
    <p>Pages: ${element.pages}</p>
    </div>`

      displayBook += html;

  })
  document.querySelector(".Container").innerHTML = displayBook;

}

function Book(title, author, year, pages) {
  //Constructor function
  this.title = title;
  this.auther = author;
  this.year = year;
  this.pages = pages;
}
//Default books

//Dialog Form
const showBtn = document.querySelector(".show-dialog");
const dialog = document.querySelector(".dialog");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

function addBookToLibrary() {
  const book1 = new Book("The Nightmare", "Kelvin Borne", 2005, 250);
  myLibrary.push(book1);
  const book2 = new Book("Summer", "Sam Smith", 259, 1995);
  myLibrary.push(book2);

  const confirm = document.querySelector(".confirm");
  confirm.addEventListener("click", (e) => {
    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const year = document.querySelector(".year").value;
    const pages = document.querySelector(".pages").value;

    const newBook = new Book(title, author, year, pages);

    myLibrary.push(newBook);
    e.preventDefault();
    dialog.close();
    displayBook()
  });
}
