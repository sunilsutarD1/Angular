function Fib(no1) {
    var t1 = 0;
    var t2 = 1;
    var nextTerm = no1;
    console.log("Fibonacci Series: ");
    for (var i = 0; t1 <= no1; ++i) {
        console.log(t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
}
console.log(Fib(21));
