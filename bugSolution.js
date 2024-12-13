function add(a, b) {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);
  if (isNaN(numA) || isNaN(numB)) {
    return 'Invalid input. Please provide numbers.';
  }
  return numA + numB;
}

console.log(add(1, '2')); // Output: 3
console.log(add('1', 2)); // Output: 3
console.log(add('a', 2)); //Output: Invalid input. Please provide numbers.