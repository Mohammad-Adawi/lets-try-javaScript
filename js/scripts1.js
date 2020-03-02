// make a loop that goes from 1 to 100
for ( var num = 1; num < 101; num ++ ) {
  
    // check if the number is divisible by 3 or 5
    var checkForThree = num % 3;
    var checkForFive = num % 5;
    
    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
        console.log( "FizzBuzz");
    
    // if the number is divisible by 3, then print Fizz
    else if (checkForThree == 0)
      console.log( "Fizz");
    
    // if the number is divisible by 5, then print Buzz
    else if (checkForFive == 0)
      console.log( "Buzz");
    
    // otherwise just print the number
    else
      console.log( num );
  } 
  /* 
  The second version of the program has a straightforward solution and a clever one. 
  The simple way is to add another “branch” to precisely test the given condition. 
  For the clever method, build up a string containing the word or words to output, 
  and print either this word or the number if there is no word, potentially by 
  making elegant use of the || operator.
  */