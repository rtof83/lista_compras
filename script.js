let input = document.getElementById("item");
let button = document.getElementById("btnAdicionar");
let ul = document.getElementById("lista");
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove");

function criaLista(){
  let li = document.createElement("li");
  let xButton = document.createElement("button");
  
  xButton.innerHTML = "X";
  xButton.className = "remove";
  li.appendChild(xButton);
  let text = document.createTextNode(input.value);
  li.appendChild(text);
  //li.innerHTML = input.value;
  
  ul.appendChild(li);
  input.value = "";
  input.focus();
  buttonEvents();
}

function deleteItem(){
  this.parentElement.remove();
}

function buttonEvents(){
  for (let i = 0; i < itemButtons.length; i++){
    itemButtons[i].addEventListener("click", deleteItem);
  }  
}

button.addEventListener("click", criaLista);
buttonEvents();