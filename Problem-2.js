function oddSeries(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

module.exports = oddSeries;
