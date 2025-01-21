 /**
 * Conversion Temperatue Exo 1
 */

 function convertirEnF(c) {
    return c * 9 / 5 + 32;
};

let tem = document.getElementById('temp');


let result = document.getElementById('result');
let btn = document.getElementById('calc');

btn.addEventListener("click", () => {
    console.log(tem.value);
    if (tem.value) {
        let tempF = convertirEnF(tem.value);
        console.log(tempF);
        result.innerHTML = `Température en Fahrenheit = ${tempF}`;
    }
})


