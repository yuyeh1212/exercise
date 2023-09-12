function stars2(n) {
  for (let i = 1; i <= n; i++) {
    // 製作出i個星星
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
  for (let i = n - 1; i >= 1; i--) {
    // 製作出i個星星
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
  console.log("==========");
}

stars2(1);
// *
stars2(2);
// *
// **
// *
stars2(3);
// *
// **
// ***
// **
// *
stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *
