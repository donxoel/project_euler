/* 
35 Circular Primes

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
How many circular primes are there below one million?
*/
function circ(number) {
    const initialStr = String(number);
    const circs = [];
    for (let i = 0; i < initialStr.length; i++) {
        circs.push(Number((initialStr.slice(i) + initialStr.slice(0, i))));
    }
    return circs;
}

function sieve(limit) {
    const sieveArr = new Array(limit + 1).fill(true);
    sieveArr[0] = false;
    sieveArr[1] = false;
    
    for (let index = 2; index*index <= limit; index++) {
        for (let i = index*index; i < sieveArr.length; i += index) {
            if (sieveArr[i]) {
                sieveArr[i] = false;
            }
        }
    }
    return new Set(sieveArr.map((isPrime, index) => isPrime ? index : null).filter(Boolean));
}

function countCircularPrimes(limit) {
    const primes = sieve(limit);
    let count = 0;

    for (const p of primes) {
        if (circ(p).every(r => primes.has(r))) {
            count++;
        }
    }

    return count;
}

console.log(countCircularPrimes(1000000)); 