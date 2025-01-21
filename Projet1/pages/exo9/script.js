const quizQuestions = [
  {
    id: 1,
    question: "Quel est le plus grand océan du monde ?",
    options: [
      "Océan Atlantique",
      "Océan Indien",
      "Océan Pacifique",
      "Océan Arctique",
    ],
    correctAnswer: "Océan Pacifique",
  },
  {
    id: 2,
    question: "Quel est le symbole chimique de l'eau ?",
    options: ["H2O", "O2", "CO2", "H2"],
    correctAnswer: "H2O",
  },
  {
    id: 3,
    question: "En quelle année a eu lieu le premier pas sur la lune ?",
    options: ["1965", "1969", "1972", "1975"],
    correctAnswer: "1969",
  },
  {
    id: 4,
    question: "Quelle est la capitale de l'Australie ?",
    options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    id: 5,
    question: "Qui a peint la Joconde ?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Léonard de Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Léonard de Vinci",
  },
  {
    id: 6,
    question: "Quelle est la planète la plus proche du Soleil ?",
    options: ["Vénus", "Terre", "Mercure", "Mars"],
    correctAnswer: "Mercure",
  },
  {
    id: 7,
    question: "Dans quel pays se trouve la Tour Eiffel ?",
    options: ["Espagne", "Italie", "France", "Allemagne"],
    correctAnswer: "France",
  },
  {
    id: 8,
    question: "Quel est l'animal terrestre le plus rapide ?",
    options: ["Guépard", "Lion", "Antilope", "Cheval"],
    correctAnswer: "Guépard",
  },
  {
    id: 9,
    question: "Quelle est la capitale du Japon ?",
    options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    correctAnswer: "Tokyo",
  },
  {
    id: 10,
    question: "Combien de continents y a-t-il dans le monde ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  let score = 0;

  const corpQuiz = document.createElement("div");
  corpQuiz.classList.add("container");
  document.body.appendChild(corpQuiz);

  function creatQuiz(obj, elment) {
    //vider le contenu du div principal
    elment.innerHTML = "";

    //creation des elemnts titre et la liste d'options :
    const question = document.createElement("h2");

    question.textContent = `${obj.id} - ${obj.question}`;

    const listOptions = document.createElement("ul");
    listOptions.classList.add("options-list");

    //creation des liste de réponse avec la logique pour  chaque liste de  proposition

    obj.options.forEach((opt) => {
      let option = document.createElement("li");
      option.classList.add("option");
      option.textContent = opt;
      let answers = []

      option.addEventListener("click", () => {
       
        // Désactiver tous les clics sur les options
        const allOptions = elment.querySelectorAll(".option");
        allOptions.forEach(
          (optElement) => (optElement.style.pointerEvents = "none")
        );

        if (opt === obj.correctAnswer) {
          option.style.backgroundColor = "rgb(50, 204, 50)";
          option.textContent = `${opt}  est la bonne Réponse.`;

          setTimeout(() => {
            // on incrémente index pour pouvoire afficher la prrochaine quize :
            index++;
            score++;
            if (index < quizQuestions.length) {
              creatQuiz(quizQuestions[index], elment);
            } else {
              // à la fin du quiz on affiche un message
              elment.innerHTML = `<h2>Quiz terminé  votre Score est : ${score} /${quizQuestions.length} ! <br/> Merci d'avoir joué.</h2>`;
            }
          }, 1500);
        } else {
          option.style.backgroundColor = "rgb(222, 99, 99)";
          option.textContent = `${opt}  est Faux `;
          index++;
          setTimeout(() => {
            if (index < quizQuestions.length) {
              creatQuiz(quizQuestions[index], elment);
            } else {
              elment.innerHTML = `<h2>Quiz terminé  votre Score est : ${score} /${quizQuestions.length} ! <br/> Merci d'avoir joué.</h2>`;
            }
          }, 1000);
        }
      });

      listOptions.appendChild(option);
    });

    elment.appendChild(question);
    elment.appendChild(listOptions);
  }

  // Afficher la première question
  creatQuiz(quizQuestions[index], corpQuiz);
});
