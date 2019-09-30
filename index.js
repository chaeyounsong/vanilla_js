const calculator = {

    name : "Chaeyoun",

    plus : function(a,b){
        return a+b;
    },

    minus : function(a,b){
        return a-b;
    },

    mul : function(a,b){
        return a*b;
    },

    div : function(a,b){
        return a/b;
    },

    square : function(a,b){
        return a**b;
    }
      
}

const plusResult = calculator.plus(1,2);
const minusResult = calculator.minus(5,3);
const mulResult = calculator.mul(1,40);
const divResult = calculator.div(60,2);
const squareResult = calculator.square(2,2);

console.log(`Hello. ${calculator.name}! Lottery Number number is ${plusResult},${minusResult},${mulResult},${divResult},${squareResult}`);