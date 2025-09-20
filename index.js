let input;
const checkboxClass = document.getElementsByClassName("checkbox");
const AudioTest = new Audio('insultList/insult (14).mp3')

// welp its what the var says
const clearButton = document.getElementById("clearButton");
let newTextIntoList = document.querySelector("#list-container ol");
let newCheckboxIntoList = document.querySelector("#list-container ol li");
const listContainer = document.getElementById("list-container")

const InsultArray = [
    "insultList/insult (1).mp3",
    "insultList/insult (2).mp3",
    "insultList/insult (3).mp3",
    "insultList/insult (4).mp3",
    "insultList/insult (5).mp3",
    "insultList/insult (6).mp3",
    "insultList/insult (7).mp3",
    "insultList/insult (8).mp3",
    "insultList/insult (9).mp3",
    "insultList/insult (10).mp3",
    "insultList/insult (11).mp3",
    "insultList/insult (12).mp3",
    "insultList/insult (13).mp3",
    "insultList/insult (14).mp3",
    "insultList/insult (15).mp3",
    "insultList/insult (16).mp3",
    "insultList/insult (17).mp3",
    "insultList/insult (18).mp3",
    "insultList/insult (19).mp3",
    "insultList/insult (20).mp3",
    "insultList/insult (21).mp3",
    "insultList/insult (22).mp3",
    "insultList/insult (23).mp3",
    "insultList/insult (24).mp3",
    "insultList/insult (25).mp3",
    "insultList/insult (26).mp3",
    "insultList/insult (27).mp3",
    "insultList/insult (28).mp3",
    "insultList/insult (29).mp3",
    "insultList/insult (30).mp3",
    "insultList/insult (31).mp3",
    "insultList/insult (32).mp3",
    "insultList/insult (33).mp3",
    "insultList/insult (34).mp3",
    "insultList/insult (35).mp3",
    "insultList/insult (36).mp3",
    "insultList/insult (37).mp3",
    "insultList/insult (38).mp3",
    "insultList/insult (39).mp3"
]

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
            console.log(InsultArray[4])
            let InsultToPlay = new Audio(InsultArray[4]);
            InsultToPlay.play()

        } else {
            createNewLine.style.textDecoration = "none";
        }
   }

} 
clearButton.onclick = function(){
    console.log("clear");
    // reaplces all the children of list container with air
    newTextIntoList.replaceChildren();
    }
