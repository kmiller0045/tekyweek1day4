// while 
var count = 1;

while(count <= 5) {
    console.log(count);
    count ++;
}

// for each

var names = ["Bob", "Steve", "Janine", "Linus"];
console.log(names.length);
console.log("Supercalifragilisticexpiolidocious".length);

var longWord = "Supercalifragilisticexpiolidocious";
console.log(longWord.length);
console.log(names[2]);



for(var n in names) {
    console.log(names[n]);
}


for (var n in names) {
    var name = names[n];
    if (name[0] == "B" || name[0] == "b") {
        console.log("Name starts with B: " + names[n]);
    }
}


//same as code above
for (var i=0, i < names.legth; i++)
// for 
console.log("/n/n/n/n");
for (var i=0; i < 100; i+=10)   {   // i is for iterator  left side is setup,  middle is checked during the code running,  i++ works after the code runs
    // do stuff
    console.log(i);
}


// do while
var enteredCorrectAnswer = false;
do{
    //ask for guess
      enteredCorrectAnswer = true; //block to be executed.
}
      While(!enteredCorrectAnswer);  //runs at least once
