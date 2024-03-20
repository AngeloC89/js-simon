/*
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// const generatore = document.getElementById('generate');

// generatore.addEventListener('click', funzione che genera numero);

const stampa = document.getElementById('display');
const starter = document.querySelector('#generate');
const squareNum = document.getElementById('nums');


//button starter che genera numeri al clic.
starter.addEventListener('click', function(){
    
const arrayNums = genNums ();
makeResultSquare(arrayNums, stampa);





});




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
function makeResultSquare(array, contenitore){

    for (let i = 0; i < array.length; i++) {
        const div = document.createElement("div");
        div.setAttribute('id', 'nums');
        div.textContent = array[i];
        setTimeout(function(){
            div.textContent = '';
        }, 3000)
        contenitore.appendChild(div);
      }
}















