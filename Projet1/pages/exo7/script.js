document.addEventListener('DOMContentLoaded', ()=>{

    // Variable pour stocker les données d'inscriprion 
    const users = [];
    const message = document.getElementById('message');
    message.style.display ="none";


    const inscrireUtilisateur = ()=>{
        let nomUser = document.getElementById('username-inscription').value ;
        let passwordUser = document.getElementById('password-inscription').value ;
       

        let userExiste = users.find(user => user.nom === nomUser ); 
        

        if(userExiste){
            message.style.backgroundColor = "rgb(222, 90, 90)";
            message.style.display = "block";
            message.innerHTML= "L'utilisateur existe déjà !";
            console.log(userExiste);
        }else{
            users.push({
                nom: nomUser,
                password: passwordUser
            });
            console.log(users);
            message.style.backgroundColor = "rgb(90, 222, 127)";
            message.style.display = "block";
             message.innerHTML= "L'utilisateur ajouter avec succé!";
        }

    };


    const connectUtilisateur = () => {
        let nom = document.getElementById('username-connexion').value;
        let password = document.getElementById('password-connexion').value;
        
        console.log(users);

        let user = users.find(user => user.nom === nom && user.password === password );

        console.log(user);

        if (user){
            message.style.backgroundColor = "rgb(90, 222, 127)";
            message.style.display = "block";
            message.innerHTML= "L'utilisateur connecter avec succé!";
        }else{
            message.style.backgroundColor = "rgb(222, 90, 90)";
            message.innerHTML= "L'utilisateur n'existe pas!";

        }
    };


    document.getElementById('btn-inscription').addEventListener('click', inscrireUtilisateur);
    document.getElementById('btn-connexion').addEventListener('click', connectUtilisateur );

})