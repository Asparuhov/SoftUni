function solve(input) {
    let currentString = input.shift();
    let commands = {
        Add(string, index1, substring) {
            let index = Number(index1);
            if (index < string.length - 1) {
                let part1 = string.slice(0, index);
                let part2 = string.slice(index);
                return part1 + substring + part2;
            }
        },
        
        Remove(string, startIndex1, endIndex1) {
            let startIndex = Number(startIndex1);
            let endIndex = Number(endIndex1);
            if (startIndex < string.length - 1 && endIndex < string.length - 1) {
                let copy = string;
                let part1 = string.slice(0, startIndex);
                let part2 = string.slice(endIndex + 1);
                return part1 + part2;
            }
        },
        
        Switch(string, oldString, newString) {
            if (string.includes(oldString)) {
                return string.replace(oldString, newString);
            }
        }
    }
    let line;
    while ((line = input.shift()) !== 'Travel') {
        let [command, ...params] = line.split(':');
        let command1 = command.split(' ')[0];
        let oldString = currentString;
        let newStr = commands[command1](currentString, ...params);

        if (oldString !== newStr) {
            currentString = newStr;
            console.log(currentString);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${currentString}`);
}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);


