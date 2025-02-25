// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
