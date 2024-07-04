/**
 * * Statement in ES6:
 */

console.clear();

//? if ... else
let a = 10;
if ( a % 2 === 0 ) // nếu a chia lấy dư cho 2
    console.log(a, " is even "); // nếu chia hết thì a là số chẵn
else 
    console.log(a, " is odd "); // nếu chia có dư thì a là số lẻ

    //? Assignment with condition -> a = (condition) ? b : c;
let b = (a % 5 == 0) ? 'Five' : 'Another'; // ( sử dụng toán tử 3 ngôi xem a có chia hết cho 5 không nếu có là five nếu không là another)
console.log(b); //

//? switch...case
let c = 0; // khai bao c = 0 
switch(c) { // sử dụng switch để c chạy tự case 1 đến các case khác nếu c không bằng giá trị nào trong case thì trả về khối lệnh default)
    case 1:
        console.log(c, 'is one');
        break;
    case 2:
        console.log(c, 'is two');
        break;
    case 3:
        console.log(c, 'is three');
        break;
    default:
        console.log(c, 'is not a number');
}

//? loop statement -> for...(VÒNG LẶP)
let arr = [1, 2, 3, 4, 5];

console.log("--- For(...) ---");
for(let i = 0; i < arr.length; i++) /*let i = 0;: Khởi tạo biến i và gán giá trị ban đầu là 0. Biến i được sử dụng để duyệt qua các chỉ số của mảng arr.
i < arr.length;: Điều kiện để tiếp tục vòng lặp. Vòng lặp sẽ tiếp tục chạy miễn là i nhỏ hơn độ dài của mảng arr.
i++: Sau mỗi lần lặp, tăng giá trị của i lên 1.*/
    console.log(`arr[${i}] = ${arr[i]}`);

//? loop statement -> do...while (câu lệnh lặp)
console.log("--- do... while(...) ---");
i = 0;// Đặt i bằng 0 để bắt đầu từ phần tử đầu tiên của mảng
do {
    if(arr[i] == 4) //if(arr[i] == 4) break; Kiểm tra xem phần tử hiện tại của mảng (arr[i]) có bằng 4 hay không. Nếu đúng, câu lệnh break sẽ dừng vòng lặp.
        break;

    console.log(`arr[${i}] * 4 = ${arr[i]*4}`);
    i++;
}while(i < arr.length);

//? loop statement -> foreach ...
console.log("--- array.forEach() ---");
arr.forEach(function(item) { /*arr.forEach(function(item) { ... }): Phương thức forEach của mảng trong JavaScript thực thi một hàm callback cho mỗi phần tử trong mảng arr.
    function(item) { ... }: Đây là hàm callback được truyền vào forEach để thực thi cho mỗi phần tử của mảng.
    item: Đây là tham số đại diện cho phần tử hiện tại của mảng trong lần lặp hiện tại.*/
    console.log(item); // ~ item ~ arr[i]
});

//? loop statement -> for...in...
console.log("--- for ... in ... ---");
for(let index in arr) { /*for(let index in arr) { ... }: Vòng lặp for...in duyệt qua các chỉ số của mảng arr.
    let index in arr: Biến index là một chuỗi đại diện cho chỉ số của mảng. Trong mỗi lần lặp, index sẽ lưu giá trị của chỉ số.
    console.log(arr[index]);: In ra giá trị của phần tử tại chỉ số index trong mảng arr.*/
    console.log(arr[index]);
}

console.log("--- Log object info with for ... in ---");
let obj = { 
    id : 1, 
    name : "iPhone 12 Pro Max",
    price : 1000
};

for (let key in obj) { /*for (let key in obj): Vòng lặp for...in được sử dụng để duyệt qua các thuộc tính của đối tượng obj.
    key: Biến key trong mỗi lần lặp sẽ lưu giá trị của một thuộc tính của obj.
    obj: Đối tượng mà bạn muốn duyệt qua các thuộc tính của nó.
    */
    console.log(key,":",obj[key]);
}

//? loop statement -> for...of... 
console.log("--- for ... of ... ---");
for(let item of arr) /*Vòng lặp for...of được sử dụng để lặp qua các giá trị của các cấu trúc dữ liệu có thể lặp lại như mảng và chuỗi.
Trong mỗi lần lặp, biến item sẽ chứa giá trị của phần tử hiện tại của mảng arr.
Khác với for...in, for...of không chỉ duyệt qua các chỉ số mà còn truy cập trực tiếp vào giá trị của từng phần tử.*/
    console.log(item);