const user = {
  id: 101,
  name: "Alice Johnson",
  email: "alice@example.com",
};

// console.log("isdsdd" in user);

// for (const datauser in user) {
//   console.log(user[datauser]);
// }

Object.freeze(user);

user.id = 2222;
console.log(user.id);

delete user.id;
console.log(user);

console.log(user);
