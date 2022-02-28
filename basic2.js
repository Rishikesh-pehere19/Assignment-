
// Assignment  write a javascript program to create calculator having below features.
// 1.Display a menu to user having below options:
// Menu ->
// + => addition,
// - => subs
// * => multiplication,
// / => Division,
// ** => power,
// % => Mod , 
// exit => quit the program

// 2. Accept two numbers from users.
// 3. It should perform any arithmatic operations as per users choice.
// [hint: use if-else/ switch , for loop while/do while];

function calculate(){


let num1 = Number(prompt("Enter  1st value "));
let num2 = Number(prompt("Enter 2nd Value"));
let signOperator ; 

signOperator = prompt("Select from Menu + => addition,- => substraction,* => multiplication,/ => Division, ** => power,% => Mod , exit => quit the program");
while(signOperator !="exit") {
    
    

    switch(signOperator) {
        
        case "+":
        console.log("add",num1+num2);
            break;
    
        case "-":
            console.log("sub",num1-num2);
            break;
    
        case "*":
             console.log("Mul",num1*num2);
            break;
    
        case "/":
            console.log("div",num1/num2);
            break;
            
        case "%":
                console.log("Mod",num1%num2);
                break;
    
        case "**":
                    console.log("Power",num1**num2);
                    break;
    
            default:
             console.log("Invalid Entry");
             break;
           
    }
    signOperator = prompt("Select from Menu + => addition,- => substraction,* => multiplication,/ => Division, ** => power,% => Mod , exit => quit the program");
    
}    
}