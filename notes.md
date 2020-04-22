
# Objectives - 

- setup testing from scratch
- write unit tests
- Test Driven Development

## Testing

AAA == Arrange -> Act -> Assert

function(args) => return value; To test it we invoke a function

Component(props) => return UI; To test it we render a component

Endpoint(data) => return HTTP response; To test it we make a request

Test suite - a group of tests in same file
-- make sure your tests can fail

## User Stories

As a ... role -> analyst
I want ... feature -> a calculator that can add 2 nums
So that ... value -> i can write sales reports

## Scenarios

```txt
Given ...
  and ...
  and ...
When ...
  and ...
  and ...
Then ...
  and ...
```

Given 2 nums
When the add function is invoked
Then it should return the sum of 2 numbers

## Test Driven Development/Design - TDD

Red > Green > Refactor ----> Commit

Red: write a failing test
Green: write enough implementation code to make the test pass
Refactor: rewrite the code without changing the functionality. Reformatting the test and implementation code without breaking the tests.