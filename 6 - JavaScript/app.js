let temperature = 25;
if(temperature < 0){
    console.log("It's Freezing!");
}
else if(temperature > 0 && temperature >= 50){
    console.log("It's cool outside.");
}
else{
    console.log("It is warm outside");
}

//switch case

let day = " ";
switch(day){
    case "Monday":
        console.log("it is the starrt of the week");
        break;
    case "Tuesday":
        console.log("2nd day of the week");
        break;
    case "Wednesday":
        console.log("3rd day of the week");
        break;
    case "Thursday":
        console.log("4th day of the week");
        break;
    case "Friday":
        console.log("5thg day of the week");
        break;
    case "Saturday":
        console.log("6th day of the week");
        break;
    case "Sunday":
        console.log("7th day of the week");
        break;
    default:
        console.log("just a regular day");
}

//Looping Statement 
//repeating execution of code block
// For Loop
// 1: Variable Initialization
// 2: Conditional Expression
// 3: Increment/Decrement 
for(let i = 0;i<=3;i++){
    console.log("week",i);
}

// while loop
let count = 0;

while(count <= 3){
    console.log("While loop: ", count)
    count ++;
}

do{
    console.log("Do while:", count);
    count++;
}while(count <=3);

let num = Number(prompt("Enter a number: "))
for(let i = num; i < 10; i++){
    console.log("example",i);
}