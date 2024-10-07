const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30, 1];

// Function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Find prime numbers
const primeArray = numbers.filter(isPrime);
console.log("Prime Numbers:", primeArray);

// Find maximum, minimum, and sum of prime numbers
const maxPrime = Math.max(...primeArray);
const minPrime = Math.min(...primeArray);
const sumPrimes = primeArray.reduce((acc, num) => acc + num, 0);

console.log("Max Prime:", maxPrime);
console.log("Min Prime:", minPrime);
console.log("Sum of Primes:", sumPrimes);