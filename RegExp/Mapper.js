function solve(string){
    let match;
    let destinations = [];
    let points = 0;
    while ((match = /(=|\/)(?<location>[A-Z][A-Za-z]{3,})\1/g.exec(string)) !== null){
        destinations.push(match.groups.location);
        points += match.groups.location.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}\nTravel Points: ${points}`);
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=v');