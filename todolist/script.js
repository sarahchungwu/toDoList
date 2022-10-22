var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
    var div = document.createElement("div");
    var li = document.createElement("li");
    var delButton = document.createElement("button");
    div.classList.add("wrapper");
    ul.appendChild(div);
    div.append(li,delButton); //这个真的要查一下
    li.classList.add("taskClass");
    li.appendChild(document.createTextNode(input.value));
    input.value=""; //这是让输入一次内容click了后就回到空的输入框,等下试试
    delButton.classList.add("delClass");
    delButton.innerHTML='Del'; 

}

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() >0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which ===13) {
        createListElement();
    }
}

function doneTask(task) {
    if (task.target.calssName === "delClass") {
        task.target.classList.toggle("done");
    }
}

function deletListElement(element) {
    if (element.target.className === "delClass") {
        element.target.parentElement.remove();
    }
}

function handleUlClick(element) {
    doneTask(element);
    deletListElement(element);
}

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
