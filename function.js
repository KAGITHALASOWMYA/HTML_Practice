function outerfunction(){
    let counter=0;
    function innerfunction(){
        counter++;
        return counter;
    }
    return innerfunction;
}
const incrementCounter = outerfunction();
console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());