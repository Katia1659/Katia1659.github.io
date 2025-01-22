document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  let score = 0;
  let CRONO = 3000

  // Création du div principal pour le quiz
  const quizDiv = document.createElement("div");
  quizDiv.classList.add("quizDiv");
  document.body.appendChild(quizDiv);



  // Charger les questions du fichier JSON avec fetch
  fetch("./quiz_istqb_v4.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement du fichier JSON");
      }
      return response.json();
    })
    .then((quizQuestions) => {
      function creatQuiz(obj, element) {
        //vider le contenue de l'element principale
        element.innerHTML = "";

        //titre du quiz selon theme
        const title = document.createElement("h2");
        title.textContent = obj.chapter;

        //la question:
        const question = document.createElement("h4");
        question.textContent = `-${obj.id} : ${obj.question}`;

        // la liste des propositions:
        const propositions = document.createElement("ul");
        propositions.classList.add("options-list");

        //creation des liste de réponse avec la logique pour  chaque liste de  proposition
        obj.options.forEach((prop) => {
          const proposition = document.createElement("li");
          proposition.classList.add("option");
          proposition.textContent = prop;

          let answers = [];
          proposition.addEventListener("click", () => {

            //Desactiver tous les clics:
            const allOptions = element.querySelectorAll(".option");
            allOptions.forEach((option) => (option.style.pointerEvents = "none"));

            console.log(obj.correctAnswer === proposition.textContent);

            // vérifier la réponse
            if (proposition.textContent === obj.correctAnswer) {
              console.log("correct");

              proposition.style.backgroundColor = "rgb(132, 216, 132)";
              if (obj.explanation) {
                proposition.textContent = obj.explanation;
                answers.push({
                  id: obj.id,
                  answer: prop,
                  explanation: obj.explanation,
                  status: "correct"
                })
              } else {
                answers.push({
                  id: obj.id,
                  answer: proposition.textContent,
                  status: "correct",
                });
              }
              setTimeout(() => {
                index++
                score++;
                if (index < quizQuestions.length) {
                  creatQuiz(quizQuestions[index], element);
                } else {
                  let persent = (score / quizQuestions) * 100;
                  element.innerHTML = `
                    <h2> Quiz Terminé votre Score est : ${score}/${quizQuestions.length} ! <br/>
                     <p>l'équivalant de : ${persent} %</p> `;
                  console.log(answers);
                }
              }, CRONO);
            } else {
              proposition.style.backgroundColor = "rgb(222, 99, 99)";
              if (obj.explanation) {
                proposition.textContent = obj.explanation;
                answers.push({
                  id: obj.id,
                  answer: prop,
                  explanation: obj.explanation,
                  status: "not correct",
                });
              } else {
                answers.push({
                  id: obj.id,
                  answer: proposition.textContent,
                  status: "not correct",
                });
              }
             
              setTimeout(() => {
                if (index < quizQuestions.length) {
                  index++
                  creatQuiz(quizQuestions[index], element);
                } else {
                  let persent = Math.round((score / quizQuestions.length) * 100, 2);;
                  element.innerHTML = `
                    <h2> Quiz Terminé votre Score est : ${score}/${quizQuestions.length} ! <br/>
                    <p>l'équivalant de : ${persent} %</p> `;
                  console.log(answers);
                }
              }, CRONO);
            }
          });

          propositions.appendChild(proposition);
        });

        
        element.appendChild(title);
        element.appendChild(question);
        element.appendChild(propositions);
      }

      // afficher Quiz
      creatQuiz(quizQuestions[index], quizDiv);

    })
    .catch((err) => {
      console.error("Erreur :", err);
    });
});
