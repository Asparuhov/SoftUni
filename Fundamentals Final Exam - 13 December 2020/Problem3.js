function solve(input) {
    let instagram = {};
    let line;

    while ((line = input.shift()) !== 'Log out') {
        let [command, name, num] = line.split(': ');
        let number = Number(num);
        if (command == 'New follower') {
            if(!instagram.hasOwnProperty(name))
            instagram[name] = {likes: 0, comments: 0};
        }
        if (command == 'Like') {
            if (!instagram.hasOwnProperty(name)) {
                instagram[name] = {likes: number, comments: 0};
                
            }
            else{instagram[name].likes += number;}
        }
         if (command == 'Comment') {
            if (!instagram.hasOwnProperty(name)) {
                instagram[name] = {likes: 0, comments: 1};
            }
            else{instagram[name].comments += 1}
        }
        if (command == 'Blocked') {
            if(instagram.hasOwnProperty(name)){
                delete instagram[name];
            }
            else {
                console.log(`${name} doesn't exist.`);
            }
        }
    }
    for (let set in instagram) {
        let sum = Object.values(instagram[set]).reduce((a, b) => a + b);
        instagram[set] = sum;
    }
    let sorted = Object.entries(instagram);
    sorted = sorted.sort((a, b) => instagram[b[0]] - instagram[a[0]] || a[0].localeCompare(b[0]));
    let result = Object.fromEntries(sorted);
    console.log(`${Object.keys(result).length} followers`);
    Object.keys(result).forEach(element => {console.log(`${element}: ${instagram[element]}`);})
}

solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
  ]);