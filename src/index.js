export {inputBox}
import "./todo.css"
import {newTodo, todo} from "./todo.js"
import {labelName} from "./refer.js"

let buttonTodo = document.createElement("button")
buttonTodo.textContent = "New Todo"
let submit = document.createElement("button")
let newProject = document.createElement("button")
newProject.textContent="New Project"
let dialog = document.createElement("dialog")
let projectDialog = document.createElement("dialog")
let closes = document.createElement("button")
closes.textContent="close"
dialog.appendChild(closes)
let projectDel= document.querySelectorAll("fieldset")


let inputBox = document.createElement("div")
dialog.appendChild(inputBox)
let body = document.querySelector("body");
let container = document.createElement("div");
container.classList.add("container");
let projectFront = document.createElement("fieldset");
let projectLegend = document.createElement("legend")
projectLegend.textContent="Project"
projectFront.appendChild(projectLegend);
projectFront.classList.add("project");
body.appendChild(container);
container.appendChild(buttonTodo);
container.appendChild(dialog);
container.appendChild(projectDialog);
container.appendChild(newProject);
container.appendChild(projectFront);
let send = document.createElement("button")
dialog.appendChild(send);


//the goal of index.js is to inital the first page and provide access to the others
//as well as defining document queryselectors for the others 



buttonTodo.addEventListener("click", event => {
    dialog.showModal()
    for(let i=0; i<5; i++){
        let label = document.createElement("label")
         let input = document.createElement("input")
        inputBox.appendChild(label)
     label.textContent = labelName[i] + ":"
    inputBox.appendChild(input)
    send.addEventListener("click", event=> {
         let inputSee = document.querySelectorAll("dialog > div>input")
         
         dialog.close()
         inputBox.textContent=""
   
   })

 }
  
})
closes.addEventListener("click", event => {

    dialog.close();
    for(let i=0; i<5; i++){
    inputBox.textContent=""
}
})
newProject.addEventListener("click", event => {
    let buttonD= document.createElement("button")
    projectDialog.appendChild(buttonD)
    projectDialog.showModal();
      let labelD = document.createElement("label")
      labelD.textContent="New Project Name:"
    let inputD = document.createElement("input")
      projectDialog.appendChild(labelD)
    projectDialog.appendChild(inputD)
    buttonD.textContent="Create"

    buttonD.addEventListener("click", event => {
         projectDialog.close();
        let projectD = document.createElement("fieldset");
        let projectDL = document.createElement("legend")
       
        projectDL.textContent=inputD.value
        projectD.appendChild(projectDL);
        projectD.classList.add("project");
        container.appendChild(projectD);
        projectDialog.textContent=""

        projectD.addEventListener("click", event => {
     
      if(projectD.style.color="brown"){
        projectD.textContent=""
        projectD.remove()
     }})


    })
})
