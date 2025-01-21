
        /**
 * FizBuzz EXO2
 */
        let text = " ";

        function FizzBuzz(index, element) {
           
            for (let i = 1; i < index; i++) {
                let child= document.createElement(`span`);
                if (i % 3 === 0 && i % 5 === 0) {
                    text = "FizzBuzz";
                    child.innerHTML = `${text}`;
                    child.setAttribute('title', `${i} : divisible sur 5 et 3`);
                    child.style.backgroundColor="rgb(167, 30, 216)";
                } else if (i % 3 === 0 && i % 5 != 0) {
                    text = "Fizz";
                    child.innerHTML = `${text}`;
                    child.setAttribute('title', `${i} : divisible sur 3`);
                    child.style.backgroundColor="rgb(88, 90, 202)";

                } else if (i % 5 === 0 && i % 3 != 0) {
                    text = "Buzz";
                    child.innerHTML = `${text}`;
                    child.setAttribute('title', `${i} : divisible sur 5 `);
                    child.style.backgroundColor="rgb(202, 88, 88)";
                } else {
                    text = i;
                    child.innerHTML = `${text}`;
                    child.setAttribute('title', `${i} : indivisible sur 5 et 3`);
                }

                element.appendChild(child);
            }    
        }

        let span = document.getElementById('rslt');
        let btn1 = document.getElementById('btn');

        btn1.addEventListener("click", () => {
            FizzBuzz(100, span);
        })

    