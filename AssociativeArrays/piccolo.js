function solve(input){
    let parking = {};
    let isIn = false;
    for (let command of input){
        let [state, number] = command.split(', ');
        parking[number] = state;
        if (state == 'OUT')
        {
            delete parking[number];
        }
        else if (state == 'IN')
        {
            parking[number] = state;
        }
    }
    if (Object.keys(parking).length <= 0)
    {
        console.log(`Parking Lot is Empty`);
    }
    Object.keys(parking).sort().forEach(el => console.log(el));
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU',
'OUT, CA2866HI'
])