function solve(input) {
    let num = Number(input.shift());
    let line = input.shift();
    let cars = {};
    let commands = {
        Drive(model, run, fuel) {
            if (fuel > cars[model][1]) {
                console.log(`Not enough fuel to make that ride`);
            }
            else if (fuel <= cars[model][1]) {
                cars[model][1] -= fuel;
                cars[model][0] += run;
                console.log(`"${model} driven for ${run} kilometers. ${fuel} liters of fuel consumed`);
            }
            if (cars[model][0] >= 100000) {
                delete cars[model];
                console.log(`Time to sell the ${model}!`);
            },
            
        }
    }
    while (num !== 0) {
        let [model, run, fuel] = line.split('|');
        fuel = Number(fuel);
        run = Number(run);
        cars[model] = [run, fuel];
        line = input.shift();
        num--;
    }
    console.log(cars);
}
 /* solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  );  */





  
let cars = {
    'Audi A6': [ 38000, 62 ],
    'Mercedes CLS': [ 11000, 35 ],
    'Volkswagen Passat CC': [ 45678, 5 ]
  }
  
function Refuel(model, fuel) {
    
}

Drive(`Audi A6`, 543, 47);