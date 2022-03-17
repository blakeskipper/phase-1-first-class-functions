function receivesAFunction(cb){
    return cb()
  }
  
  
  function returnsANamedFunction(){
    return function test(){
    }
  }
  
  
  function returnsAnAnonymousFunction(){
    return function(){
    }
  }





// function receivesAFunction(){

// }


// function receivesAFunction (){

// }


// function returnsANamedFunction (){

// }

// function returnsAnAnonymousFunction (){

// }



// - The `receivesAFunction` function should:

//   - take a _callback function_ as an argument
//   - call the callback function
//   - it doesn't matter what this function returns, so long as it calls the
//     callback function

// - The `returnsANamedFunction` function should:

//   - take no arguments
//   - return a _named function_

// - The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_