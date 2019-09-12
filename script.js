

var btnAdd = document.getElementById("add-button"); //create var
btnAdd.addEventListener("click", addToDoItem);//
function addToDoItem() {
  var itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);//Since a new to-do item is never complete, you can always pass false to the completed parameter of the newToDoItem function.
}

var btnClear = document.getElementById("clear-completed-button");
btnClear.addEventListener("click", clearCompletedToDoItems)
function clearCompletedToDoItems() {
  var completedItems = toDoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
      completedItems.item(0).remove();
  }// lop over selected items to remove them one by one
}

var btnEmpty = document.getElementById("empty-button");
btnEmpty.addEventListener("click", emptyList)
function emptyList() {//To clear everything off the list, do the same thing as above, but select all the children of toDoList.
  var toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
      toDoItems.item(0).remove();
  }
}

var btnsave = document.getElementById("save-button");
btnsave.addEventListener("click", saveList)
function saveList() {
  var toDos = [];

  for (var i = 0; i < toDoList.children.length; i++) {
      var toDo = toDoList.children.item(i);

      var toDoInfo = {
          "task": toDo.innerText,
          "completed": toDo.classList.contains("completed")
      };

      toDos.push(toDoInfo);

  }

  localStorage.setItem("toDos", JSON.stringify(toDos));
}

/////////////////////////

// Vars to select the textbox and list
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");


// add item to list
function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li"); //create li element as new item
    var toDoText = document.createTextNode(itemText); //creates a text node and fills it with the contents of the itemText variable that is passed into the function.
    toDoItem.appendChild(toDoText); //takes the element, or text node, that you pass to it (in this case toDoText), and puts it inside toDoItem. If there are already elements inside that one, the one you’re adding now will be last.

    //checks if the value for the completed variable that was passed to newToDoItem is true. If it is, then it will add the class completed to the li element, which will change how it looks on the page. In style.css, there are special styling rules for li tags with the completed class in style.css — check them out, and change them if you like!
    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);//puts toDoItem (the <li> element) inside of toDoList (the <ol> element).
    toDoItem.addEventListener("dblclick", toggleToDoItemState);//attaches an event listener for a double-click to the toDoItem, and tells it to call a function named toggleToDoItemState in response. You’ll be creating that function with the next card!
}

//Add the toggleToDoItemState function to your script
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList(); //call loadlist function after you created it


//////////////////////Challenge: example to-do items
//////////////
///////
//Challenge: See if you can make the loadList function create some example to-do items if there aren’t any saved.
///////
//////////////
/////////////////////

//////////////////////Challenge: automatic saving
//////////////
///////
//Challenge: Change the code of your app so that, instead of the user having to click the Save button, their changes to the list are automatically saved.
//You won’t need to create any new functions to do this, but you will need to change several you already have!
///////
//////////////
/////////////////////
