import { basis, todos } from "./refer.js";
export {save} 

function save(){
    for(let i of todos){
        localStorage.setItem("todo", JSON.stringify(todos))
        console.log(todos)
        console.log(JSON.parse(localStorage.getItem("todo")))
        console.log(todos[1])
    }
   
}
