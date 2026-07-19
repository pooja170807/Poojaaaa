const questions = [
    {
        question: "Prajiii nee enna love pandriyaa?",
        rounds: [
            {
                options: [
                    { text: "Pandren", correct: true },
                    { text: "Illa", correct: false }
                ]
            },
            {
                message: "Unmaiya Sollu thangoo 😌",
                options: [
                    { text: "Pandren Ammu", correct: true },
                    { text: "Pannala", correct: false }
                ]
            },
            {
                message: "ipo ena pannuvaa?",
                options: [
                    { text: "Unnadha di pandren Thangoo", correct: true },
                    { text: "Unna mattum dha di pandren", correct: true }
                ]
            }
        ]
    },

    {
        question: "Thango enna unnaku romba pudikkumaa?",
        rounds: [
            {
                options: [
                    { text: "Romba pudikkum", correct: true },
                    { text: "Pudikadhu", correct: false }
                ]
            },
            {
                message: "Unmaiya sollu da 😌",
                options: [
                    { text: "pudikum thango", correct: true },
                    { text: "pudikadhu", correct: false }
                ]
            },
            {
                message: "Poi sollama thangoo ennaku theriyum😌",
                options: [
                    { text: "Romba romba pudikum", correct: true },
                    { text: "Unnda dha pudikum", correct: true }
                ]
            }
        ]
    },

    {
        question: "Prajiii unnaku nammo love evlo important?",
        rounds: [
            {
                options: [
                    { text: "romba important", correct: true },
                    { text: "important ila", correct: false }
                ]
            },
            {
                message: "apo important ilaya?",
                options: [
                    { text: "Important dha", correct: true },
                    { text: "Romba Important", correct: true }
                ]
            }
        ]
    },

    {
        question: "Prajii unnaku yara pudikum?",
        rounds: [
            {
                options: [
                    { text: "Pooja", correct: true },
                    { text: "Rathi", correct: false }
                ]
            },
            {
                message: "Adichuruven 😌",
                options: [
                    {text: "Bhavya", correct: false },
                    { text: "Pooja", correct: true }
                ]
            },
            {
                message: "Serupu pinjurum thangoo 😤",
                options: [
                    { text: "Pooja", correct: true },
                    { text: "Pooja", correct: true }
                ]
            }
        ]
    },

    {
        question: "Ennaku ena color pudikum?",
        rounds: [
            {
                options: [
                    { text: "White", correct: true },
                    { text: "Pale Pink", correct: false }
                ]
            },
            {
                message: "No da thappu 😅",
                options: [
                    { text: "Olive green", correct: false },
                    { text: "Pure White", correct: true }
                ]
            },
            {
                message: "Ammu one more chance 😅",
                options: [
                    { text: "Pale Pink", correct: true },
                    { text: "Lavender", correct: true }
                ]
            }
        ]
    },

    {
        question: "Ennaku endha hero romba pudikum?",
        rounds: [
            {
                options: [
                    { text: "Vj", correct: false },
                    { text: "Ajith", correct: false }
                ]
            },
            {
                message: "One last chance 😌",
                options: [
                    { text: "DQ", correct: false },
                    { text: "Dhanush", correct: false }
                ]
            },
            {
                message: "Sorry da 😅😅",
                options: [
                    { text: "Prajiii❤️‍🩹", correct: true },
                    { text: "Prajiii💕", correct: true }
                ]
            }
        ]
    }
];


let currentQuestion = 0;
let currentRound = 0;


function loadQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("progress").innerHTML =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("question").innerHTML = q.question;


    const optionBox = document.getElementById("options");
    optionBox.innerHTML = "";


    if (q.rounds[currentRound].message) {

        const msg = document.createElement("p");
        msg.innerHTML = q.rounds[currentRound].message;
        optionBox.appendChild(msg);

    }


    q.rounds[currentRound].options.forEach(option => {

        const btn = document.createElement("button");

        btn.innerHTML = option.text;


        btn.onclick = () => {

            if (option.correct) {

                currentQuestion++;
                currentRound = 0;

            } else {

                currentRound++;

                if (currentRound >= q.rounds.length) {
                    currentQuestion++;
                    currentRound = 0;
                }

            }


            if (currentQuestion < questions.length) {
                loadQuestion();
            } 
            else {
                window.location.href = "final.html";
            }

        };


        optionBox.appendChild(btn);

    });

}


loadQuestion();