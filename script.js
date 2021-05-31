var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength(){
	 return input.value.length;
}

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value + " "));
		ul.appendChild(li,);
		input.value ="";
		li.setAttribute("onclick", "addDone(this)");
    	const deleteButton = document.createElement('button')
    	deleteButton.innerText = ' DELETE!';
    	li.appendChild(deleteButton)
    	deleteButton.setAttribute("onclick", "deleteElement(this)");   	
}

function addListAfterClick(){
	if (inputLength() >0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() >0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDone(elem) {
    // get all 'a' elements
    var a = document.getElementsByTagName('a');
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.toggle('done')
    }
    // add 'active' classs to the element that was clicked
    elem.classList.toggle('done');
}

function deleteElement(e) {
	 e.parentNode.parentNode.removeChild(e.parentNode);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
