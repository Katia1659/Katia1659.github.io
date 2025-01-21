document.addEventListener('DOMContentLoaded', ()=>{
    const bouttonToggle = document.getElementById('toggle-dark-mode');

    bouttonToggle.addEventListener('click', ()=>{
        let div = document.getElementById("body");
        div.classList.toggle('dark-mode');
        if(div.getAttribute('class') == 'dark-mode'){
            bouttonToggle.innerHTML= " Activer le mode Claire"
        }else{
            bouttonToggle.innerHTML = "Activer le mode Sombre"
        }
    })
})