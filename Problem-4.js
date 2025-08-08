function countMultiples(arr) {
  let result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }
  return result;
}

module.exports = countMultiples;
