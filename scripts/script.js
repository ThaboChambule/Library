const myLibrary = [];

addBookToLibrary();
displayBook();

function displayBook() {
  myLibrary.forEach((element) => {
    console.log(element);
  });
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
  const book2 = new Book("Summer", "Sam Smith", 216, 280);
  myLibrary.push(book1);
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
  });
}
