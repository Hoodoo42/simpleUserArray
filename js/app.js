
// two variable with their values set in arrays. One with strings, one with numbers
let userNames = [`Peter`, `Tony`, `Bruce`, `Thor`, `Steve`, `Natasha`, `Stephen`, `Scott`, `Clint`, `Sam`];
let userAges = [16, 48, 49, 1500, 101, 35, 42, 44, 48, 45];

// a variable set to 0 to gain access into the index of each variable
let counter = 0;
// using the variable to count through the above list of values, making sure it only loops throguh as many times as there are values.
// the if statememnt will set the condition of the loop printing as long as the age is greater than or equal to 18.
// the console log will print each indexed value from the variable userNames
while(counter < userNames.length){
    if(userAges[counter] >=18){
        console.log(userNames[counter]);
    }
    // counter++ makes the counter add one more to itself until conditions are met.
   counter++;
}
// the for loop doing the same as the while loop, counter variable will print each index it mathes to as long as age is under 18 this time. 
for(counter =0; counter < userNames.length; counter++ ){
    if(userAges[counter] <=18){
        console.log(userNames[counter]);
    }
}