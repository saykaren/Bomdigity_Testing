const assert = require("chai").assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require("../app");
const calculator = require('../calculator').calculator;

//Results 
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

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
  
  describe("addNumbers()", function(){
    it("addNumbers should be above 5", function(){
      // let results = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    });
  
    it("addNumbers should return type number", function(){
      // let result = addNumbers(5,5);
      assert.typeOf(addNumbersResult, "number");
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



describe("Calculator", function(){
  it("calculator should return sum", function(){
    assert.equal(calculator(), "11");
  });
  
  //below doesn't work as calculator is not defined 
  // it("calculator should return correct addition", function(){
  //   const equation = new Calculator(5, 6);
  //   result = equation.add();
  //   assert.equal(equation, "11");
  // });
});