var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(item) {
  kittens.push(item);
}

function destructivelyPrependKitten(item) {
  kittens.unshift(item);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}
