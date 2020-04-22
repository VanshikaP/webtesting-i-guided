module.exports = {
  add,
  multiply
};

function isNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num); 
}
function add(a = 0, b = 0) {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Both arguments should be a number');
  }
}

function multiply(a, b) {
  return a * b;
}

// low hanging fruit --> happy path (your basic assumptions)
// then check for invalid input
// then move on to edge cases
