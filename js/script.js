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
const extractedNumbers = []


/*~~~~~~~~~~~~~~~
    DOM ELEMENTS
~~~~~~~~~~~~~~~*/
const boardDom = document.getElementById("board")

const lastExtractionDom = document.getElementById("last-extraction")
const btnExtractionDom = document.getElementById("extraction")

const amboDom = document.getElementById("ambo")
const amboAwardsDom = document.querySelector(".awards div:nth-child(1) label")
const ternaDom = document.getElementById("terna")

const quaternaDom = document.getElementById("quaterna")

const cinquinaDom = document.getElementById("cinquina")

const tombolaDom = document.getElementById("tombola")


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

// CLICK BTN EXTRACTION
btnExtractionDom.addEventListener("click", function() {
    const randomIndex = getRndInteger(0, allNumbers.length - 1)
    const extractedNumber = allNumbers[randomIndex]

    allNumbers.splice(randomIndex, 1)
    extractedNumbers.push(extractedNumber)

    const extractedNumberDom = boardDom.querySelector(`#board .cell:nth-child(${extractedNumber}) div`)
    extractedNumberDom.classList.add("extracted")
    lastExtractionDom.innerHTML = extractedNumber

    if(allNumbers.length === 0) {
        lastExtractionDom.innerHTML = "Ma siamo seri??"
    }

    if(extractedNumbers.length == 2) {
        amboDom.classList.remove("hidden")}
    // } else if(extractedNumbers.length >= 3 && amboDom.classList.contains("hidden")) {
    //     ternaDom.classList.remove("hidden")
    // } else if(extractedNumbers.length >= 4 && amboDom.classList.contains("hidden") && ternaDom.classList.contains("hidden")) {
    //     quaternaDom.classList.remove("hidden")
    // }
})

amboDom.addEventListener("click", function() {
    amboDom.classList.add("hidden")
    if(extractedNumbers.length >= 3) {
        ternaDom.classList.remove("hidden")
    }

    // confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.3, y: 0.6 },
    })
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.7, y: 0.6 },
    })
})

ternaDom.addEventListener("click", function() {
    ternaDom.classList.add("hidden")
    if(extractedNumbers.length >= 4) {
        quaternaDom.classList.remove("hidden")
    }

    // confetti
    confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.3, y: 0.6 },
    })
    confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.7, y: 0.6 },
    })
})

quaternaDom.addEventListener("click", function() {
    quaternaDom.classList.add("hidden")
    if(extractedNumbers.length >= 5) {
        cinquinaDom.classList.remove("hidden")
    }

    // confetti
    confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.3, y: 0.6 },
    })
    confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.7, y: 0.6 },
    })
    confetti({
        particleCount: 300,
        spread: 360,
        origin: { x: 0.5, y: 0.6 },
    })
})

cinquinaDom.addEventListener("click", function() {
    cinquinaDom.classList.add("hidden")
    if(extractedNumbers.length >= 15) {
        tombolaDom.classList.remove("hidden")
    }

    // confetti
    const end = Date.now() + 15 * 1000
    const colors = ["#bb0000", "#ffffff"];
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 75,
        origin: { x: 0 },
        colors: colors,
      })
    
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 75,
        origin: { x: 1 },
        colors: colors,
      })
    
      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    })()
})

tombolaDom.addEventListener("click", function() {
    tombolaDom.classList.add("hidden")
    
    // confetti
    const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now()
        if (timeLeft <= 0) {
            return clearInterval(interval)
        }
        const particleCount = 50 * (timeLeft / duration)
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        )
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        )
    }, 250)
})

/*~~~~~~~~~~~~~~~
    STAMP
~~~~~~~~~~~~~~~*/