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



document.addEventListener("DOMContentLoaded", ()=>{});

//Panier 


document.addEventListener(
    "DOMContentLoaded",
    ()=>{
       

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
            inputQuantite.setAttribute('id', 'quantite')
            inputQuantite.setAttribute("type", "number");
            inputQuantite.setAttribute("min", 1);
            inputQuantite.setAttribute("value", 1);
        
            card.appendChild(inputQuantite);
        
        
            let boutonAcheter = document.createElement("button");
            boutonAcheter.classList.add("ajouter-panier");
            boutonAcheter.setAttribute("data-nom", obj.nom);
            boutonAcheter.setAttribute("data-prix", obj.prix);
            boutonAcheter.textContent="Ajouter";
        
            card.appendChild(boutonAcheter);
        
            
            boutonAcheter.addEventListener("click", ()=>{
                let total = inputQuantite.value * obj.prix;
                let qtt = parseFloat(inputQuantite.value);
        
                ajouterAuPanier(obj.nom, obj.prix, qtt);
                
                // alert(`vous avez acheter  ${inputQuantite.value} ${obj.nom}(s), pour un totale : ${total} €.`)
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
        //1. initialiser un tableau pour stocker les articles du panier : 
        let panier = [];

        // 2. Déclarer la fonction pour ajouter des articles au panier : 
        function ajouterAuPanier (nom, prix, qtt) {

            //  vérifier si l'article est déja dans le panier 
            const articleExistant = panier.find((item) => item.nom === nom);

            // si l'article est déjà dans le panier, augmenter la quantité:
            if(articleExistant){

                articleExistant.quantite = articleExistant.quantite + parseFloat(qtt);
            }else{
                
                panier.push({
                    nom: nom,
                    prix: prix,
                    quantite : parseFloat(qtt)
                });
            }
            afficherPanier();
        }

        //3.Fonction pour afficher le contenu du panier

        const panierDiv = document.getElementById('panier-container');
        console.log(panierDiv);
        const totalSpan = document.createElement('button');
        totalSpan.style.display="none"
        panierDiv.appendChild(totalSpan);

        function afficherPanier(){
            let panierSection = document.getElementById('panier-section');
            totalSpan.className="total";
            

            let total= 0;
            panier.forEach(article => total = total+(article.prix* article.quantite));

            totalSpan.innerHTML="Totale = "+total.toFixed(2)+" €.";
            totalSpan.title= " payer ";
            totalSpan.addEventListener('click', ()=>{
                alert("Merci pour votre achat !");
            })


            panierSection.innerHTML=" ";
            if (panier.length === 0){
            }else{
                totalSpan.style.display="block";
                panier.map ( item => {
                    const article = document.createElement("div");
                    article.classList.add ('article-panier');
                    article.innerHTML = `<ul>
                    <li><strong> ${item.nom}</strong>:  ${item.quantite}x${item.prix} €. (Totale: ${(item.prix * item.quantite).toFixed(2)} €)</li> <ul>`;
                    panierSection.appendChild(article);
                });
            }
        };

        const boutonAjouter = document.querySelectorAll('.ajouter-panier');

        // pour chaque bouton "ajouter", en met un evventListner :

        boutonAjouter.forEach(bouton => {
            bouton.addEventListener('click', ()=>{
                const nom = bouton.getAttribute('data-nom');
                const prix = parseFloat(bouton.getAttribute('data-prix'));
                ajouterAuPanier(nom, prix);
                
            })
        });

        afficherFruits(fruits);
 
    }
)


