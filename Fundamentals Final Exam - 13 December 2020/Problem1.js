function solve(input) {
    let currentString = input.shift();
    let commands = {
        Change(string, char, replacement) {
            let regex = new RegExp(char, 'g');
            return string.replace(regex,replacement);
        },
        Includes(string, substring) {
            string.includes(substring) ? console.log('True') : console.log('False');
            return string;
        },
        End(string, substring) {
            string.endsWith(substring) ? console.log('True') : console.log('False');
            return string;
        },
        Uppercase(string, substring) {
            return string.toUpperCase();
        },
        FindIndex(string, char) {
            console.log(string.indexOf(char));
            return string;
        },
        Cut(string, startIndex, length) {
            return  string.split('').splice(startIndex, length).join('');
        }
    }
    let line;
    while ((line = input.shift()) !== 'Done') {
        let [command, ...params] = line.split(' ');
        let oldStr = currentString;
        let newStr = commands[command](currentString, ...params);
        if (oldStr !== newStr) {
            currentString = newStr;
            console.log(currentString);
        }
    }
}
solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
  ]
);
  
