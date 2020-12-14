const solve = (input) =>{
    let number = input;
    while (number !== 0) {
        let oldStar = ` \n*`
        console.log(oldStar);
        let newStar = oldStar + '*';
        console.log(newStar);

        number--;
    }
}

solve(5);