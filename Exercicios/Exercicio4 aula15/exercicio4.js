function calcMat(operator,n1,n2) {

    if(operator== "+") {
        total = n1 + n2;
        return total;
    }
    if(operator== "-") {
        total = n1 - n2;
        return total;
    }
    if(operator== "*") {
        total = n1*n2;
        return total;
    }
    if(operator== "/") {
        total = n1/n2;
        return total;
    }



}

const result = calcMat("+",2,3);
console.log(result);
