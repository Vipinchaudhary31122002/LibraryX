console.log("LibraryX");

// Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//  Display constructor
function Display() {

}

// Adde methods to display prototype
Display.prototype.add = function(){
    // console.log('adding the new book');
}
Display.prototype.clear = function(){
    let LibraryForm = document.getElementById("LibraryForm");
    LibraryForm.reset();
}

// Add submit event listener to form
let LibraryForm = document.getElementById("LibraryForm");
LibraryForm.addEventListener("submit", LibraryFormSubmit);

function LibraryFormSubmit(e) {
//   console.log("you have submitted library form");
  let name = document.getElementById("BookName").value;
  let author = document.getElementById("Author").value;
  let type;
  let fiction = document.getElementById("Fiction");
  let computerprogramming = document.getElementById("ComputerProgramming");
  let science = document.getElementById("Science");
  if (fiction.checked) {
    type = fiction.value;
  } else if (computerprogramming.checked) {
    type = computerprogramming.value;
  } else {
    type = science.value;
  }
  let book = new Book(name, author, type);
//   console.log(book);
  let display = new Display();
  display.add(book);
  display.clear();
  e.preventDefault();
}
