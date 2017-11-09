var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var explan;
for (var i = 0; i < numbers.length; i++) {
    explan = (numbers[i] === 100 ? [numbers[i]] : []);
}

console.log(explan);
