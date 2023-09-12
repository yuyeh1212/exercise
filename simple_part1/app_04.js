function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  return str == str.toUpperCase();
}

console.log(isAllUpperCase("ABCD"));
console.log(isAllUpperCase(""));
console.log(isAllUpperCase("aBCD"));
