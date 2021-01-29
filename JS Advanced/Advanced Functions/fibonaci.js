function solve() {
    let num1 = 0;
    let num2 = 1;
    let next;
    fibonaci = () => {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        return num1;
    }
    return fibonaci;
}

const fib = solve();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());