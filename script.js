// Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//  Display constructor
function Display() {}

// Adde methods to display prototype
Display.prototype.add = function (book) {
  console.log("adding the new book");
  tablebody = document.getElementById("TableBody");
  let uiString = ` <tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                    </tr>`;
  tablebody.innerHTML += uiString;
};

// Implement the clear function
Display.prototype.clear = function () {
  LibraryForm.reset();
};

// Implement the validation function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  }
  return true;
};

// Implement the show function
Display.prototype.show = function (type, showmessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        ${showmessage}.
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                    </div>`;
  setTimeout(function(){
    message.innerHTML = '';
  }, 2000);
};

// Add submit event listener to form
let LibraryForm = document.getElementById("LibraryForm");
LibraryForm.addEventListener("submit", LibraryFormSubmit);

// Implement the library fomr submit function
function LibraryFormSubmit(e) {
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
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book have been successfully added");
  } else {
    display.show(
      "danger",
      "Your book cannot be added. Please add proper details"
    );
  }
  e.preventDefault();
}
