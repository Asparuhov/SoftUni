function solve(input)
{
    let currentString = input.shift();
    const commands = {
        TakeOdd(string)
        {
            let newString = '';
            let arr = string.split('');
            for (let i = 0; i < arr.length; i++){
                if (i % 2 !== 0){
                    newString += arr[i]; 
                }
                
            }
            currentString = newString;
            console.log(currentString);
        },
        Cut(string, index, length){
            let arr = string.split('');
            arr.splice(Number(index), Number(length));
            currentString = arr.join('')
            console.log(currentString);
        },
        Substitute(string, str1, str2){
            
            if (string.indexOf(str1) > -1){ 
            let regex = new RegExp(str1, 'g');
            currentString = string.replace(regex, str2)
            console.log(currentString)
            } else{console.log(`Nothing to replace!`);}
        }
    }
    let line;
    while ((line = input.shift()) !== 'Done'){
        let [name, ...params] = line.split(' ');
        commands[name](currentString, ...params)
    }
    console.log(`Your password is: ${currentString}`);
}

solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ]
  
  );



