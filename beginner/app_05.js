function shuffle(arr) {
  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    let temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  console.log(arr);
  return arr;
}

for (i = 0; i <= 10; i++) {
  shuffle([2, 11, 37, 42]); // 可能是[42, 22, 37, 2]
}
