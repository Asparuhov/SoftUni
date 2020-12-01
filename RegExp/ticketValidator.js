function solve4(input){
    
    let seperated = input[0].split(/\s*?,\s*?/).map(el => el.trim());
    for (let set of seperated){
        let pattern = /\w*?(?<leftSide>[$^@#]{6,10})[A-Za-z]*?(?<rightSide>\1)\w*?/g;
        let match = pattern.exec(set);
        
        if (set.length === 20)
        {
            if (match === null || match.groups.leftSide.length !== match.groups.rightSide.length || match.groups.rightSide !== match.groups.leftSide || match.groups.rightSide.length + match.groups.leftSide.length !== set.split(match.groups.leftSide[0]).length - 1){
                console.log(`ticket "${set}" - no match`);
            }
            else if (match && match.groups.leftSide.length === match.groups.rightSide.length && match.groups.rightSide === match.groups.leftSide ){
                match.groups.leftSide.length === 10
                ? console.log(`ticket "${set}" - ${match.groups.leftSide.length}${match.groups.leftSide[0]} Jackpot!`)
                : console.log(`ticket "${set}" - ${match.groups.leftSide.length}${match.groups.leftSide[0]}`);
                ;
            }
        }else{console.log(`invalid ticket`);}
    }

}
