const add =  require("./StringCalculator.js")

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});


test('returns the number itself if only one number is provided', () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

test('returns the sum of two numbers separated by a comma', () => {
    expect(add("1,2")).toBe(3);
  });

 
  
  