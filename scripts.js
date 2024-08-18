function addNewTask() {
  var userNewTask = document.getElementById("userInput").value;
  if (userNewTask != "") {
    // create li element and attach id and text value
    var li = document.createElement("li");
    li.textContent = userNewTask; 
    li.style.listStyleType = "none"; // to use custom bullets, handled by span elemeny
    li.id = "taskListItem";
    
     // save existing uls to variables
     var ulPending = document.getElementById("pendingTasks");
    var ulCompleted = document.getElementById("completedTasks");
    
    // create span element to prepend to li element
    var span = document.createElement("span")
    span.id = "strikeThis"
    span.textContent = "☐ " // serves as bullet style for list item
    span.onclick = function() {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
      span.textContent = "☑ "
      ulCompleted.appendChild(li)
    };
    // add span element at the beginning 
    li.prepend(span)
    
    // append list item to existing ul
    ulPending.appendChild(li);
    
    // clears input field
    document.getElementById("userInput").value = "";
  };
};


//TODO: re-add items from completed tasks ul back to pending ul