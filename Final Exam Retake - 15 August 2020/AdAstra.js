function solve(input){
    let pattern = /([#|\|])(?<itemName>[A-Z][\s*?A-Za-z]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let totalCalories = 0;
    let result = '';
    let match;
    
    while ((match = pattern.exec(input[0])) !== null){
        let name = match.groups.itemName;
        let expDate = match.groups.expDate;
        let calories = Number(match.groups.calories);
        totalCalories += calories;
        result += `Item: ${name}, Best before: ${expDate}, Nutrition: ${calories} \n`;
        
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    console.log(result);
}

solve([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
  ]
  );