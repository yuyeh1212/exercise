function mySort(arr) {
  let x = arr.length - 1;
  while (x >= 0) {
    let max = arr[0];
    let max_num = 0;
    for (i = 0; i <= x; i++) {
      if (arr[i] > max) {
        max = arr[i];
        max_num = i;
      }
    }
    let temp = arr[max_num];
    arr[max_num] = arr[x];
    arr[x] = temp;

    x--;
  }
  console.log(arr);
}

mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]
mySort([-8, 9, -3, 100, 0, 50]); // returns [-8, -3, 0, 9, 50, 100]
