window.addEventListener("load", function(){
    console.log("page loaded");

    let myAssignment = Assignment.getInstance();
});

class Assignment{
    constructor()
    {
        console.log("singleton created.");
        let controller = new Controller();
        
    }
    static getInstance()
    {
        //Is there an instance variable attached to the class?
        //if so, don't create. If not, create.
        if(!Assignment._instance)
        {
            Assignment._instance = new Assignment();
            return Assignment._instance;
        }
        else
        {
            throw "Cannot create a second singleton!";
        }
    }
}

class Controller{
    constructor(){
        //User.logIn();
        User.fetchBlog(); 
    }
    gatherData(){
        
    }
}
class Model{
    constructor(){
      
    }
    process(e){
       
    }
    
}
class View{
    constructor(){
       
    }
    display(e){
    }
        
}