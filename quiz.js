var questions = [
        {
            question: "1. Which keyword is used to declare a variable in JavaScript?",
            options: [
                { key: "a", text: "var" },
                { key: "b", text: "int" },
                { key: "c", text: "string" },
                { key: "d", text: "variable" }
            ],
            correctKey: "a"
        },
        {
            question: "2. Which symbol is used for a single-line comment in JavaScript?",
            options: [
                { key: "a", text: "//" },
                { key: "b", text: "<!-- -->" },
                { key: "c", text: "##" },
                { key: "d", text: "**" }
            ],
            correctKey: "a"
        },
        {
            question: "3. Which function is used to display a message in the browser console?",
            options: [
                { key: "a", text: "print()" },
                { key: "b", text: "console.log()" },
                { key: "c", text: "display()" },
                { key: "d", text: "message()" }
            ],
            correctKey: "b"
        },
        {
            question: "4. Which keyword is used to create a constant variable?",
            options: [
                { key: "a", text: "var" },
                { key: "b", text: "let" },
                { key: "c", text: "const" },
                { key: "d", text: "constant" }
            ],
            correctKey: "c"
        },
        {
            question: "5. Which data type is used to store text in JavaScript?",
            options: [
                { key: "a", text: "Number" },
                { key: "b", text: "Boolean" },
                { key: "c", text: "String" },
                { key: "d", text: "Array" }
            ],
            correctKey: "c"
        }
    ];

    var currentQuestionIndex = 0;
    var selectedOptionKey = "";
    var totalScore = 0;
    var studentName = "";
    var studentSection = "";

    function startQuiz() {
        var nameInput = document.getElementById("studentName").value.trim();
        var sectionInput = document.getElementById("studentSection").value.trim();
        var nameErr = document.getElementById("nameError");
        var secErr = document.getElementById("sectionError");

        var hasError = false;

        if (nameInput === "") {
            nameErr.style.display = "block";
            hasError = true;
        } else {
            nameErr.style.display = "none";
        }

        if (sectionInput === "") {
            secErr.style.display = "block";
            hasError = true;
        } else {
            secErr.style.display = "none";
        }

        if (hasError) {
            return;
        }

        studentName = nameInput;
        studentSection = sectionInput;
        currentQuestionIndex = 0;
        totalScore = 0;

        document.getElementById("userSection").style.display = "none";
        document.getElementById("quizSection").style.display = "block";

        loadQuestion();
    }

    function loadQuestion() {
        selectedOptionKey = "";
        document.getElementById("selectionWarning").style.display = "none";

        var q = questions[currentQuestionIndex];

        document.getElementById("progressText").innerText = "Question " + (currentQuestionIndex + 1) + " of " + questions.length;
        document.getElementById("questionHeading").innerText = q.question;

        var container = document.getElementById("optionsContainer");
        container.innerHTML = "";

        for (var i = 0; i < q.options.length; i++) {
            var opt = q.options[i];

            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "option-btn";
            btn.setAttribute("data-key", opt.key);
            btn.innerText = "[" + opt.key.toUpperCase() + "] " + opt.text;

            btn.onclick = function() {
                selectOption(this);
            };

            container.appendChild(btn);
        }

        var submitBtn = document.getElementById("submitAnswerBtn");
        var nextBtn = document.getElementById("nextQuestionBtn");

        submitBtn.style.display = "inline-block";
        submitBtn.disabled = false;
        nextBtn.style.display = "none";

        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.innerText = "Finish & See Score";
        } else {
            nextBtn.innerText = "Next Question";
        }
    }

    function selectOption(clickedBtn) {
        var allButtons = document.getElementsByClassName("option-btn");
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("selected");
        }

        clickedBtn.classList.add("selected");
        selectedOptionKey = clickedBtn.getAttribute("data-key");
        document.getElementById("selectionWarning").style.display = "none";
    }

    function submitCurrentAnswer() {
        if (selectedOptionKey === "") {
            document.getElementById("selectionWarning").style.display = "block";
            return;
        }

        var q = questions[currentQuestionIndex];
        var allButtons = document.getElementsByClassName("option-btn");

        if (selectedOptionKey === q.correctKey) {
            totalScore++;
        }

        for (var i = 0; i < allButtons.length; i++) {
            var btn = allButtons[i];
            var btnKey = btn.getAttribute("data-key");

            btn.disabled = true;

            if (btnKey === q.correctKey) {
                btn.className = "option-btn correct";
            } else {
                btn.className = "option-btn wrong";
            }
        }


        document.getElementById("submitAnswerBtn").style.display = "none";
        document.getElementById("nextQuestionBtn").style.display = "inline-block";
    }

    function goToNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showFinalScore();
        }
    }

    function showFinalScore() {
        document.getElementById("quizSection").style.display = "none";
        document.getElementById("resultSection").style.display = "block";

        document.getElementById("resName").innerText = studentName;
        document.getElementById("resSection").innerText = studentSection;
        document.getElementById("resScore").innerText = "Your Score: " + totalScore + " / " + questions.length;
    }

    function restartQuiz() {
        document.getElementById("resultSection").style.display = "none";
        document.getElementById("userSection").style.display = "block";

        document.getElementById("studentName").value = "";
        document.getElementById("studentSection").value = "";
        currentQuestionIndex = 0;
        totalScore = 0;
        selectedOptionKey = "";
    }