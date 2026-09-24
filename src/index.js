export {inputBox, send, inputSee}
import "./todo.css"
import {newTodo, todo} from "./todo.js"
import {labelName, basis, rewrite, todos} from "./refer.js"
import {save} from "./project.js"

let inputSee = document.querySelectorAll("dialog > div>input")

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
let changeDiv = document.querySelector("fieldset > div > div ")
console.log(changeDiv)
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
let changeDialog = document.createElement("dialog")
container.appendChild(changeDialog)


//the goal of index.js is to inital the first page and provide access to the others
//as well as defining document queryselectors for the others 

window.addEventListener("load", event => {
      (function (){
         console.log(todos.length);
               for(let i of JSON.parse(localStorage.getItem("todo"))){
                     console.log(JSON.parse(localStorage.getItem("todo")))
                     let todoDivCon = document.createElement("div");
               todoDivCon.classList.add("TDC")
               let title = document.createElement("div");
               console.log((localStorage.getItem("todo")))
               title.textContent= `${labelName[0]}:${JSON.parse(localStorage.getItem("todo")).title}`;
               let dueDate = document.createElement("div");
               dueDate.textContent= `${labelName[1]}:${(localStorage.getItem("todo"))[1]}`;
               let description = document.createElement("div");
               description.textContent= `${labelName[2]}:${(localStorage.getItem("todo"))[2]}`;
               let notes = document.createElement("div");
               notes.textContent= `${labelName[3]}:${(localStorage.getItem("todo"))[3]}`
               let priority = document.createElement("div")
               priority.textContent= `${labelName[4]}:${(localStorage.getItem("todo"))[4]}`;
               projectFront.appendChild(todoDivCon);
               todoDivCon.appendChild(title);
               todoDivCon.appendChild( dueDate);
               todoDivCon.appendChild(description);
               todoDivCon.appendChild(notes);
               todoDivCon.appendChild(priority);





                 title.addEventListener("click", event => {
        title.textContent = `${labelName[0]}: ${prompt("Choose a title")}`
       })
          dueDate.addEventListener("click", event => {
          dueDate.textContent = `${labelName[1]}: ${prompt("Choose a Due Date")}`
       })
        description.addEventListener("click", event => {
        description.textContent = `${labelName[2]}: ${prompt("Choose a description")}`
       })
        notes.addEventListener("click", event => {
        notes.textContent = `${labelName[3]}: ${prompt("Choose a Note")}`
       })
      priority.addEventListener("click", event => {
        priority.textContent = `${labelName[4]}: ${prompt("Choose a priority")}`
        priority.classList.add("priority")
       })

        title.addEventListener("contextmenu", event => {
          event.preventDefault()
          title.remove()
       })
          dueDate.addEventListener("contextmenu", event => {
             event.preventDefault()
          dueDate.remove()
       })
        description.addEventListener("contextmenu", event => {
           event.preventDefault()
          description.remove()
       })
        notes.addEventListener("contextmenu", event => {
           event.preventDefault()
          notes.remove()
       })
        priority.addEventListener("contextmenu", event => {
          event.preventDefault()
          priority.remove()
       })
         };
      })();
   })

buttonTodo.addEventListener("click", event => {
    dialog.showModal()
    for(let i=0; i<6; i++){
        let label = document.createElement("label")
         let input = document.createElement("input")
        inputBox.appendChild(label)
     label.textContent = labelName[i] + ":"
    inputBox.appendChild(input)
    
   

 }
   send.addEventListener("click", event=> {

             inputSee = document.querySelectorAll("dialog > div>input");
       
          newTodo(inputSee[0].value, inputSee[1].value ,inputSee[2].value ,inputSee[3].value, inputSee[4].value);
         
          
         dialog.close();
         inputBox.textContent="";
         
         let todoDivCon = document.createElement("div");
         todoDivCon.classList.add("TDC")
         let title = document.createElement("div");
         title.textContent= `${labelName[0]}:${inputSee[0].value}`;
         let dueDate = document.createElement("div");
         dueDate.textContent= `${labelName[1]}:${inputSee[1].value}`;
         let description = document.createElement("div");
         description.textContent= `${labelName[2]}:${inputSee[2].value}`;
         let notes = document.createElement("div");
         notes.textContent= `${labelName[3]}:${inputSee[3].value}`
         let priority = document.createElement("div")
         priority.textContent= `${labelName[4]}:${inputSee[4].value}`;
         let search = document.querySelectorAll("fieldset > legend");
        
        rewrite();
        save();






         console.log(search)
         console.log(inputSee[5].value)
      
         for (let i of search){
          console.log(i.textContent)
         if( inputSee[5].value == i.textContent){
            console.log("ayayy")
         i.parentElement.appendChild(todoDivCon);
         todoDivCon.appendChild(title);
         todoDivCon.appendChild( dueDate);
         todoDivCon.appendChild(description);
         todoDivCon.appendChild(notes);
         todoDivCon.appendChild(priority);
         }
         else {
          projectFront.appendChild(todoDivCon);
         todoDivCon.appendChild(title);
         todoDivCon.appendChild( dueDate);
         todoDivCon.appendChild(description);
         todoDivCon.appendChild(notes);
         todoDivCon.appendChild(priority);
         }
        }
      
          inputSee[0].value = ""
          inputSee[1].value = ""
          inputSee[2].value = ""
          inputSee[3].value = ""
          inputSee[4].value = ""
         
         
       title.addEventListener("click", event => {
        title.textContent = `${labelName[0]}: ${prompt("Choose a title")}`
       })
          dueDate.addEventListener("click", event => {
          dueDate.textContent = `${labelName[1]}: ${prompt("Choose a Due Date")}`
       })
        description.addEventListener("click", event => {
        description.textContent = `${labelName[2]}: ${prompt("Choose a description")}`
       })
        notes.addEventListener("click", event => {
        notes.textContent = `${labelName[3]}: ${prompt("Choose a Note")}`
       })
      priority.addEventListener("click", event => {
        priority.textContent = `${labelName[4]}: ${prompt("Choose a priority")}`
        priority.classList.add("priority")
       })

        title.addEventListener("contextmenu", event => {
          event.preventDefault()
          title.remove()
       })
          dueDate.addEventListener("contextmenu", event => {
             event.preventDefault()
          dueDate.remove()
       })
        description.addEventListener("contextmenu", event => {
           event.preventDefault()
          description.remove()
       })
        notes.addEventListener("contextmenu", event => {
           event.preventDefault()
          notes.remove()
       })
        priority.addEventListener("contextmenu", event => {
          event.preventDefault()
          priority.remove()
       })
       let todoSea = Array.from(document.querySelectorAll("fieldset > div "))
       if (todoSea.length = 0){
        todoDivCon.remove()
       }
   });
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
