const caesar = require('./caesarCipher');

test("caesarCipher shift 1", () => {
    expect(caesar("abc", 1 )).toBe("bcd");
})
test("caesarCipher shift 3", () => {
    expect(caesar("Hello World", 5 )).toBe("Mjqqt Btwqi");
})
test("caesarCipher shift 3", () => {
    expect(caesar("Hello15 32+!World", 5 )).toBe("Mjqqt15 32+!Btwqi");
})