function solve(commands) {
  let initialNumber = 1;
  let arr = [];
  for (let set of commands) {
    if (set === "add") {
      arr.push(initialNumber);
      initialNumber += 1;
    } else {
      arr.pop();
      initialNumber += 1;
    }
  }
  return arr.length > 0 ? arr.forEach((el) => console.log(el)) : "Empty";
}

solve(["add", "add", "remove", "add", "add"]);
