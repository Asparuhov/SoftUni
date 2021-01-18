function solve(arr, splitter) {
  const res = arr.map((el) => el + splitter).join("");
  console.log(res.slice(0, res.length - 1));
}

solve(["One", "Two", "Three", "Four", "Five"], "-");
