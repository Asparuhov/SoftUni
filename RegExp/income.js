
function solve3(input){
    let string = input.slice(0,input.indexOf('end of shift'));
    let people = {};
    let total = 0;
    for (let set of string){
        let pattern = /%(?<name>[A-Z][a-z]+)%<(?<product>[A-Z][a-z]+)>([A-Za-z]+)?\|(?<quantity>\d+)\|([A-Za-z]+)?(?<price>\d+\.?\d+)\$/g;
        let matches = pattern.exec(set);
         let name = matches.groups.name;
        let product = matches.groups.product;
        let quantity = matches.groups.quantity;
        let price = matches.groups.price;
        people[name] = [product, (Number(quantity) * Number(price)).toFixed(2)];
        total += Number(quantity) * Number(price) 
        console.log(matches);
    }
    
    for (let key of Object.keys(people)) {
        console.log(`${key}: ${people[key][0]} - ${people[key][1]}`)
    }
    console.log('Total income: ' +  total.toFixed(2));
}