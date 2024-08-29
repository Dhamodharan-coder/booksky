

//adding
let add=document.getElementById("add");
let todos = [];

add.addEventListener("click",function(){
    //selecting cards
    let card_1 =  document.createElement("div");
    let h2 = document.createElement("h2");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let button = document.createElement("button");

    //selecting inputs
    
    let inp_1 = document.getElementById("inp_1");
    let inp_2 = document.getElementById("inp_2");
    let textarea = document.getElementById("textarea");
    
    card_1.setAttribute("class","card");
    card_1.setAttribute("id","class");
    card_1.style.display="inline-block";
    card_1.style.margin = " 20px 20px";
    card_1.style.position="relative";
    card_1.style.verticalAlign="top";


    card_1.setAttribute("class","card-body");
    card_1.classList.add("bg-dark");
    card_1.style.borderRadius="20px"
   
    
    h2.setAttribute("class","card-title");
    h2.classList.add("text-danger","m-3");
    h2.textContent = inp_1.value;

    h4.setAttribute("class","card-title");
    h4.classList.add("text-danger","m-3");
    h4.textContent = inp_2.value;
    
    p.setAttribute("class","card-text");
    p.classList.add("text-white","m-3");
    p.textContent = textarea.value;
    
    button.setAttribute("class","btn");
    button.classList.add("btn-danger","m-3");
    button.setAttribute("onclick","del(event)");
    button.textContent ="Delete";
 

    document.body.appendChild(card_1);
    card_1.appendChild(h2);
    card_1.appendChild(h4);
    card_1.appendChild(p);
    card_1.appendChild(button);
    overlay.style.display="none";   
})


//add_or_delete 

let add_or_delete = document.getElementById("add_close");
let overlay = document.querySelector(".overlay");
add_or_delete.addEventListener("click",function(){
overlay.style.display="inline";
localStorage.setItem('todos',JSON.stringify(todos))
})

let close = document.getElementById("close");
close.addEventListener("click",function(){
    overlay.style.display="none";
})

function del(event){
   event.target.parentElement.remove();
   card.style.display="none";

}

  