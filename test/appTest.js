const assert = require("chai").assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require("../app");
const calculatorGenerator = require('../calculator');

//Results 
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);
// calculatorAdd = calculator.calculatorAdd();

describe("App", function(){
  describe('sayHello()', function() {
    it("app should return hello", function(){
      // let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });
  
    it("sayHello should return type string", function(){
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, "string");
    });
  
  });
});

describe('Karens Calculator', function(){

  describe("Addition", () => {
    let result = calculatorGenerator.calculatorAdd();
    it('It should use calculator class to add numbers together', ()=>{
      assert.equal(result, 11);
    });
  });

  describe("Subtraction", function(){
    let result = calculatorGenerator.calculatorSubtract();
    it("It should use the calculator class to subtract numbers together", function(){
      assert.equal(result, -1);
    });
  });

  describe("Multiply", function(){
    let result = calculatorGenerator.calculatorMultiply();
    it("It should use the calculator class to multiply numbers together", function(){
      assert.equal(result, 30);
    });
  });

  describe("Divide", function(){
    let result = calculatorGenerator.calculatorDivide();
    it("It should use the calculator class to divide numbers together", function(){
      assert.equal(result, 5/6);
    });
  });  
});

describe('Array', function(){
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Math', function(){
  const result = 3*3;
  it('it should return the result of multiplication', function(){
    assert.equal(result, "9");
  });
  const secondResult = (3-4)*8;
  it('it should be the correct results of minus then multiply', function(){
    assert.equal(secondResult, "-8");
  });
});

