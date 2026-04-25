/*
33 Digit Cancelling Fractions

The fraction is 49/98 a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/
function has0(number) {
    return String(number).indexOf("0") !== -1; 
}

function gcd(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}


let productNumerator = 1;
let productDenominator = 1;

for (let a = 10; a <= 98; a++) {
    for (let b = a + 1; b <= 99; b++) {
        if (!has0(a) && !has0(b)) {
            let ax = String(a);
            let bx = String(b);
            for (let i = 0; i <= 1; i++) {
                for (let j = 0; j <= 1; j++) {
                    if (ax[i] === bx[j]) {
                        let cn = Number(ax[1-i]);
                        let cd = Number(bx[1-j]);
                        if (cd !== 0 && a * cd === b * cn) {
                            productNumerator *= a;
                            productDenominator *= b;
                        }
                    }
                }
            }
        }
    }
}

let g = gcd(productNumerator, productDenominator);
console.log(productDenominator / g);