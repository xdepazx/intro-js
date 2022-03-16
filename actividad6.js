const animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];

const comingSoonAnimals = ['panter', 'dragon', 'turtle'];
const arreglo = animals.concat(comingSoonAnimals);
console.log(arreglo);

//2
var arr = [4, 6, 1, 0, 8, 2];
arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);

// 3
const arreglo3 = animals.push('cows');
console.log(animals);

//4
const arreglo4 = animals.shift();
console.log(animals);