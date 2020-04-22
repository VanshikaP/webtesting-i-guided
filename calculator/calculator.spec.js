const { add, multiply } = require('./calculator.js');

// test away!
it('should run the tests', function() {
    expect(true).toBe(true);
});

describe('calculator.js', function() {
    describe('add()', function() {
        it('should return the sum of 2 nums passed as arguments', function() {
            // Arrange (setup env and inputs)

            // Act
            const sum = add(2,2);

            // Assert
            expect(sum).toBe(4);
        });

        it('should return the sum of 2 nums', function() {
            expect(add(2, 2)).toBe(4);
            expect(add(0, 2)).toBe(2);
            expect(add(1, 10)).toBe(11);
            expect(add(-2, 2)).toBe(0);
            expect(add(-2, -1)).toBe(-3);
        });

        it('should return 0 when called with no arguments', function() {
            expect(add()).toBe(0);
        });

        it('should return value of the argument when passing only 1 argument', function() {
            expect(add(1)).toBe(1);
            expect(add(0)).toBe(0);
            expect(add(2, undefined)).toBe(2);
        });

        it('should throw error passing an argument that is not a number', function() {
            expect(() => {
                add(2, {});
            }).toThrow();
            expect(() => {
                add(2, []);
            }).toThrow();
            expect(() => {
                add(2, NaN);
            }).toThrow();
            expect(() => {
                add(2, "two");
            }).toThrow();
            expect(() => {
                add(2, 'a');
            }).toThrow();
            expect(() => {
                add(2, null);
            }).toThrow();
        });
        it.todo('should return sum of a list of numbers separated by a comma');
    });

    describe('multiply()', function() {
        it('should return the product of 2 nums passed as arguments', function() {
            // Arrange (setup env and inputs)

            // Act
            const product = multiply(2,2);

            // Assert
            expect(product).toBe(4);
        });

        it('should return the product of 2 nums', function() {
            expect(multiply(2, 2)).toBe(4);
            expect(multiply(0, 2)).toBe(0);
            expect(multiply(1, 10)).toBe(10);
            expect(multiply(-2, 2)).toBe(-4);
            expect(multiply(-2, -1)).toBe(2);
        });
    });
});

// Given 2 nums
// When the add function is invoked
// Then it should return the sum of 2 numbers