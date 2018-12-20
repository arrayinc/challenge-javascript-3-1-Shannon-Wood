"use strict";



function bottlesOfBeer() {
  let rawNumOfBottles = prompt('How many bottles are on the wall?');
  let numOfBottles = parseInt(rawNumOfBottles);
  let counter = numOfBottles;

    for(let i = numOfBottles; i >= 1; i--) {
      console.log(`${numOfBottles} bottles of beer on the wall.  ${numOfBottles} bottles of beer.  You take one down, pass it around.  ${numOfBottles-1} bottles of beer on the wall.`);
      numOfBottles -= 1;
    }
  console.log('No More Beer!  Booo Hooo!  Now ET is sad :(');
}
