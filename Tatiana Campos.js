'use strict'

/*1. Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {
   const palabraA = testWord.split(" ")
   const ramdoPalabra = palabraA.sort("")
   ramdomPalabra.forEach(palabra =>{
       console.log(palabra);
   })
}
wordCutter(testWord);


/*2. Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];
function unaPalabra (palabra) {
    return palabra.normalize('NFD').replace("O", "o").toUpperCase();
}

function buscarPalabra(palabraDeLaLista, palabra) {
    let palabraNormal = palabra;
    let normal = unaPalabra(palabraNormal);
    const listaNormal =[];
    for (let index = 0; index < palabraDeLaLista.length; index++) {
        listaNormal.push(unaPalabra(palabraDeLaLista[index]))
    }
    console.log(listaNormal.includes(normal), `palabra: ${regular}`, listaNormal);
}
buscaPalabraEnLista(testTargetWordA, testWordsList)
buscaPalabraEnLista(testTargetWordB, testWordsList)
buscaPalabraEnLista(testTargetWordC, testWordsList)

// 3. pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
   let palabra = targetWord;
   let norPalabra = unaPalabra(palabra);
   const lista = [];
   for (let index = 0; index < wordsList.length; index++) {
    lista.push(unaPalabra(targetWord[index]))
   }
   console.log(lista.includes(norPalabra));
}
targetWord(testTargetWordA, testWordsList)
targetWord(testTargetWordB, testWordsList)
targetWord(testTargetWordC, testWordsList)


/*4. Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let letrasTotal = 0;
    const sortPalabra = wordsList.sort((wordA, wordB) => {
        if (wordA.length < wordB.length) {
            return -1;
        } else if (wordA.length > wordB.length){
            return 1;
        } else {
            return 0;
        }
    });

    sortPalabra.forEach(wordsList => letrasTotal += wordsList.length);
    const words = letrasTotal/sortPalabra.length;
    return{
        palabraCorta: sortPalabra[0],
        palabraLarga: sortPalabra[sortPalabra.length-1],
        words
    };
}
console.log(wordLengthClassifier(wordsList));

/*5. Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
   let palindromoPalabra = word.toLowerCase().split("").reserve().join("");
   if (palindromoPalabra === word.toLowerCase()){
    console.log("La palabra"+ word + "es palíndromo");
   } else {
       console.log("la palabra " + word + "no es palíndromo");
   }
}
palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);


/*6. Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
   let vocales = "a e i o u";
   let contador = [0,0];
   for (let index = 0; index < objectContainer.list.length; index++) {
       let palabra = objectContainer.list[index];
       for (let j = 0; j < palabra.length; j++) {
           if (vocales.includes(palabra.charAt(j).toLowerCase())) {
               contador[0] += 1;
           }else{
               contador [1] += 1;
           }
       }
   }
   console.log(contador);
}
lettersCounter(objectContainer)


/*7. Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
 let arrayJoin = listA.concat(listB)
 console.log(arrayJoin);
}
arrayJoiner(wordArrayA, wordArrayB);

/*8. Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
   listOfWords.forEach((testWordToExplore) => {
       testWordToExplore.split("").every(letras => {
           return wordToExplore.includes(letras)
       })
   })
}

/*9. Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let unir = objectMultiContainer.listA.concat(objectMultiContainer.listB)
    const result = []
    for (let i = 0; i < unir.lengt; i++) {
        const listActual = unir[i].split('');
        for (let index = 0; index < unir[i].length; index++) {
            if (listActual[index] === "a" || listActual[index] === "e" || listActual[index] === "i" || listActual[index] === "o" || listActual[index] === "u") {
                listActual.splice(index, 1);
            }
        }
        result.push(listActual.join(''))
    }
    console.log(result);
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*10. Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    if (condition) {
        
    }
}


/*11. Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
   let revisar = listA.testListA
}