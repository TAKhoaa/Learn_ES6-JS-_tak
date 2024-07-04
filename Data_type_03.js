/**
 * * Data type in JavaScript / ECMAScript (kiểu dữ liệu)
 */

console.clear();

//? Datatype: number
let a = 4; // a là number

let b = 2.5;  // b  là Float

let c = "Hello"; //  c là String

let d = {
    id: 1,
    name: "Product 1"
}; // d là Object (Object JSON)

let e = [1, 2, 3, 4, 5]; // e là Array

let f = true; // f là Boolean

let w = null; // w là rỗng

let z = undefined; // z có memory nhưng không có giá trị

//? Check datatype of Variable (kiểm tra kiểu dữ liệu của biến)

// check is Number (kiểm tra là số)
console.log(a, "is a number", Number.isFinite(a));
console.log(b, "is a number", Number.isFinite(b));
console.log(c, "is a number", Number.isFinite(c));
console.log(d, "is a number", Number.isFinite(d));
console.log(e, "is a number", Number.isFinite(e));
console.log(f, "is a number", Number.isFinite(f));

console.log(b, "is a number", !isNaN(b));
console.log(e, "is a number", !isNaN(e));
console.log("------------------------------------");

// check is not a number (kiểm tra không phải là số)
console.log(a, "is not a number", !isNaN(a));
console.log(c, " is not a number ", isNaN(c));
console.log("------------------------------------");

// check is Internet number (Kiểm tra số nguyên)
console.log(a, " is Integer ", Number.isInteger(a));
console.log(b, " is Integer ", Number.isInteger(b));
console.log(c, " is Integer ", Number.isInteger(c));
console.log("------------------------------------");

// check is Float number (kiểm tra số thập phân)
console.log(a, " is Float ", Number.isFinite(a) && !Number.isInteger(a));
console.log(b, " is Float ", Number.isFinite(b) && !Number.isInteger(b));
console.log(c, " is Float ", Number.isFinite(c) && !Number.isInteger(c));
console.log("------------------------------------");

// Check MAX and MIN value (kiểm tra max min của dữ liệu)
console.log("MAX = ", Number.MAX_VALUE);
console.log("MAX SAFE = ", Number.MAX_SAFE_INTEGER)
console.log("MIN = ", Number.MIN_VALUE);
console.log("MIN SAFE = ", Number.MIN_SAFE_INTEGER)
console.log("------------------------------------");

//? Fix value of Float (Giá trị cố định cũa Float) (lấy số thập phân)
console.log(b, "is Fixed", b.toFixed(5)); //(lấy 5 số thập phân)
let g = 654321.23456789;
console.log(g, "is Fixed", g.toFixed(5));
console.log(g, " is precision ", g.toPrecision(5)); //(Lấy độ chính xác của số thập phân)
console.log("------------------------------------");

//? Convert number to string (chuyển số sang string "")
let h = a.toString();
console.log(h, "is string", Number.isFinite(h)); // h là chuỗi nên sẽ false
console.log(h, " is string ", isNaN(h));        // không thể sử dụng isNaN() để check string
console.log("------------------------------------");

//? Convert string to number
let i = "8";
let j = "9.5";
console.log(i, " + ", j, " = ", i + j); // vì là chuỗi nên khi 2 chuỗi cộng nhau sẽ là 89.5
console.log(i, " + ", j, " = ", parseInt(i) + parseInt(j)); // parseInt sẽ chuyển từ chuỗi sang số và chỉ lấy số nguyên
console.log(i, " + ", j, " = ", parseInt(i) + parseFloat(j)); // parseFloat chuyển từ chuỗi sang số và lấy cả số thập phân
console.log("------------------------------------");

//! Condition in ES6 (điều kiện trong es6)
let k = 8;
let l = "8";
console.log(k, "==", l, "is", k == 1);   // chỉ có giá trị bằng nhau nhưng kiểu dự liệu khác nhau (không nên sử dụng ==) 
console.log(k, " === ", l, " is ", k === l);    // strict equality -> equal value and datatype (đây là đẳng thức nghiêm ngặt)
console.log("------------------------------------");

//! Compare strict use in ES6 (so sánh sử dung đẳng thức nghiêm ngặt)
x = undefined; y = undefined;
console.log(x, "&", y, "\t== ", x == y , "\t", "===", x === y);

x = null; y = null;
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = true; y = true;
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = false; y = false;
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = true; y = false;
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = 'food'; y = 'food';
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = 0; y = 0;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = 0; y = false;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = true; y = 1;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = ""; y = false;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = ""; y = 0;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = "0"; y = 0;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = "0"; y = false;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = new String("food"); y = "food";
console.log(x, "\t&", y, "\t== ", x == y , "\t", "===", x === y);

x = null; y = undefined;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

let arrA = [1, 2, 3];
let arrB = [1, 2, 3];

let objC = { x: 1, y: 2};
let objD = { x: 1, y: 2};

let objE = "text";
let objF = "te" + "xt";

console.log(arrA, " == ", arrB, " is ", arrA == arrB);
console.log(arrA, " === ", arrB, " is ", arrA === arrB);

console.log(objC, " == ", objD, " is ", objC == objD);
console.log(objC, " === ", objD, " is ", objC === objD);

console.log(objE, " == ", objF, " is ", objE == objF);
console.log(objE, " === ", objF, " is ", objF === objF);