function isPrime(n) {
  if (n == 1) {
    console.log(false);
    return false;
  }

  let starter = 2;
  while (starter < n) {
    if (n % starter == 0) {
      console.log(false);
      return false;
    }
    starter++;
  }
  console.log(true);
  return true;
}

isPrime(1); // returns false
isPrime(2); // returns true
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(1000000); // returns false
