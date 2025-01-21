// import * as  img from "../../assets"

var fruits = [
    {
        nom: "Pomme",
        image: "../../assets/pomme.jfif",
        prix:  1.5
    },
    {
        nom: "Orange",
        image: "../../assets/orange.jfif",
        prix:  2.5
    },
    {
        nom: "Banane",
        image: "../../assets/banane.webp",
        prix:  1.2
    },
    {
        nom: "Mangue",
        image: "../../assets/mangue.jpg",
        prix:  3.4
    },
    {
        nom: "Avocat",
        image: "../../assets/avocat.jpg",
        prix:  2.4
    },
    {
        nom: "Fraise",
        image: "../../assets/fraise.webp",
        prix:  1.99
    },
    {
        nom: "Annans",
        image: "../../assets/annanas.jpg",
        prix:  2.99
    },
    {
        nom: "Kiwi",
        image: "../../assets/kiwi.jpg",
        prix:  1.49
    },
];

const creerCarteFruit = (obj)=>{
    const container = document.getElementById("fruits-container");
    let card = document.createElement("div");
    card.setAttribute("name", "card");
    card.className = "fruit-card";

    let img = document.createElement("img");
    img.setAttribute("src", obj.image);

    let h2 = document.createElement("h2");
    h2.textContent=obj.nom;

    let prix = document.createElement("p");
    prix.textContent= obj.prix;

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(prix);


    let inputQuantite = document.createElement("input");
    inputQuantite.setAttribute("type", "number");
    inputQuantite.setAttribute("min", 1);
    inputQuantite.setAttribute("value", 1);

    card.appendChild(inputQuantite);


    let boutonAcheter = document.createElement("button");
    boutonAcheter.textContent="Acheter";

    card.appendChild(boutonAcheter);

    
    boutonAcheter.addEventListener("click", ()=>{
        let total = inputQuantite.value * obj.prix;
        alert(`vous avez acheter  ${inputQuantite.value} ${obj.nom}(s), pour un totale : ${total} €.`)
    });

       
container.appendChild(card);

};

const afficherFruits = (obj)=>{
    const container = document.getElementById('fruits-container');
    container.innerHTML= "";
    obj.forEach(element => {
        creerCarteFruit(element);        
    });
}

document.addEventListener("DOMContentLoaded", ()=>{afficherFruits(fruits)});

