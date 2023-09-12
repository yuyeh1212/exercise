function isUpperCase(str) {
  if (str == 0) {
    return false;
  }

  return str[0] == str[0].toUpperCase();
}

console.log(isUpperCase("ABCD"));
console.log(isUpperCase(""));
console.log(isUpperCase("aBCD"));
