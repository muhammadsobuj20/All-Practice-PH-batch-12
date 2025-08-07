const numbers = [1, 3, 4, 7, 6, 2, 5];
// console.log(numbers);
// numbers.sort()
// console.log(numbers);

//string

const friends = ["sakib", "akib", "nokib", "takib", "zamil", "agamil"];
friends.sort();
// console.log(friends);

const friend_ascending = friends.sort(function (a, b) {
  return a - b;
});
console.log(friend_ascending);

const friend_descending = friends.sort(function (a, b) {
  return b - a;
});
console.log(friend_descending);

//ascending
const ages = [23, 76, 78, 112, 30, 90, 55];
// console.log(ages);
ages.sort();
// console.log(ages);

const age_ascending = ages.sort(function (a, b) {
  return a - b;
});
// console.log(age_ascending);

//descending
const age_descending = ages.sort(function (a, b) {
  return b - a;
});
// console.log(age_descending);
