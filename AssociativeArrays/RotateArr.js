function rotate(arr, rotations){
    let newArr = arr;
    for(let i = 0; i < rotations; i ++){
        newArr.push(arr[0]);
        newArr.shift();

       
    }
    return newArr.join(' ');
}