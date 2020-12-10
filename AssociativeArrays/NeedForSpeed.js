function solve(input) {
    let num = Number(input.shift());
    let cars = {};
    let commands = {
        Drive(model, run, fuel) {
            if (fuel > cars[model][1]) {
                console.log(`Not enough fuel to make that ride`);
            }
            else if (fuel <= cars[model][1]) {
                cars[model][1] -= fuel;
                cars[model][0] += run;
                console.log(`${model} driven for ${run} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (cars[model][0] >= 100000) {
                delete cars[model];
                console.log(`Time to sell the ${model}!`);
            }
        },
        Refuel(model, fuel) {
            let startingFuel = cars[model][1];
            cars[model][1] += fuel;
            if (cars[model][1] >= 75) {
                cars[model][1] = 75;
            }
            console.log(`${model} refueled with ${cars[model][1] - startingFuel} liters`);
        },
        Revert(model, distance) {
            let startingDis = cars[model][0];
            cars[model][0] -= distance;
            if (cars[model][0] <= 10000) {
                cars[model][0] = 10000;
            }
            else {console.log(`${model} mileage decreased by ${distance} kilometers`);}
        }
    }
  
    while (num !== 0) {
        let line = input.shift();
        let [model, run, fuel] = line.split('|');
        fuel = Number(fuel);
        run = Number(run);
        cars[model] = [run, fuel];
        num--;
    }
    
    let set;
    while ((set = input.shift()) !== 'Stop') {
        if (set.includes('Drive')) {
            let [_, model, run, fuel] = set.split(' : ');
            run = Number(run);
            fuel = Number(fuel);
            commands.Drive(model, run, fuel);
        }
        if (set.includes('Refuel')) {
            let [_,model, fuel] = set.split(' : ');
            fuel = Number(fuel);
            commands.Refuel(model, fuel);
        }
        if (set.includes('Revert')) {
            let [_,model, run] = set.split(' : ');
            run = Number(run)
            commands.Revert(model, run);
        }
    }
    const sortable = Object.fromEntries(
        Object.entries(cars).sort(([,a],[,b]) => b[0] - a[0] )
    );
    let result = Object.keys(sortable).sort((a, b) => a.localeCompare(b));
    Object.keys(sortable).forEach(key => console.log(`${key} -> Mileage: ${cars[key][0]} kms, Fuel in the tank: ${cars[key][1]} lt.`)) 
}
    

 solve([
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
  ); 

