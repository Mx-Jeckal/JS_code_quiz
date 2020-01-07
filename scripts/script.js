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

// navCard2.setAttribute('class', 'card-body cardBtn')
// navBtns.appendChild(navCard2)
// navCard2.innerHTML = "Button"

navCard.addEventListener('click', () => {
    window.location.href = "";
    console.log('btn clicked');
});

navCard1.addEventListener('click', () => {
    window.location.href = "./hiScores.html";
    console.log('btn clicked');
});




import { questions } from './questions.js';

// button to start a new quiz
var newGame = document.createElement('div')
newGame.setAttribute('class', "cardBtn game card-body")
newGame.innerHTML = "Start&nbsp;New&nbsp;Quiz"
quizDiv.appendChild(newGame)
var i = 0
var quizScore = 0
    //timer element and attributes
var qTimer = $("<div>")
qTimer.attr('class', 'timer cardBtn')
qTimer.text("0")
$(bgImg).append(qTimer)
var timeleft = 75
    //Countdown timer
function timer() {;
    var downloadTimer = setInterval(function() {

        $(".timer").text(timeleft)
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            alert('Game over')
            newGame.setAttribute("style", "display: visable")
            $('.list').attr("style", "display: none")
            qButton.setAttribute("style", "display: none")
            qtext.setAttribute("style", "display: none")
            addScore()
        }
    }, 1000);
}

function addScore() {
    var initials = prompt("Enter your initials: ")
    localStorage.setItem("initials", initials)
    localStorage.setItem('score', (qTimer.value))
}
//generate question and multiple choices
function btnDoc() {
    if (i < questions[i].title.length) {
        i++

        var qButton = document.createElement('button')
        var qtext = document.createElement('div')
        qtext.setAttribute('class', "card-body qtext")
        qButton.setAttribute('class', "cardBtn card-body")
        qButton.innerHTML = "Submit&nbsp;Answer"
        qtext.innerHTML = questions[i].title

        quizDiv.appendChild(qtext)

        var qlist = document.createElement('div')
        quizDiv.appendChild(qlist)

        var y;
        for (y = 0; y < questions[i].choices.length; y++) {
            var qChoices = document.createElement('div')
            qChoices.setAttribute('class', 'list btn cardBtn')
            qChoices.setAttribute('data-choice', questions[i].choices[y])
            qChoices.innerHTML = questions[i].choices[y]
            qlist.appendChild(qChoices)

            $('.list').on('click', () => {
                var qAnswer = $(".list").attr("[data-choice]")
                    // var qAnswer = (qChoices.getAttribute = 'data-choice')
                    // var qAnswer = document.getElementById(y).getAttribute('data-choice')
                console.log(qChoices.dataset)
                localStorage.setItem('answer', qAnswer)
            })

        }


        quizDiv.appendChild(qButton)


        qButton.addEventListener('click', () => {
            if (localStorage.getItem('answer') === questions[i].answer) {
                console.log("right answer: " + questions[i].answer)
                localStorage.removeItem('answer')
                quizScore++
                timeleft = timeleft + 3
                btnDoc()
            } else {
                // wrong answer
                console.log('wrong answer. The correct answer was: ' + questions[i].answer)
                localStorage.removeItem('answer')
                timeleft = (timeleft - 5)
                $('.list').attr("style", "display: none")
                qButton.setAttribute("style", "display: none")
                qtext.setAttribute("style", "display: none")
                btnDoc()
            }
        })
    }
}



newGame.addEventListener('click', () => {
    newGame.setAttribute("style", "display: none")
    console.log('a new game has started');
    timer()
    btnDoc()
})



// when this btn is clicked i want it to display the 1st question, upon answering i want the corrct or incorrect displayed and then move on to the next question.

// I want a counter of the current and remaining questions and a  countdown timer