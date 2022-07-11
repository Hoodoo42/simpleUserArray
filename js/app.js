let userNames = [`Peter`, `Tony`, `Bruce`, `Thor`, `Steve`, `Natasha`, `Stephen`, `Scott`, `Clint`, `Sam`];
let userAges = [16, 48, 49, 1500, 101, 35, 42, 44, 48, 45];

let counter = 0;

while(counter < userNames.length){
    if(userAges[counter] >=18){
        console.log(userNames[counter]);
    }
   counter++;
}

for(counter =0; counter < userNames.length; counter++ ){
    if(userAges[counter] <=18){
        console.log(userNames[counter]);
    }
}