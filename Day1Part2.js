

// Extract the numbers from the text file.
const fs = require('fs');
const Input = fs.readFileSync('Day1Input.txt', 'utf8').split('\r\n');

// Find the break points between each elf.
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

let indexes = getAllIndexes(Input, '');

// Use the break points to generate an array of arrays of each elves' food items.
var elves = [], i;
for(i = 0; i < indexes.length; i++) {
    elves[i] = Input.slice(indexes[i], indexes[i + 1]);
}

// Find an array of the sums of each of the elves' calories.
let elfSums = elves.map((array) => array.reduce((a,b) => +a + +b));

// Sort the arrays in descending order.
elfSums.sort(function (a,b) {
    return b - a;
});

// Find the number of calories for the elf with the highest calories
console.log(elfSums[0]);


// Find the sum of the first three elements.
console.log(elfSums[0] + elfSums[1] + elfSums[2]);
