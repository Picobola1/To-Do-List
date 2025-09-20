let input;
const checkboxClass = document.getElementsByClassName("checkbox");


// welp its what the var says
let newTextIntoList = document.querySelector("#list-container ol");
let newCheckboxIntoList = document.querySelector("#list-container ol li");

document.getElementById("accecptButtons").onclick = function(){
   
    const createNewLine = document.createElement("li");
    const createNewCheckBox = document.createElement("input");
    createNewCheckBox.type = "checkbox";

    input = document.getElementById("inputText").value;
    createNewLine.textContent = input;
    // actully create it 
    newTextIntoList.appendChild(createNewLine);
    createNewLine.appendChild(createNewCheckBox);
    
   document.getElementById("inputText").value = "";
} 
