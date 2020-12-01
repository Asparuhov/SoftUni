function solve(input)
{   
    let pattern = />>[A-Za-z]+<<[\.0-9]+\!\d/g;
    
    let string = input.join(' ');
    let items = [];
    let totalCost = 0;
    let totalQuantity
    let match = pattern.exec(string);
    
    while (match != null ){
        let product = match[0].match(/[A-Za-z]+/g)[0];
        let getPrice = match[0].match(/<[\.0-9]+/g)[0].split('<').pop();
        let getQuantity = match[0].match(/!\d+/g)[0].split('!').pop();
        let quantity = Number(getQuantity);
        let price = Number(getPrice);
        items.push(product);
        totalCost += price*quantity;

        match = pattern.exec(string);
    }
    console.log(`Bought furniture:`);
    items.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
     
    
}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>>PC<<150!4',
    '>>CHAIR<<3000!15',
    '>Invalid<<!5',
    'Purchase'])
