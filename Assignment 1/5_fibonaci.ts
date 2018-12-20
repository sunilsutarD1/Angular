function Fib(no1: number) {
    var t1: number = 0;
    var t2: number = 1;
    var nextTerm: number = no1;

    console.log("Fibonacci Series: ")

    for (var i = 0; t1 <= no1; ++i) {
        console.log(t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
}

console.log(Fib(21))
