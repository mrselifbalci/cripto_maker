const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
let special = "% * $ & ";
let givenUnwanted = "z , * , j , q , 3";


let alphaTwo = alpha.split(" ");
let specialTwo = special.split(" ");
let array = numeric.concat(specialTwo).concat(alphaTwo);


const cripto = (arr,forbiddenCharacters,passLength) => {
    
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < forbiddenCharacters.length; b++) {
          if (arr[a] === forbiddenCharacters[b]) {
            arr.splice(a, 1);
          }
        }
      }
      let id=[]
    for (i = 0; i < passLength; i++) {
        let randomValue = arr[Math.floor(Math.random() * arr.length)];
        id.push(randomValue);
      }
      return id.join('');
};
console.log(cripto(array,givenUnwanted,6))
console.log(array)



// console.log(array);




