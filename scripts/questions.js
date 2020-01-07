 export var questions = [{
         title: "Commonly used data types DO NOT include:",
         choices: ["strings", "booleans", "alerts", "numbers"],
         answer: "alerts"
     },
     {
         title: "The condition in an if / else statement is enclosed within ____.",
         choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
         answer: "parentheses"
     },
     {
         title: "Inside which HTML element do we put the JavaScript?",
         choices: ["<scripting>", "<JavaScript>", "<js>", "<script>"],
         answer: "<script>"
     }, {
         title: 'What is the correct JavaScript syntax to change the content of the HTML element below?        <p id="demo">This is a demonstration.</p>',
         choices: ['#demo.innerHTML="hello world";', 'document.getElement("p").innerHTML = "hello world";', 'document.getElementByID("demo").innerHTML ="hello world";', 'document.getElementByName("p").innerHTML = "hello world";'],
         answer: 'document.getElementByID("demo").innerHTML ="hello world";'
     }, {
         title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
         choices: ['<script src="xxx.js">', '<script name="xxx.js">', '<script href="xxx.js">', '<script rel="xxx.js">'],
         answer: '<script src="xxx.js">'
     }
 ];