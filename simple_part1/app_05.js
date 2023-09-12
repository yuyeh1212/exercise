function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      console.log(str[i] + " " + i);
      return str[i] + " " + i;
    }
  }
  console.log(-1);
  return -1;
}

position("abcd"); // prints -1
position("AbcD"); // prints A 0
position("abCD"); // prints C 2
