const container = document.querySelector("#container");
const btnNewGrid = document.querySelector("#btn-newgrid");
const btnClear = document.querySelector("#btn-clear");
const gridDimensions = document.querySelector("#gridDimensions");
let selection = 16;
createDivs(selection);

btnNewGrid.addEventListener('click', () => {
    document.querySelectorAll(".divRows").forEach(e => e.remove());
    selection = parseInt(prompt("How many squares per side?"));

    if (isNaN(selection)) {
        alert("Numbers only!")
        return;
    }
    if (selection > 100) {
        alert("Set to maximum of 100!")
        selection = 100;
    }

    gridDimensions.textContent = selection + " X " + selection;
    createDivs(selection);
});

btnClear.addEventListener('click', () => {
    document.querySelectorAll(".divRows").forEach(e => e.remove());
    createDivs(selection);
});

function createDivs (numOfDivs) {
   
    for (let i = 1; i <= numOfDivs; i++) { 
        const divRows = document.createElement("div");
        divRows.classList.add('divRows');
        container.appendChild(divRows);
        
        for (let j = 1; j <= numOfDivs; j++) { 
            const divColumns = document.createElement("div");
            divColumns.classList.add('divColumns');
            divRows.appendChild(divColumns);
            divColumns.addEventListener("mouseover", () => {
                divColumns.style.backgroundColor = generateNewColor();
                
                console.log("event triggered");
            });
        };
    };   
};

// the section below is to generate random colors which will then be called during the mouseover
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getCharacter(index) {
    return hexCharacters[index];
}

function generateNewColor(){
    let hexColorRep = "#";

    for (let k = 0; k < 6; k++){
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColorRep += getCharacter(randomPosition);
    }
    return hexColorRep;
}

gridDimensions.textContent = selection + " X " + selection;