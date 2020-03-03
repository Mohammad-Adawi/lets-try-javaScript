/*day-2.js*/

var myNumber = '54.6'; //string :o
console.log( myNumber + 6 );

myNumber = parseInt( myNumber ); // Now it is an "int"!

console.log( myNumber + 6 ); //Addition occurs!

myNumber = parseInt( myNumber ); // Now it is a "float"!

console.log( myNumber + 6 ); //Addition occurs!

myNumber = Number ( myNumber ); // Now it is a 64 bit floating point numeric! The only ACTUAL type of number in JavaScript..!

console.log( myNumber + 6 ); //Addition occurs!

/** converting numbers to strings: */

myNumber = myNumber.toString(); // the to String method will turn into a string!

console.log( myNumber + 6 ); //Concatenation once more!

/** * watch out! Auto-conversion can be.. interseting! always check your bases: */

var myString = 'Hello world!'
console.log( 'Test 1:' );
console.log( 'TType is:' + ( typeof myString));
console.log( myString ); //'Hello world!'

myString = 5;
console.log( 'Test 2:' );
console.log( 'TType is:' + ( typeof myString));
console.log( myString );//5

myString = myString * 3;
console.log( 'Test 3:' );
console.log( 'TType is:' + ( typeof myString));
console.log( myString );//15

myString = 'Updated string.';
console.log( 'Test 4:' );
console.log( 'TType is:' + ( typeof myString));
console.log( myString );// Updated string.

myString = { "another" : "string test!?" };
    console.log( 'Test 5:' );
    console.log( 'TType is:' + ( typeof myString));
    console.log( myString );// { "another" : "string test!?" }
