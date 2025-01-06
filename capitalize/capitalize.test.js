const capitalize = require('./capitalize');

test('Capitalize', () => {
  expect(capitalize("car")).toBe("Car");
});

test('Capitalize all Big', () => {
  expect(capitalize("CAR")).toBe("Car");
});
test('Capitalize negative', () => {
  expect(capitalize("cAR")).toBe("Car");
});