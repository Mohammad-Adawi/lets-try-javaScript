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

    /** *SWITCH (CASE) Statements */

    var mathOperation = 'add';
    switch ( mathOperation ) {
         case "add":
             console.log(5 + 5);
             break;
         case "subtract":
            console.log(5 - 5);
            break; 
         case "divide":
            console.log(5 / 5);
              break; 
      case "multiply":
        console.log(5 * 5);
         break;

    default:
        console.log( 'No Operator provided.');
        break;
    }

    /**Lets manipulate things in the DOM! (Document Object Model) */

    var myParagraph = document.getElementById('my-paragraph');// Target and store element!
    console.log( myParagraph );

    myParagraph.textContent = 'Hello, World!';
    myParagraph.textContent += ' Also, hey how are ya\'?'; // \' is an escape it says "don't close my string, just store an actual apostraphe here!"

    var newParagraph = document.createElement( 'p' ); // Create a brand new element. IT won't show up yet, but we can start manipulating it before we inject it into our web page!

    newParagraph.textContent = "This element was created completely in JavaScript! wowie! Zounds! Gadzooks!";// populate your element
    document.body.appendChild( newParagraph );// add your element to the document body!