// Generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage: generate a random number between 1 and 100
const randomNum = getRandomInt(1, 100);
console.log(randomNum);