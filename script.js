let questions = [
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>"],
        answer: 1
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: ["<image>", "<img>", "<picture>"],
        answer: 1
    },
    {
        question: "Which CSS property changes the text color?",
        options: ["font-color", "color", "text-color"],
        answer: 1
    },
    {
        question: "Which CSS property changes the background color?",
        options: ["background-color", "bg-color", "color-background"],
        answer: 0
    },
    {
        question: "Which JavaScript keyword declares a variable?",
        options: ["let", "define", "variable"],
        answer: 0
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["//", "##", "<!--"],
        answer: 0
    },
    {
        question: "Which method is used to display a message in the browser console?",
        options: ["console.log()", "print()", "display()"],
        answer: 0
    },
    {
        question: "Which JavaScript method adds an element to the end of an array?",
        options: ["push()", "add()", "insert()"],
        answer: 0
    },
    {
        question: "Which JavaScript method removes the last element from an array?",
        options: ["delete()", "pop()", "remove()"],
        answer: 1
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["=", "==", "==="],
        answer: 2
    },
    {
        question: "Which HTML element is used for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>"],
        answer: 2
    },
    {
        question: "Which HTML tag is used to create a paragraph?",
        options: ["<p>", "<para>", "<text>"],
        answer: 0
    },
    {
        question: "Which CSS property changes the size of text?",
        options: ["text-size", "font-size", "size"],
        answer: 1
    },
    {
        question: "Which CSS property makes text bold?",
        options: ["font-weight", "text-bold", "font-style"],
        answer: 0
    },
    {
        question: "Which JavaScript function converts a string into an integer?",
        options: ["parseInt()", "toInteger()", "convertInt()"],
        answer: 0
    },
    {
        question: "Which JavaScript method converts a string to lowercase?",
        options: ["lowerCase()", "toLowerCase()", "lower()"],
        answer: 1
    },
    {
        question: "Which JavaScript property returns the number of characters in a string?",
        options: ["size", "count", "length"],
        answer: 2
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ol>", "<ul>", "<list>"],
        answer: 1
    },
    {
        question: "Which CSS property controls the space inside an element?",
        options: ["margin", "padding", "spacing"],
        answer: 1
    },
    {
        question: "Which JavaScript keyword is used to define a function?",
        options: ["function", "method", "def"],
        answer: 0
    }
];

let current = 0;
let score = 0;

function showQuestion() {
    let q = questions[current];

    document.getElementById("question").innerText = q.question;
    document.getElementById("option0").innerText = q.options[0];
    document.getElementById("option1").innerText = q.options[1];
    document.getElementById("option2").innerText = q.options[2];

    document.getElementById("result").innerText = "";
}

function checkAnswer(choice) {
    if (choice === questions[current].answer) {
        score++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }

    document.getElementById("score").innerText =
        "Score: " + score;

    current++;

    if (current < questions.length) {
        setTimeout(showQuestion, 700);
    } else {
        setTimeout(function() {
            document.getElementById("question").innerText =
                "Quiz Finished!";
        }, 700);
    }
}

function restartQuiz() {
    current = 0;
    score = 0;

    document.getElementById("score").innerText =
        "Score: 0";

    document.getElementById("result").innerText = "";

    showQuestion();
}

showQuestion();
