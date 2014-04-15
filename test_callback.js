// You can pass a function as an argument into other functions.
// The function being passed as the argument is often referred to as "callback function".

// To execute:
//
//   $ node test_callback.js
//   calling callback_me with: 10
//   11
//   { item: 1, anotheritem: 2 }

var callback_me = function(a)
{
  console.log("calling callback_me with: " + a)
  return(a + 1) 
}

var caller = function(cb, b)
{
  num = cb(b)
  return(num)
}


mynum = caller(callback_me, 10) 
console.log(mynum)

var i_am_a_func_returning_func = function(num)
{
  var local_obj = { 'item' : num };
  var retfunc = function(key, value)
  {
    if(key != undefined)
      local_obj[key] = value;
    return(local_obj);
  } 
  return(retfunc);
}

func = i_am_a_func_returning_func(1);
someobj = func('anotheritem',2); 
console.log(someobj);
