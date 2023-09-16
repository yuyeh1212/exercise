const friends = ["Harry", "Ron", "Shap", "Mike", "Grace"];

for (let i = 0; i < friends.length / 2; i++) {
  let temp = friends[i];
  friends[i] = friends[friends.length - 1 - i];
  friends[friends.length - 1 - i] = temp;
}

console.log(friends);
