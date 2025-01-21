document.addEventListener('DOMContentLoaded', () => {
    // 1.Sélectionner les éléments du DOM nécessaires : 
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // 2.Ajouter un écouteur d'évenement au boutton "ajouter"

    addTaskButton.addEventListener('click', () => {
        // recupérer la valeur saisie dans le champ text: 
        const taskText = taskInput.value.trim();

        //  vérification de l'entrer :
        if (taskText != '') {

            nouvelleTache(taskText);

            // Rénintialiser le champ de text:
            taskInput.value = "";
        };

    });

    // 3.Ajouter un écouteur d'évènement pour marquer une tache comme terminée
    taskList.addEventListener('click', (event) => {
        // vérifier si l'élément cliqué est une tâche
        if(event.target.classList.contains('task')){

            event.target.classList.toggle('completed');
        }
       
    },)

    // 4.Ajouter un bouton de suppression pour chaque tache:
    function ajouterBouttonSuppression(tacheElement) {

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(tacheElement);
        });
        tacheElement.appendChild(deleteButton);
    }

    // Fonction pour créer une nouvelle tache : 
    function nouvelleTache(taskText) {
        const tacheElement = document.createElement('li');

        tacheElement.classList.add('task');
        tacheElement.textContent = taskText;


        ajouterBouttonSuppression(tacheElement);
        taskList.appendChild(tacheElement);

    }
})