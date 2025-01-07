const calculator = require(`./calculator`);

test("add1", () =>{
    expect(calculator.add(1,6)).toBe(7);
});
test("add2", () =>{
    expect(calculator.add(-465,100)).toBe(-365);
});
test("add3", () =>{
    expect(calculator.add(-465,-100)).toBe(-565);
});


test("subtract1", () =>{
    expect(calculator.subtract(1,6)).toBe(-5);
});
test("subtract2", () =>{
    expect(calculator.subtract(-465,100)).toBe(-565);
});
test("subtract3", () =>{
    expect(calculator.subtract(-465,-100)).toBe(-365);
});


test("divide1", () =>{
    expect(calculator.divide(100,10)).toBe(10);
});
test("divide1", () =>{
    expect(calculator.divide(100,0)).toBe("can't divide by 0");
});
test("divide1", () =>{
    expect(calculator.divide(100,-1)).toBe(-100);
});

test("multiply1", () =>{
    expect(calculator.multiply(30,5)).toBe(150);
});
test("multiply2", () =>{
    expect(calculator.multiply(-30,-5)).toBe(150);
});

test("multiply2", () =>{
    expect(calculator.multiply(-1,0)).toBe(0 || -0);
});