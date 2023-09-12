function stars(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

stars(1);
// *
console.log("==========");
stars(4);
// *
// **
// ***
// ****
console.log("==========");
stars(10);
