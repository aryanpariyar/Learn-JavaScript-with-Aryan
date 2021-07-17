// Switch Statement:
// Evaluates an Expression, matching the expression's value to a case claues,
// and execuate statements associated with that case.



// Break:
// Terminates the current loop, swithch or lable
// Statements and Transfer progaram control
// To the statement following the terminated statement.




var l = 5, b = 4, r = 3;
const Pi = 1.314;
Area = "Circle";

switch(Area)
{
    case "Rectangle" : 
         console.log("The area of " + Area + " is: " + (l * b));
         break;
    case "Circle" : 
        console.log("The area of " + Area + " is: " + (Pi * r**2));
        break;
    case "Square" :
        console.log("The area of " + Area + " is: " + (l **2));
        break;
    default :
        console.log("Please enter valid data.");      
}