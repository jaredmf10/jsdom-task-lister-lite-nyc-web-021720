let form = document.getElementById("create-task-form")
var taskList = document.getElementById("tasks")
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener("submit", function(event){
    event.preventDefault()
    var description = document.getElementById("new-task-description").value
    var newLi = document.createElement("li")
    var button = document.createElement("button")
    button.innerText = "x"
    taskList.appendChild(newLi)
    taskList.append(button)
    newLi.innerText = description
  })
  let divArea = document.getElementById("list")
  divArea.addEventListener("click", function(event){
    event.preventDefault()
    if (event.target.innerText === "x"){
      event.target.parentElement.remove()
      event.target.remove()
    }
  })
});
