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
const squareNum = document.getElementById('nums'); //il quadrato dove stampiamo i singoli numeri random.
const userNum = document.getElementById('insert'); //input riceve il numero dall'utente.


//button starter che genera numeri al clic.
starter.addEventListener('click', function(){
   printer.innerHTML = '';

    
const arrayNums = genNums ();
makeResultSquare(arrayNums, printer);

});

control.addEventListener('click', function(){
confront(arrayNums, )

})


//funzioni per stampare 5 numeri random in 5 differenti quadrati, spariscono dopo 30 secondi.
function genNums (){

    const arrayNums = [];

    while(arrayNums.length < 5){
        let nums = getRndInteger (1, 100);
        if(!arrayNums.includes(nums)){
            arrayNums.push(nums)
        }
    }
    return arrayNums
    
    
}
function makeResultSquare(array, container){

    for (let i = 0; i < array.length; i++) {
        const div = document.createElement("div");
        div.setAttribute('id', 'nums');
        div.textContent = array[i];
        setTimeout(function(){
            div.textContent = '';
        }, 3000)
        container.appendChild(div);
      }
}

function confront(arrayRnd, arrayUser){
    let winsNums = [];

    for(let i = 0; i < arrayRnd.length; i++){
        if(arrayRnd.includes(arrayUser[i])){
            winsNums.push(arrayUser);

        }
        return winsNums;
    }
};
















