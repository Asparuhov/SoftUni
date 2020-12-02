function solve(input)
{   
    let inputString = input.shift();
    let commands = {
         Move(string, index){
            return string.substring(Number(index)).concat(string.substring(0, Number(index)));
        },
        
         Insert(string, index, value){
            return string.substring(0, Number(index)) + value + string.substring(Number(index));
            
        },
        
         ChangeAll(string, substring, replacement){
            let array = string.split('');
            for (let i = 0; i < array.length; i++) {
                if (array[i] == substring)
                {
                    array.splice(i, 1, replacement)
                }
            }
            return array.join('');
        }
        
    }
    let set;
    while ((set = input.shift()) !== 'Decode'){
        let [name, ...params] = set.split('|');
        inputString  =  commands[name](inputString, ...params);
    }
    console.log(`The decrypted message is: ${inputString}`)
}

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);



