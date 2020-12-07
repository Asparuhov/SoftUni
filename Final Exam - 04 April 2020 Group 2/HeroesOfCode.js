function solve(input) {
    let num = Number(input.shift());
    let heroes = {};
    let commands = {
         CastSpell(heroName, manaNeeded, spellName) {
            if (heroes[heroName][1] >= manaNeeded) {
                heroes[heroName][1] -= manaNeeded
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName][1]} MP!`);
            } else{console.log(`${heroName} does not have enough MP to cast ${spellName}!`)}
        },
        TakeDamage(heroName, damage, attacker) {
            heroes[heroName][0] -= damage;
            if (heroes[heroName][0] > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName][0]} HP left!`)
            }
            else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
            
        },
        Recharge(heroName, mana) {
            let startingMana = heroes[heroName][1];
            let diff;
            heroes[heroName][1] += mana;
            if (heroes[heroName][1] > 200) {
                heroes[heroName][1] = 200;
                diff = 200 - startingMana;
            }else if(heroes[heroName][1] <= 200){ diff = heroes[heroName][1] - startingMana}
            console.log(`${heroName} recharged for ${diff} MP!`);
        },
        Heal(heroName, health) {
            let startingHealth = heroes[heroName][0];
            let diff;
            heroes[heroName][0] += health;
            if (heroes[heroName][0] >= 100) {
                 heroes[heroName][0] = 100;
                 diff = 100 - startingHealth;
                }else if(heroes[heroName][0] <= 100){ diff = heroes[heroName][0] - startingHealth}
             console.log(`${heroName} healed for ${diff} HP!`);
        }
        
    };

    while (num != 0) {
        let line = input.shift();
        let [name, mana, hp] = line.split(' ');
        heroes[name] = [Number(mana), Number(hp)];
        num--;
    }
    let command;
    while ((command = input.shift()) !== 'End') {
        let set = [name, heroName, amount, spell] = command.split(' - ');
        amount = Number(amount);
        commands[name](heroName, amount, spell);
        
    }
    
   const sortable = Object.fromEntries(
        Object.entries(heroes).sort(([,a],[,b]) => b[0] - a[0] )
    );
    let result = Object.keys(sortable).sort((a, b) => a.localeCompare(b));
    Object.keys(sortable).forEach(key => console.log(`${key} \n  HP: ${heroes[key][0]}\n  MP: ${heroes[key][1]}`)) 
}
 solve([
    '4',
    'Adela 100 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]) 
  

