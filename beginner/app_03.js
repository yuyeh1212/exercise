function PPDI() {
  for (i = 100; i <= 999; i++) {
    let digits = i % 10;
    let tens = Math.floor(i / 10) % 10;
    let hundreds = Math.floor(i / 100) % 10;

    let sum = Math.pow(digits, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3);
    if (sum == i) {
      console.log(i);
    }
  }
}

PPDI();
// 153
// 370
// 371
// 407
