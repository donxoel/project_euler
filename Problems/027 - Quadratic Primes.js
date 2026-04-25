// Project Euler Problem 27: Quadratic primes
// Find the product of the coefficients a and b for the quadratic expression n² + a*n + b that produces the maximum number of primes for consecutive n starting from 0.

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function quadraticPrimes() {
    let maxCount = 0;
    let product = 0;
    for (let a = -999; a < 1000; a++) {
        for (let b = -1000; b <= 1000; b++) {
            let n = 0;
            while (isPrime(n * n + a * n + b)) {
                n++;
            }
            if (n > maxCount) {
                maxCount = n;
                product = a * b;
            }
        }
    }
    return product;
}

console.log(quadraticPrimes());