let input;
const checkboxClass = document.getElementsByClassName("checkbox");
const createNewCheckBox = document.createElement("input");

// welp its what the var says
let newTextIntoList = document.querySelector("#list-container ol");

document.getElementById("accecptButtons").onclick = function(){
    const createNewLine = document.createElement("li");
    

    input = document.getElementById("inputText").value;
    createNewLine.textContent = input;
    // actully create it 
    newTextIntoList.appendChild(createNewLine);
    
   
} 
