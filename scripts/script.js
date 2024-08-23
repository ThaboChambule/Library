const myLibrary = [];

displayBook()
addBookToLibrary()

function displayBook(){

    myLibrary.forEach((element) => {
        console.log(element)

    })



}

function Book(title, author, year, pages) {
  //Constructor function
  this.title = title;
  this.auther = author;
  this.year = year;
  this.pages = pages;
}
//Default books
const book1 = new Book("The Nightmare", "Kelvin Borne", 2005, 250)
myLibrary.push(book1)
const book2 = new Book("Summer", "Sam Smith", 216, 280)
myLibrary.push(book1)
myLibrary.push(book2)


//Dialog Form
const showBtn = document.querySelector(".show-dialog");
const dialog = document.querySelector(".dialog");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});
confirm.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.closest();
});

function addBookToLibrary() {

  const confirm = document.querySelector(".confirm")
  confirm.addEventListener("click",()=>{
  
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const year = document.querySelector(".year").value;
  const pages = document.querySelector(".pages").value;
  
  const newBook = new Book(title, author, year, pages);
  myLibrary.push(newBook);
  })
}

