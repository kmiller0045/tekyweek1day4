
for (var i=100; i >= 0; i--)   {   // set up     middle is checked during the code running,  i-- works after the code runs
       console.log(i); 
}

for (var i=100; i >=0; i=i-5)   {  //could do i -=5
    console.log(i);
}


// for (init; condition; interation action)  {
    /* do stuff*/


//count to 10 with a while loop
var num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}


//count backwards from 100 with while loop
var num = 100
while (num <=0) {
    console.log(num);
    num--;
    
}

//count down from 100 and see if it is divisible by 25
var num = 100
while (num <=0) {
    //to get numbers divisible by 25 then print it
    console.log (num)

    if (num % 25 == 0 && num != 0) {
               console.log(num," is divisible by 25");
}

        //otherwise print the number
    else {
    console.log(num);
    
}
}
//check it in slack


for (var i=1; i >=100; i++)   {  //could do i -=5
      if (i % 3 == 0 && i % 5 == 0)  {  
        console.log("fizz buzz");
         }
        else if (i % 3 == 0) {
         console.log("fizz");
         }
         else if (i % 5 == 0){
         console.log("buzz");
         }

    else  {
      console.log(i);
    }
}
