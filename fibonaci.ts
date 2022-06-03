function fibonacci(n:number,a:number,b:number):number{
    let sum = 1;
    for (let i = 0; i < n; i++) {
        if (n == 1 || n == 2) {
            return 1;
        }
        sum = a + b;
        a = b;
        b = sum;
        console.log(sum)
    }
}

console.log(fibonacci(10,0,1))
