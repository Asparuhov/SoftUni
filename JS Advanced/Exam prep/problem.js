class ChristmasDinner {
    constructor(budget) {
      this.budget = budget;
      this.dishes = [];
      this.products = [];
      this.guests = {};
    }
  
    get budget() {
      return this._budget;
    }
  
    set budget(value) {
      this._budget = value;
      if (value < 0) {
        throw new Error("The budget cannot be a negative number");
      }
    }
  
    shopping([type, price]) {
      if (this.budget < price) {
        throw new Error("Not enough money to buy this product");
      }
      this.products.push(type);
      this.budget -= price;
      return `You have successfully bought ${type}!`;
    }
  
    recipes(obj) {
      let { recipeName, productsList } = obj;
      if (productsList.every((i) => this.products.includes(i))) {
        this.dishes.push({ recipeName, productList: productsList });
        return `${recipeName} has been successfully cooked!`;
      } else {
        throw new Error("We do not have this product");
      }
    }
  
    inviteGuests(name, dish) {
      let res = this.dishes.filter((d) => d.recipeName !== dish);
      if (res.length < 1 || !res) {
        throw new Error("We do not have this dish");
      }
      if (this.guests.hasOwnProperty(name)) {
        throw new Error("This guest has already been invited");
      }
  
      this.guests[name] = dish;
  
      return `You have successfully invited ${name}!`;
    }
  
    showAttendance() {
      let res = {};
      for (let dish of this.dishes) {
        res[dish.recipeName] = {
          name: dish.recipeName,
          products: dish.productList,
        };
      }
      for(let guest in this.guests){
          console.log(`${guest} will eat ${res[this.guests[guest]].name}, which consists of ${res[this.guests[guest]].products.join(', ')}`);
      }
    }
  }
  
  let dinner = new ChristmasDinner(300);
  
  dinner.shopping(["Salt", 3]);
  dinner.shopping(["Beans", 3]);
  dinner.shopping(["Cabbage", 4]);
  dinner.shopping(["Rice", 2]);
  dinner.shopping(["Savory", 1]);
  dinner.shopping(["Peppers", 1]);
  dinner.shopping(["Fruits", 40]);
  dinner.shopping(["Honey", 10]);
  
  dinner.recipes({
    recipeName: "Oshav",
    productsList: ["Fruits", "Honey"],
  });
  dinner.recipes({
    recipeName: "Folded cabbage leaves filled with rice",
    productsList: ["Cabbage", "Rice", "Salt", "Savory"],
  });
  dinner.recipes({
    recipeName: "Peppers filled with beans",
    productsList: ["Beans", "Peppers", "Salt"],
  });
  
  dinner.inviteGuests("Ivan", "Oshav");
  dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
  dinner.inviteGuests("Georgi", "Peppers filled with beans");
  
  console.log(dinner.showAttendance());
  