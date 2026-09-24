export {labelName, basis, rewrite, todos}
import { send, inputSee, toad } from "./index.js";


let labelName= ["Title", "Description","DueDate","Priority", "Notes", "Project"]
let todos = []
  
class basis{
    constructor( title, dueDate, description, notes, priority){
    this.title = title,
    this.dueDate = dueDate,
    this.description = description,
    this.notes = notes,
    this.priority = priority

}
}

function rewrite(){

         let toad = new basis(inputSee[0].value,inputSee[1].value, inputSee[2].value,inputSee[3].value,inputSee[4].value)
         todos.push(toad)
        console.log(toad)
        inputSee[0].value =""
        inputSee[1].value =""
        inputSee[2].value =""
        inputSee[3].value =""
        inputSee[4].value =""
        

}