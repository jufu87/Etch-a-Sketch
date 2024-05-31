const container = document.querySelector("#container");
let selection = 16;
let divRows = undefined;
let divColumns = undefined;

function createDivs (numOfDivs) {
   
    for (let i = 1; i <= numOfDivs; i++) { 
        divRows = document.createElement("div");
        divRows.classList.add('divRows');
        container.appendChild(divRows);
        
        for (let j = 1; j <= numOfDivs; j++) { 
            divColumns = document.createElement("div");
            divColumns.classList.add('divColumns');
            divRows.appendChild(divColumns);
            };
        };
    return;
}

createDivs(selection);

// function makeGrids(size) {
//     let screen = document.querySelector("#container");
//     for (let i = 0; i < size; i++) {
//       let column = document.createElement("div");
//       column.classList.add("column");
//       for (let j = 1; j <= size; j++) {
//         let row = document.createElement("div");
//         row.classList.add("row");
//         row.style.border = "2px solid black";
//         row.innerText = (i * size) + j;
//         column.appendChild(row);
//       }
//       screen.appendChild(column);
//     }
//   }
  
//   makeGrids(16);