function oddSeriesSpecial(n) {
  let result = [];
  let num = 1;

  for (let i = 1; i <= n; i++) {
    // Push the odd number
    result.push(num);
    num += 2;

    // For even inputs (except 2), stop one number early
    if (i === n - 1 && n % 2 === 0 && n > 2) {
      break;
    }
  }
  return result;
}

module.exports = oddSeriesSpecial;
