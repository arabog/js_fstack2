const value1 = prompt("Kindly type in your first Number ");
const operation = prompt("Are you multiplying, dividing, etc ");
const value2 = prompt("Kindly type in your second Number ");

let mathSign = operation.toLowerCase();

let value;

switch(mathSign) {

    case 'x':
        value = value1 * value2;
        break;

    case '*' :
        value = value1 * value2;
        break;

    case '+':
        value = value1 + value2;
        break;

    case '-':
        value = value1 - value2;
        break;

    case '/':
        value = value1 / value2;
        break;

    case '%':
        value = value1 % value2;
        break;

    default:
        // return null;
}

alert("Final answer: " + value)