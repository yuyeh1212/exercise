function distance(h, n) {
  let result = h;
  for (i = 2; i <= n; i++) {
    result += 2 * (h / Math.pow(2, i - 1));
  }
  return result;
}

console.log(distance(100, 4)); // 275
console.log(distance(500, 7)); // 1484.375
