function calc(a, n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      result += a * Math.pow(10, j);
    }
  }
  console.log(result);
}

calc(2, 3); // returns 246
calc(8, 5); // returns 98760
