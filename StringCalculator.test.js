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

test('returns the sum of multiple comma-separated numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("1,2,3,4")).toBe(10);
  });

test('handles newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });
  
test('supports different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3); 
    expect(add("//|\n1|2|3")).toBe(6);
  });

  
  
  