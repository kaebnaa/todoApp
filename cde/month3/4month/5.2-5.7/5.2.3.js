function Todo(id, title, isComplated = false){
    this.id = id;
    this.title = title;
    this.isComplated = isComplated;
}

let todos = [];
let id = 0;

function addTodo(add){
    // console.log("todo nemegdlee !");
    const title = document.getElementById("title").value;
    console.log(title);
    const todo = new Todo(id, title);
    id++;
    todos.push(todo);
};

function deleteitems(el){
    console.log(el.parentNode);
    const itemId = el.parentNode.getAttribute("data");
    todos = todos.filter(function(item){
        return item.id === itemId;
    });
};

const listContainer = document.getElementsByClassName("container");

document.addEventListener('keypress', function(event){
    console.log("Tovch daragdlaa",);
    if(event.keyCode === 13){
        // console.log("Enter tovch daragdlaa");

        addTodo();
        console.log(todos);

        draw();
    }
});

const addBtn = document.getElementById("add").addEventListener("click", function(){
    // console.log("Add daragdlaa");
    addTodo();
    console.log(todos);
    draw();
});

function draw(){
    listContainer.innerHTML = "";
    todos.forEach((item) => {
        
        const list = `
            <div class="todo">
                <div id="listText" class="font"> ${item.title} </div>
                <i id="remove" class="fa-solid fa-xmark"></i>
            </div> `;
        listContainer.innerHTML += list;
    });
    
};