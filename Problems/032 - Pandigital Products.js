/*
32 Pandigital Products

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
The product 7254 is unusual, as the identity, 39 * 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/
function isPanDigital(number) {
    var digits = '123456789';
    for (let index = 0; index < number.length; index++) {
        var pos = digits.indexOf(number[index]);
        if (pos === -1) return false;
        digits = digits.slice(0, pos) + digits.slice(pos + 1);
    }
    return digits.length === 0;
}

// a1 b4 c3
// a2 b3 c4
const ranges = [
    { aMin: 1,  aMax: 9,  bMin: 1_000, bMax: 9_999 },
    { aMin: 10, aMax: 99, bMin: 100,  bMax: 999  }
];
var panProducts = new Set();

ranges.forEach((range) => {
    for (let a = range.aMin; a <= range.aMax; a++){
        for (let b = range.bMin; b <= range.bMax; b++) {
            let c = a * b;
            if (isPanDigital(String(a) + String(b) + (String(c)))) {
                panProducts.add(c);
            }
        }
    }
});
console.log([...panProducts].reduce((accumulator, currentValue) => accumulator + currentValue, 0));