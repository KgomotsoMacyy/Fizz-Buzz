//let fizzBuzz = function (n) {

//}

//fizzBuzz(15);

//if a number is divisible by 3, console log "Fizz"
//if a number is divisible by 5, console log "Buzz"
//if a number is divisible by 3 and 5, console log "FizzBuzz"

//[1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, 11, Fizz, 13, 14, FizzBuzz]

for(var i= 1; i <= 15; i++){
    var multipleOfThree = i % 3 ===0;
    var multipleOfFive = i % 5 ===0;
    if(multipleOfThree && multipleOfFive){
        console.log("FizzBuzz");
    }
    else if(multipleOfThree) {
        console.log("Fizz");
    }
    else if(multipleOfFive) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}