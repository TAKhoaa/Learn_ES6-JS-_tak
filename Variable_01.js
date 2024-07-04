/**
 * * Variable in ECMAScript (ES6) - Un-type variable
 */


// variable --> un-type variable (biến không kiểu)
a = 1; 
console.log("a = " , a);

a = "Hello, world!";
console.log("a = " , a);

// define variables (hằng số)
const MAX = 100;
console.log("MAX = " , MAX);

// MAX = 50; Lỗi không thể gán dữ liệu vì giá trị biến không đổi

// define global variables (biến toàn cục)
var b = 88;
console.log("Global variable: b = " , b);

function showGlobalVariable(){
    console.log("Global variable in function: b = " , b);
    b = 100;
    console.log("Upage variable in function: b = " , b);
}

showGlobalVariable();

console.log("Global variable outside function: b = " , b); // var là biến toàn cục nên sẽ nhận được dữ liệu sau khi đã khai báo trong function

// define local variables (biến cục bộ)
let c = 50;
console.log("local variables: c = " , c);

function updateLocalVariable(){
    c = 200;
    console.log("Local variable inside function: c = " , c);
    let d = 77;
    console.log("Local variable of function: d = " , d);
}
updateLocalVariable();
console.log("local variables outside function: c = " , c);
// console.log("local vaariabe outside function: d = " , d);  //Error because d is not define outside function (Lỗi vì d không xác định được hàm bên ngoài)

// Const variable is same Let variable -> constant is local variable (const tương tự như let -> const là biến cục bộ)

function showConstVariable(){
    const MAX_VALUE = 100;
    console.log("Constant variable inside function: MAX_VALUE = " , MAX_VALUE);
}

showConstVariable();
// console.log("Constant variable outside function: MAX_VALUE = " , MAX_VALUE); //Lỗi vì const không xác định được hàm bên ngoài