function addNewTask(){
    let newTask = document.getElementById("userTask").value;
    
    if (newTask != ""){
        let ulPending = document.getElementById("pendingTasks");
        let li = document.createElement("li");
        li.textContent = newTask;

        span = document.createElement("span")
        span.textContent = "—  "
        span.onclick = function(){
            li.remove();
            let ulCompleted = document.getElementById("completedTasks");
            ulCompleted.appendChild(li)
        };
        
        li.prepend(span)
        ulPending.appendChild(li)

        document.getElementById("userTask").value = "";
    };
};
