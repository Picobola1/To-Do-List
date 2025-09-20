let input;
const checkboxClass = document.getElementsByClassName("checkbox");


// welp its what the var says
const clearButton = document.getElementById("clearButton");
let newTextIntoList = document.querySelector("#list-container ol");
let newCheckboxIntoList = document.querySelector("#list-container ol li");

document.getElementById("accecptButtons").onclick = function(){
   
    const createNewLine = document.createElement("li");
    const createNewCheckBox = document.createElement("input");
    createNewCheckBox.type = "checkbox";

    input = document.getElementById("inputText").value;
    createNewLine.appendChild(document.createTextNode(input))
    createNewLine.className = "listText"
    createNewCheckBox.className = "checkbox"
    // actully create it 
    newTextIntoList.appendChild(createNewLine);
    createNewLine.appendChild(createNewCheckBox);
    
   document.getElementById("inputText").value = "";
   createNewCheckBox.onclick = function(){
        if (createNewCheckBox.checked) {
            createNewLine.style.textDecoration = "line-through";
            createNewLine.style.textDecorationThickness = "2px";
            createNewLine.style.textDecorationColor = "rgb(0,0,0)";
        } else {
            createNewLine.style.textDecoration = "none";
        }
   }

} 
clearButton.onclick = function(){
        if (clearButton.click){console.log("clear");}
        
    }
