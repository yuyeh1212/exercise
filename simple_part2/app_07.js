function primeFactor(n) {
  let ans = n + " = ";
  let p = 2;
  while (p <= n) {
    if (n % p == 0) {
      n /= p;
      ans += p + "x";
    } else {
      p++;
    }
  }

  let ans2 = "";
  for (let i = 0; i < ans.length - 1; i++) {
    ans2 += ans[i];
  }
  console.log(ans2);
  return ans2;
}

primeFactor(120); // returns "2 x 2 x 2 x 3 x 5"
primeFactor(91); // 7 x 13
primeFactor(1200);
