var bodyEl = document.querySelector("#theBody");
var navEl = document.createElement("div");
var bgImg = document.createElement("div");
var navBtns = document.createElement("div");
var quizDiv = document.createElement("div");
var navCard = document.createElement("card");
var navCard1 = document.createElement("card");
var navCard2 = document.createElement("card");
var qButton = document.createElement('button');
var qtext = document.createElement('div')
var hiscoreDiv = $('<div>')
hiscoreDiv.text("Leaderboard: ")

navEl.setAttribute("class", "tab shadow-lg col-sm-12")
bgImg.appendChild(navEl)

bgImg.setAttribute('class', "bg-img row")
bodyEl.appendChild(bgImg)

navBtns.setAttribute('class', "navBtns col-lg-8 col-sm-10")
navEl.appendChild(navBtns)


navCard.setAttribute('class', 'card-body cardBtn')
navBtns.appendChild(navCard)
navCard.innerHTML = "JS&nbsp;Quiz"

navCard1.setAttribute('class', 'card-body cardBtn')
navBtns.appendChild(navCard1)
navCard1.innerHTML = "HiScores"
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
        if (timeleft <= 0 || i >= 5) {
            clearInterval(downloadTimer);
            alert('Game over')
            addScore()
            leaderboard()
            $('.list').remove()
            $(qButton).remove()
            $(qtext).remove()
            qTimer.text("0")
        }
    }, 1000);
}

quizDiv.setAttribute('class', "quizDiv col-sm-8 col-lg-6")
bgImg.appendChild(quizDiv)

navCard.addEventListener('click', () => {
    window.location.href = "";
    console.log('btn clicked');
});

navCard1.addEventListener('click', () => {
    leaderboard()
});

function leaderboard() {
    newGame.setAttribute("style", "display: none")
    $('.list').remove()
    $(qButton).remove()
    $(qtext).remove()
    var span1 = $('<span>').text("Name: " + localStorage.getItem("initials"))
    var br = $('<br>')
    var span2 = $('<span>').text("Score: " + localStorage.getItem("score"))
    hiscoreDiv.attr('class', "cardBtn leaderboard")
    $(quizDiv).append(hiscoreDiv)
    hiscoreDiv.append(span1, br, span2)
    console.log('btn clicked');
}

qtext.setAttribute('class', "card-body qtext")
qButton.setAttribute('class', "cardBtn card-body")

// import list of questions from external file
import { questions } from './questions.js';

// button to start a new quiz
var newGame = document.createElement('div')
newGame.setAttribute('class', "cardBtn game card-body")
newGame.innerHTML = "Start&nbsp;New&nbsp;Quiz"
quizDiv.appendChild(newGame)

//at the end of the quiz alert the user to input initials and store them and the score
function addScore() {
    var initials = prompt("Enter your initials: ")
    initials
    localStorage.setItem("initials", initials)
    localStorage.setItem('score', $(".timer").text())
}

qButton.addEventListener('click', function() {
    if (i >= 5) {
        addScore()
        i = 0
    }
    if (localStorage.getItem('answer') === (questions[i].answer)) {

        timeleft = (timeleft + 3)
        console.log("right answer: " + questions[i].answer)

        console.log('value of i is: ' + i)
        localStorage.removeItem('answer')
        i++
        $('.list').remove()
        $(qButton).remove()
        $(qtext).remove()
        btnDoc()


    } else {
        // wrong answer
        console.log('wrong answer. The correct answer was: ' + questions[i].answer)

        localStorage.removeItem('answer')
        console.log('value of i is: ' + i)
        i++
        timeleft = (timeleft - 5)
        $('.list').remove()
        $(qButton).remove()
        $(qtext).remove()
        btnDoc()
    }

})

var i = 0
    //generate question and multiple choices
function btnDoc() {

    qButton.innerHTML = "Submit&nbsp;Answer"
    qtext.innerHTML = questions[i].title

    quizDiv.appendChild(qtext)

    var qlist = document.createElement('div')
    quizDiv.appendChild(qlist)
    quizDiv.appendChild(qButton)
    var y;
    for (y = 0; y < questions[i].choices.length; y++) {
        var qChoices = document.createElement('div')
        qChoices.setAttribute('class', 'list btn cardBtn')
        qChoices.setAttribute('data-choice', questions[i].choices[y])
        qChoices.innerHTML = questions[i].choices[y]
        qlist.appendChild(qChoices)
    }
    $('.list').on('click', function() {
        var qAnswer = ($(this).attr("data-choice"))
        console.log(qAnswer)
        localStorage.setItem('answer', qAnswer)
    })



}
//button to start the quiz
newGame.addEventListener('click', function() {
    newGame.setAttribute("style", "display: none")
    console.log('a new game has started');
    timeleft = 75
    i = 0
    timer()
    btnDoc()
})