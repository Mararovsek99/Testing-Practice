const reverse = require('./reverse');


test('reverse 1', () => {
expect(reverse("abc")).toBe("cba");
});

test('reverse 2', () => {
expect(reverse("Kača37*")).toBe("*73ačaK");
});

test('reverse 2', () => {
expect(reverse()).toBe("");
});
