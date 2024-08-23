const myLibrary = [];

/*displayBook()

function displayBook(){

    myLibrary.forEach((element) => {
        console.log(element)

    })



}

function Book(title,author,year,pages){
    //Constructor function
    this.title = title;
    this.auther = author;
    this.year = year;
    this.pages = pages;

}
*/

//Dialog Form
const showBtn = document.querySelector(".show-dialog");
const dialog = document.querySelector(".dialog");
const confirm = document.querySelector(".Confirm");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});
confirm.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.closest();
});

function addBookToLibrary() {}
