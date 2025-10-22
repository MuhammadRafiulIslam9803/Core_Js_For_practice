const prompt = require("prompt-sync")();

let score = parseFloat(prompt("Enter your score (0-100): "));

let grade; 

if (80 <= score && 100 >= score){
   grade = "A+"
}
else if ( 70 <= score && 80 >= score){
    grade = "A"
}
else if ( 60 <= score && 70 >= score){
    grade = "A-"
}
else if ( 50 <= score && 60 >= score){
    grade = "B"
}
else if ( 40 <= score && 50 >= score){
    grade = "C"
}
else if ( 33 <= score && 40 >= score){
    grade = "D"
}
else if ( 0 <= score && 33 >= score){
    grade = "F"
}
else {
    grade = "Invalid Score"
} 
console.log("Your Grade is : " + grade);
