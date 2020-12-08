function solve(inputArr){
    let coppiedArr = inputArr.map(Number)
    let peoplePerHour = coppiedArr[0] + coppiedArr[1] + coppiedArr[2];
    let peopleCount = coppiedArr[3];
    let res = peopleCount / peoplePerHour;
    let brake = ~~(res / 4) + 1;
    let result = (Math.ceil(res + brake));
    if(result < 5){
        result -= 1;
    }
    else if(result > 5 && result < 10){
        result -= 1;
    }
    console.log("Time needed: " + result + "h.")
}