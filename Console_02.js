/**
 * * Console object in ECMAScript (ES6)
 */

/// clear all message in console (xóa trong bảng console)
console.clear();

/// print variable or message to console (in biến hoặc mess đến bảng console)
let n = "100";
console.log(n);
console.log("n =", n);

/// print object (JSON object) to console (in đối tượng (đối tượng JSON) đến bảng console)
let obj = {
    id : 1,
    name : "iPhone 12 Pro Max",
    price : 1000
};
console.log(obj);

/// print array object (JSON object) to console (in mảng đối tượng)
let arrObj = [
    1, 
    "Hello world",
    {
        id : 1,
        name : "iPad Pro M1",
        price : 1000
    },
    4.25,
    5
];
console.log(arrObj);

/// print object with format table (in đối tượng với bảng định dạng)
let objects = [{
    id : 1, 
    name : "Product 1",
    price : 1000
},
{
    id : 2,
    name : "Product 2",
    price : 2000
},
{
    id : 3,
    name : "Product 3",
    price : 3000
}
];

console.log(objects);
console.table(objects);

/// format color for log on terminal (định dạng màu cho terminal)
let colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    crimson: "\x1b[38m" // Scarlet (đỏ tươi)
},

bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    crimson: "\x1b[48m",
    }
};

console.log(colors.bg.blue, colors.bg.white, "Hello World", colors.reset );
console.log(colors.bg.green, colors.bg.white, "Khoa", colors.bg.green, colors.reset );

/// print information with message (in thông tin với message)
console.info("This is basic ECMAScript course for Mr Buoi");

/// Template string
let value = 1000;
let str = `I have a ${value} dollar`;
console.log(str);
console.log("Value is %s of items", value);

/// print time for execute function
console.time(`Time is ...`);
for (let i = 0 ; i < 5 ; i++) {
    console.count();// count number of callbacks
    console.log(i);
}
console.timeEnd(`Time is ...`);

/// print all property of object (in tất cả thuộc tính của đồi tượng)
console.log(obj);
console.dir(objects); // console.dir cho phep in ra chi tiết thuộc tính đối tượng bao gồm các đối tượng lồng nhau

/// print group info of object (in thông tin nhóm của đối tượng)
console.group("List");
objects.forEach(function(item){
    console.group("objItem");
    console.dir(item);
    console.groupEnd("objItem");
});
console.groupEnd("List");

