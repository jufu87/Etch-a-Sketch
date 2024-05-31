const container = document.querySelector("#container");
const btnNewGrid = document.querySelector("#btn-newgrid");
const btnClear = document.querySelector("#btn-clear");
let selection = 16;
createDivs(selection);

btnNewGrid.addEventListener('click', () => {
    document.querySelectorAll(".divRows").forEach(e => e.remove());
    selection = parseInt(prompt("How many squares per side?"));
    if (isNaN(selection)) {
        alert("Numbers only. Set to default 16!")
        selection = 16;
    }
    if (selection > 100) {
        alert("Set to maximum of 100!")
        selection = 100;
    }
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
                divColumns.style.backgroundColor = "black";
                console.log("event triggered")
            });
        };
    };   
}