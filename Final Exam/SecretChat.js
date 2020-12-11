function solve(input) {
    let currentString = input.shift();
    let commands = {
        InsertSpace(string,index) {
            let arr = string.split('');
            arr.splice(index, 0, ' ');
            let result = arr.join('')
            return result
        },
        Reverse(string, substring) {
            if (string.includes(substring)) {
                let index = string.indexOf(substring);
                let reverse = substring.split('').reverse().join('');
               return string.slice(0, index) + reverse + string.slice(index + substring.length);
            } else {console.log('error');}
            return string;
        },
        ChangeAll(string, substring, replacement) {
            let regex = new RegExp(substring, 'g');
            return string.replace(regex, replacement);
        }
    }
    let line;
    while ((line = input.shift()) !== 'Reveal') {
        let [command, ...params] = line.split(':|:');
        let oldStr = currentString;
        let newStr = commands[command](currentString, ...params);
        
        if (oldStr !== newStr) {
            currentString = newStr;
            console.log(currentString);
        }
    }
   console.log(`You have a new text message: ${currentString}`);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
 

