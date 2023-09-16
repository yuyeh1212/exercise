function printstars(space, star) {
  let result = "";
  for (i = 0; i < space; i++) {
    result += " ";
  }
  for (i = 0; i < star; i++) {
    result += "*";
  }
  console.log(result);
}

function pyramid(k) {
  let star = 1;
  let space = k - 1;
  while (space >= 0) {
    printstars(space, star);
    star += 2;
    space -= 1;
  }
}

pyramid(1);
console.log("==========");
//*
pyramid(2);
console.log("==========");
//  *
// ***
pyramid(4);
console.log("==========");
//    *
//   ***
//  *****
// *******
pyramid(15);
