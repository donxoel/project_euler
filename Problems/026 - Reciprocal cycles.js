function cycle_length(n) {
    while (n % 2 === 0) n /= 2;
    while (n % 5 === 0) n /= 5;
    if (n === 1) return 0;

    let remainder = 1;
    let length = 0;
    while (true) {
        remainder = (remainder * 10) % n;
        length++;
        if (remainder === 1) break;
    }
    return length;
};

function longestReciprocalCycle(limit) {
    let maxLength = 0;
    let number = 0;
    for (let i = 1; i < limit; i++) {
        const length = cycle_length(i);
        if (length > maxLength) {
            maxLength = length;
            number = i;
        }
    }
    return number;
}

console.log(longestReciprocalCycle(1000));  