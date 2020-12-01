
function gladiator(input)
{
    let gladiators = {};
    for (let set of input){
       if (set.indexOf(' -> ') > -1){
           let [name, tehnika, skill] = set.split(' -> ');
           if (gladiators[name]?.[tehnika] > skill) return;
           gladiators[name] = { ...gladiators[name], [tehnika]: skill };
       }
       else if (set.indexOf(' vs ') > -1){
           let [gladiator1, gladiator2] = set.split(' vs ');
           if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)){
               for (let element in gladiators[gladiator1])
               {
                   for (let element2 in gladiators[gladiator2])
                   {
                       if (element === element2)
                       {
                           if (gladiators[gladiator1][element] > gladiators[gladiator2][element])
                           {
                               delete gladiators[gladiator2]
                           } else{delete gladiators[gladiator1]}
                       }
                       
                   }
               }
           } else { continue;}
        }
       else if (set.indexOf('Ave Cesar') > -1){
           break;
        }
   };
    let result = Object.entries(gladiators).map(([name, glad]) => { 
    let abilities = Object.entries(glad);
    return { name, Total: abilities.reduce((acc, [k,v]) => acc + Number(v) , 0), abilities: abilities.sort(([k1,v1], [k2,v2]) => v2 - v1) };});
    result.sort((a,b) => b.Total - a.Total);
    
    result.forEach(res => { 
        console.log(`${res.name}: ${res.Total} skill`)
        
    res.abilities.forEach(([k,v]) => console.log(` - ${k} <!>`,v));
})
}










