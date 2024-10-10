// Simple function to calculate Fibonacci sequence up to 'n' terms
function fibonacci(n) {
    if (n <= 0) {
        return "Input should be a positive integer.";
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const fibSequence = [0, 1];
        for (let i = 2; i < n; i++) {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
        return fibSequence;
    }
}

// Example usage
const numTerms = 10;
console.log(`Fibonacci sequence up to ${numTerms} terms:`, fibonacci(numTerms));
