/*
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// const generatore = document.getElementById('generate');

// generatore.addEventListener('click', funzione che genera numero);


const printer = document.getElementById('display'); //richiama il div che contiene i quadrati a schermo.
const starter = document.querySelector('#generate'); //button che aziona le funzioni per generate quadrati e numeri.
const control = document.querySelector('#verify'); //button per azionare la funzione di verifica.
const winPrint = document.getElementById('numsWin');
const squareNum = document.getElementById('nums'); //il quadrato dove stampiamo i singoli numeri random.
//input riceve il numero dall'utente.
const numsWin = document.getElementById('numsWin');



//button starter che genera numeri al clic.
starter.addEventListener('click', function () {
    printer.innerHTML = '';
    const arrayNums = genNums();
    makeResultSquare(arrayNums, printer);
    console.log(arrayNums);

   

//questo bottone memorizza e verifica i numeri dell'utente
control.addEventListener('click', function () {
    const userNum = document.querySelectorAll('.insert');
    const arrayUser = [];


    for (let i = 0; i < userNum.length; i++) {
        const num = parseInt(userNum[i].value);
        if (!isNaN(num)) {
            arrayUser.push(num);
        }
    }




    let winsNums = [];

    for (let i = 0; i < arrayNums.length; i++) {
        if (arrayNums.includes(arrayUser[i])) {
            winsNums.push(arrayUser[i]);

        }
    }
    console.log(arrayUser);
    console.log(winsNums);
    winPrint.textContent = winsNums

});

});




//funzioni per stampare 5 numeri random in 5 differenti quadrati, spariscono dopo 30 secondi.
function genNums() {

    const arrayNums = [];

    while (arrayNums.length < 5) {
        let nums = getRndInteger(1, 100);
        if (!arrayNums.includes(nums)) {
            arrayNums.push(nums)
        }
    }
    return arrayNums


}
function makeResultSquare(array, container) {

    for (let i = 0; i < array.length; i++) {
        const div = document.createElement("div");
        div.setAttribute('class', 'nums');
        div.textContent = array[i];
        setTimeout(function () {
            div.textContent = '';
        }, 3000)
        container.appendChild(div);
    }
}

















