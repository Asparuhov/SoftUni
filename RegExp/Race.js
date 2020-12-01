function solve2(input)
{
    let participants = input.shift().split(', ');
    let pattern1 = /[A-Za-z]+/g;
    let pattern2 = /\d+/g;
    let set = input.slice(0, input.indexOf('end of race'));
    let participants1 = {};
    for (let el of set){
        let string = el;
        let matches = string.match(pattern1).join('');
        
        let kilometres = string.match(pattern2).join('').split('').map(Number).reduce((a,b) => a+b, 0);
        participants1[matches] = participants1[matches] ? participants1[matches] += kilometres : participants1[matches] = kilometres;
    }
    let diff = Object.keys(participants1).filter(x => !participants.includes(x));
    diff.forEach(el => delete participants1[el])
    const sortable = Object.fromEntries(Object.entries(participants1).sort(([, a], [, b]) => b - a));
    let keys = Object.keys(sortable)
    for (let i = 0; i < keys.length; i++){
        if (i == 0){
            console.log(`1st place: ${keys[i]}`)
        } else if (i == 1){
            console.log(`2nd place: ${keys[i]}`)
        }
        else if (i == 2){
            console.log(`3rd place: ${keys[i]}`)
        } else { break;}

    }
}