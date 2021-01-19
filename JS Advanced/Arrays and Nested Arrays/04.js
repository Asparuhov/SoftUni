function solve(arr, rotations) {
  let n = 0;
  let res = arr;
  while (n < rotations) {
    const last = res.pop();
    res.unshift(last)
    n++;
  }
  return res.join(' ');
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);
