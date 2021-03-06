module.exports = {
  calculatorAdd: function(){
    //return equation.add();
    return equation.add();
  },
  calculatorSubtract: function(){
    return equation.subtract();
  },

  calculatorMultiply: function(){
    return equation.multiply();
  },

  calculatorDivide: function(){
    return equation.divide();
  },
}


class Calculator{
  constructor (num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  }

  add(){
    return this.num1 + this.num2;
  }

  subtract(){
    return this.num1 - this.num2;
  }

  multiply(){
    return this.num1*this.num2;
  }

  divide(){
    return (this.num1/ this.num2);
  }
}

const equation = new Calculator(5, 6);

console.log(equation.add());
console.log(equation.subtract());
console.log(equation.multiply());
console.log(equation.divide());
