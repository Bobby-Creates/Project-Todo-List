
import{inputBox} from "./index.js"

export{newTodo, todo}


class todo {
    constructor(title, description,dueDate,priority, notes){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.notes = notes;
       
    }
  
    
}

function newTodo(a, b, c,d,e){
    new todo(a, b, c,d,e,)
    
 
}
