function solve() {
  let elements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  function management(info) {
    let [command, type, amount] = info.split(" ");
    let arr = [
      elements.protein,
      elements.carbohydrate,
      elements.fat,
      elements.flavour,
    ];
    if (command === "restock") {
      elements[type] += Number(amount);
      return "Success";
    }
    if (command === "prepare") {
      let res = prepare(type, arr, Number(amount));
      if (res === "Success") {
        return "Success";
      }
      if (res.includes("bad")) {
        let [_, type] = res.split(" ");
        return `Error: not enough ${type} in stock`;
      }
    }
    if (command === "report") {
      let res = [];
      return [
        `protein=${arr[0]}`,
        `carbohydrate=${arr[1]}`,
        `fat=${arr[2]}`,
        `flavour=${arr[3]}`,
      ].join(" ");
    }
  }
  function prepare(type, ele, amount) {
    let [protein, carbohydrate, fat, flavour] = ele;
    //Apple check
    if (type === "apple" && carbohydrate >= 1 && flavour >= 2) {
      elements.carbohydrate -= 1 * amount;
      elements.flavour -= 2 * amount;
      return "Success";
    } else if (type === "apple" && carbohydrate < 1) {
      return `bad carbohydrate`;
    } else if (type === "apple" && flavour < 2) {
      return `bad flavour`;
    }
    //lemonade check
    if (type === "lemonade" && carbohydrate >= 10 && flavour >= 20) {
      elements.carbohydrate -= 10 * amount;
      elements.flavour -= 20 * amount;
      return "Success";
    } else if (type === "lemonade" && carbohydrate < 10) {
      return `bad carbohydrate`;
    } else if (type === "lemonade" && flavour < 20) {
      return `bad flavour`;
    }
    //burger check
    if (type === "burger" && carbohydrate >= 5 && flavour >= 3 && fat >= 7) {
      elements.carbohydrate -= 5 * amount;
      elements.flavour -= 3 * amount;
      elements.fat -= 7 * amount;
      return "Success";
    } else if (type === "lemonade" && carbohydrate < 5) {
      return `bad carbohydrate`;
    } else if (type === "lemonade" && fat < 7) {
      return `bad fat`;
    } else if (type === "lemonade" && flavour < 3) {
      return `bad flavour`;
    }
    //eggs check
    if (type === "eggs" && protein >= 5 && fat >= 1 && flavour >= 1) {
      elements.protein -= 5 * amount;
      elements.fat -= 1 * amount;
      elements.flavour -= 1 * amount;
      return "Success";
    } else if (type === "eggs" && protein < 5) {
      return `bad protein`;
    } else if (type === "eggs" && fat < 1) {
      return `bad fat`;
    } else if (type === "eggs" && flavour < 1) {
      return `bad flavour`;
    }
    //turkey check
    if (
      type === "turkey" &&
      protein >= 10 &&
      carbohydrate >= 10 &&
      fat >= 10 &&
      flavour >= 10
    ) {
      elements.protein -= 10 * amount;
      elements.fat -= 10 * amount;
      elements.carbohydrate -= 10 * amount;
      elements.flavour -= 10 * amount;
      return "Success";
    } else if (type === "turkey" && protein < 10) {
      return `bad protein`;
    } else if (type === "turkey" && carbohydrate < 10) {
      return `bad carbohydrate`;
    } else if (type === "turkey" && fat < 10) {
      return `bad fat`;
    } else if (type === "turkey" && flavour < 10) {
      return `bad flavour`;
    }
  }
  return management;
}

const manager = solve();

console.log(manager("restock protein 100"));
console.log(manager("restock carbohydrate 100"));
console.log(manager("restock fat 100"));
console.log(manager("restock flavour 100"));
console.log(manager("report"));
console.log(manager("prepare apple 2"));
console.log(manager("report"));
/*
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
 */
