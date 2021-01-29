function solve(...args) {
  args.forEach((item) => {
    console.log(`${typeof item}: ${item}`);
  });
  let types = {};
  args.forEach((item) => {
    if (!types.hasOwnProperty(typeof item)) {
      types[typeof item] = 1;
    } else {
      types[typeof item] += 1;
    }
  });
  let keys = Object.keys(types);
  keys.sort(function (a, b) {
    return types[b] - types[a];
  });
  for (let set of keys) {
    console.log(`${set} = ${types[set]}`);
  }
}

solve(42, "cat", 15, "kitten", "tomcat");
