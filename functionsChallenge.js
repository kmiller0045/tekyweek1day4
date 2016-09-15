


// GOLD:

// Write a function that is passed a String, then returns the word backwards.(i.e. Bacon becomes nocab)

// BRONZE: 

// Write a function that returns your age, name it getAge().
function getAge ()  {
   return 51;
}
console.log(getAge());

//silver

function sum(num1, num2)  {
    var result = num1 + num2;
    return result; 
}

// SILVER:

// Write a function that is passed two integers as parameters, and returns their sum.


function add (a,b) {
    return a+b;
}
console.log (add(2,2));


//GOLD
function reverse(string)  {
    for (var i=string.length-1; i >= 0; i--)  {
        result += string [i];
    }
        return result;
}

console.log(reverse("Backwords"));
