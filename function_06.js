/**
 * * Define function ES6
 */

//? Traditional function
function sum(a,b){
    return a +b ;
}

let a= 10;
let b = "20";
let result = sum(a,b);
console.log(`${a} + ${b} = ${result}`);

//! pass by value -> default always pass value to function (truyền theo giá trị) => mặc định truyền giá trị cho hàm
function doubleValue(value){
    value = value * 2;
    console.log(`Inside fuction - value = ${value}`);
}

let value = 10;
console.log(`Init value = ${value}`);
doubleValue(value);
console.log(`Outside function - value = ${value}`);

//! pass by reference -> pass by OBJECT (truyền theo tham chiếu => truyền theo đối tượng)
function increaseValue(obj){
    obj.value = obj.value + 10;
    console.log("Inside function : ", obj);
}

let obj = {value : 20};
console.log('Init Obj : ', obj);
increaseValue(obj);
console.log('Outside obj: ',obj);

//! Default parameter (tham số mặc định)
function decreaseValue(value = 10){
    value -= 2;
    return value;
}

let val = decreaseValue();
console.log(val);
val = decreaseValue(100);
console.log(val);

//? Anonymous function (chức năng ẩn danh)
const showMessage = function(message) {
    console.log('Message is :', message);
};

showMessage("Hello");

//? Arrow function (Mũi tên)
console.log("--- Arrow function ---");
const sayHello = () => console.log("Hello World");
sayHello();

const triple = a => a * 3;
console.log('10 * 3 = ', triple(10));

const power = (a,n) => {
    let result = 1 ;
    for(let i =0 ; i < n ; i++)
        result *= a;
        return result;
    };

   
    console.log('2^3 =',power(2,3));

    console.log("--- Special case of Arrow function ---");

    let arr =[1,2,3,4,5];
    arr.forEach(item => console.log(item));//forEach là một phương thức của mảng trong JavaScript, nó dùng để thực thi một hàm cho mỗi phần tử của mảng.
    

    const arrow_sum = (a, b=20, c=30) => a+b+c;
    console.log(arrow_sum(3,2)); /*a = 3, b = 2, c = 30 (mặc định).
                                    Kết quả: 3 + 2 + 30 = 35.
                                    In ra: 35.*/
    console.log(arrow_sum(3,2,1));/*a = 3, b = 2, c = 1.
                                    Kết quả: 3 + 2 + 1 = 6.
                                    In ra: 6.*/
    console.log(arrow_sum(3)); /*a = 3, b = 20 (mặc định), c = 30 (mặc định).
                                Kết quả: 3 + 20 + 30 = 53.
                                In ra: 53.*/
