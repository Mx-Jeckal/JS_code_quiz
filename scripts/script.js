var bodyEl = document.querySelector("#theBody");
var navEl = document.createElement("div");
var bgImg = document.createElement("div");
var navBtns = document.createElement("div");
var quizDiv = document.createElement("div");
var navCard = document.createElement("card");
var navCard1 = document.createElement("card");
var navCard2 = document.createElement("card");





navEl.setAttribute("class", "tab shadow-lg col-sm-12")
bgImg.appendChild(navEl)

bgImg.setAttribute('class', "bg-img row")
bodyEl.appendChild(bgImg)

navBtns.setAttribute('class', "navBtns col-lg-8 col-sm-10")
navEl.appendChild(navBtns)

quizDiv.setAttribute('class', "quizDiv col-sm-8 col-lg-6")
bgImg.appendChild(quizDiv)

navCard.setAttribute('class', 'card-body cardBtn')
navBtns.appendChild(navCard)
navCard.innerHTML = "JS&nbsp;Quiz"

navCard1.setAttribute('class', 'card-body cardBtn')
navBtns.appendChild(navCard1)
navCard1.innerHTML = "HiScores"

navCard2.setAttribute('class', 'card-body cardBtn')
navBtns.appendChild(navCard2)
navCard2.innerHTML = "Button"




navCard.addEventListener('click', () => {
    window.location.href = "https//:www.google.com"
    console.log('btn clicked')
})

var newGame = document.createElement('div')
newGame.setAttribute('class', "cardBtn game card-body")
newGame.innerHTML = "Start&nbsp;New&nbsp;Game"
quizDiv.appendChild(newGame)