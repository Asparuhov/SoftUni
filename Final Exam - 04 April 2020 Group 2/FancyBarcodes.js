function solve(input) {
    let num = input.shift();
    
    for (let line of input) {
        let regex = /(@#+)(?<name>([A-Z])+([A-Za-z0-9]+)?([A-Z]))\1/g;
        let numRegex = /\d/g;
        let match = regex.exec(line);
        if (match) {
            let count = match.groups.name.match(numRegex);
            if (count == null) {
                console.log(`Product group: 00`);
            } else console.log(`Product group: ${count.join('')}`)
        } else console.log(`Invalid barcode`);
    }
    
}

solve([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#'
]);



