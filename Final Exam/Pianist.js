function solve(input){
    composers = {};
    let int = input.shift();
    let commands= {
    Add(piece, composer, key){
        if (!composer.hasOwnProperty(composer)){
            composers[composer] = { [key]: [] };
            }
        else{composers[composers][key].key.push(piece)}
        },
    Remove(piece){
        for (let line in composers){
        
        }
    }
    }
    
    let lines;
    while ((lines = input.shift()) !== 'Stop'){
        if (lines.indexOf('Add') > -1 || lines.indexOf('Remove') > -1 || lines.indexOf('ChangeKey') > -1){
            let [name, piece, composer, note] = lines.split('|');
            commands[name](piece, composer, note);
        }
        else{
            let [piece, composer, note] = lines.split('|');
            composers[composer] = {[note]: new Array(piece)}
        }
    }

}
/* solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
  ]);
 */



key = {
    'krisko': { 'opala': ['qsha', 'trifon'] }
}

for (let o in key)
{   
    let ops = Object.keys(key[o]);
    console.log(Object.keys(key[o]));
}