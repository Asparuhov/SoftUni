function solve3(input){
    let string = input.slice(0,input.indexOf('end of shift'));
    let orders = {}
    let customerPattern = /%[A-Z][a-z]+%/g;
    let productPattern = /<[A-Z][a-z]+>/g;
    let countPattern = /\|\d+\|/g;
    let pricePattern = /\d*\.?\d*\$/g;

    for (let el of string){
        let customerMatch;
        let getProduct;
        let getCount;
        let getPrice;
        if (el.match(pricePattern) === null){
            continue;
        }
        else { getPrice = el.match(pricePattern).join('').split('$'); }
        if (el.match(countPattern) === null){
            continue;
        }
        else { getCount = el.match(countPattern).join('').split('|'); }
        
        if (el.match(customerPattern) === null){
            continue;
        }
        else { customerMatch = el.match(customerPattern).join('').split('%'); }
        if (el.match(productPattern) === null){
            continue;
        }
        else { getProduct = el.match(productPattern).join('').split('<');}
        let customer = customerMatch[1];
        let product = getProduct.join('').split('>')[0];
        let count = Number(getCount[1]);
        let price = Number(getPrice[0]);
        
        orders[customer] = [product, count * price];
    }
    let totalIncome = 0;
    for (let set in orders){
        console.log(`${set}: ${orders[set][0]} - ${orders[set][1].toFixed(2)}`);
        totalIncome += Number(orders[set][1]);
       
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)

}