export {labelName, basis, rewrite, todos, recheck, revise, storage}
import { send, inputSee, projectMal } from "./index.js";


let labelName= ["Title", "DueDate","Description","Priority", "Notes", "Project"]
let todos = []
let storage = JSON.parse(localStorage.getItem("todo"))

class basis{
    constructor( title, dueDate, description, notes, priority, project){
    this.title = title,
    this.dueDate = dueDate,
    this.description = description,
    this.notes = notes,
    this.priority = priority
    this.project = project

}
}






function rewrite(){

         let toad = new basis(inputSee[0].value,inputSee[1].value, inputSee[2].value,inputSee[3].value,inputSee[4].value, inputSee[5].value)
         todos.push(toad)
        console.log(toad)
        inputSee[0].value =""
        inputSee[1].value =""
        inputSee[2].value =""
        inputSee[3].value =""
        inputSee[4].value =""
        

}
function recheck(){
    if (storage[0].project !== null  && storage[0].project !== undefined ){
        return true
    }
    else{
        return false
    }
}
function revise(){
    if(localStorage.getItem("todo").title== null && localStorage.getItem("todo").title == undefined ){
        return true
    }
    else{
        return false
    }

}