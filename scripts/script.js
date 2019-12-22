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

navCard.setAttribute('class', 'card-body cardImg')
navBtns.appendChild(navCard)
navCard.innerHTML = "hey this is a card"

navCard1.setAttribute('class', 'card-body cardBtn')
navBtns.appendChild(navCard1)
navCard1.innerHTML = "Button"

navCard2.setAttribute('class', 'card-body cardBtn')
navBtns.appendChild(navCard2)
navCard2.innerHTML = "Button"