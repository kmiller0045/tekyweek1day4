function writeHelloWorld ()  {
    console.log("Hello World");
}


//function writeHelloWorld(message);    //sets message as the holder of the parmeter passed to it
 // console.log(message);


//}

//writeMessage ("hey there, how are you?");

function sum(num1, num2)  {
    var result = num1 + num2;
    return result; 
}

var a = sum(10, 50);
console.log(a);

console.log(sum(2,2));
console.log(sum(5,7));
console.log(sum(100,-100));

//write a funtion that take one parameter
//in the function count from one to that parameter
//printing out t he number as you go
//functions are made to be reused
function count(to) {  //to is the variable name
  for (var i=0; i <= to; i++) {
      console.log(i);
  }
}
 
count (100);
count (4);
count (1000);

function hello (name)  {
    name = "Johnny";
    console.log("Here's "+ name);
}


var name = "Auri";  //calling global variable of name
  console.log(name);
  hello(name);
  console.log (name);





