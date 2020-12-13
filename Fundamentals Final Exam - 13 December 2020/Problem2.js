function solve(input) {
    let num = Number(input.shift());
    let regex = /(\*|@)(?<tag>[A-Z][a-z]{3,})\1: \[(?<t1>[A-Za-z])\]\|\[(?<t2>[A-Za-z])\]\|\[(?<t3>[A-Za-z])\]/g;
    for (let line of input) {
        let match = regex.exec(line);
        let match2 = line.match(/\[|\]/g);
        if (match && match2.length <= 6) {
            console.log(`${match.groups.tag}: ${match.groups.t1.charCodeAt(0)} ${match.groups.t2.charCodeAt(0)} ${match.groups.t3.charCodeAt(0)}`);
        }
        else{console.log(`Valid message not found!`);}
    }
}
solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
  ]
  );