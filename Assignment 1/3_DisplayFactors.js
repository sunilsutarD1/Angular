function DisplayFactors(no1) {
    for (var i = 1; i <= no1; i++) {
        if ((no1 % i) == 0) {
            console.log(i + "   ");
        }
    }
}
DisplayFactors(20);
