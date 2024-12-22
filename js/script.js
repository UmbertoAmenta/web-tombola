/*~~~~~~~~~~~~~~~
    FUNCTIONS
~~~~~~~~~~~~~~~*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/*~~~~~~~~~~~~~~~
    VARIABLES
~~~~~~~~~~~~~~~*/
let allNumbers = []


/*~~~~~~~~~~~~~~~
    DOM ELEMENTS
~~~~~~~~~~~~~~~*/
const boardDom = document.getElementById("board")
const lastExtractionDom = document.getElementById("last-extraction")
const btnExtractionDom = document.getElementById("extraction")


/*~~~~~~~~~~~~~~~
    DOM EVENTS
~~~~~~~~~~~~~~~*/
// BOARD LOAD
let boardCell = ""
for(let i = 1; i <= 90; i++) {
    allNumbers.push([i])
    boardCell += `
        <div class="cell">
            <div>${i}</div>
        </div>
    `
}
boardDom.innerHTML = boardCell


const extractedNumbers = []
btnExtractionDom.addEventListener("click", function() {
})



/*~~~~~~~~~~~~~~~
    STAMP
~~~~~~~~~~~~~~~*/