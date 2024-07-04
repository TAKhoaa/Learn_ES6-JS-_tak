/**
 * * String in ES6
 */
console.clear();

//? Define string in ES6 
let a = "Hello World";
console.log(a);

let num =123;
let b = num.toString(); // Chuyển num sang dạng chuỗi string
console.log("string of", num, "is", b);

let c = "Hello \t Mr Buoi!!!\nToday is Friday" // \t là dạng tab khoảng cách xa , \n là ký tự xuống dòng (newline)
console.log(c);

let d = "I`m a Teacher";
console.log(d);

let e = "You\'re a Student"
console.log(e);

//? Define long or multiple lin in String (xác định dòng dài hoặc nhiều dòng trong chuỗi)
let f = "He is call 'Johnny'. \
He is a worker in my factory.";
console.log(f);



let g = "She is Marry." + 
"She is a student in my university."
console.log(g);

//string template (mẫu chuỗi)
let value = 200;
let height = 1.65;
let sen = `I am tall ${height}cm. I have ${value} dollars. `;
console.log(sen);
let text = String.raw`I am tall ${height}cm.\nI have ${value} dollars.`; // string.raw tạo ra chuỗi nhưng không xử lý các escape như \n , \t ,..
console.log(text);
console.log("------------------------------------");

//String method (phương thức chuỗi)
let str = "      The school of Science and Technology (SST) deqartment wants to design an automated system that manages the interships of its students and. Every SST course has a code, a name and number of credits."
console.log(str);
console.log("------------------------------------");
str = str.trim(); // (sửa chuỗi) xóa khoảng cách giữa đầu và cuối chuỗi
console.log(str);
console.log("------------------------------------");

//! UpperCase or LowerCase of string (Viết in hoa hoặc viết thường hết chuỗi)
console.log(str.toUpperCase()); // Viết in hoa toàn bộ chuỗi
console.log("------------------------------------");
console.log(str.toLowerCase()); // viết thường toàn bộ cchuỗi
console.log("------------------------------------");

// Get character at index (lấy kí tự từ chuỗi)
console.log(str[6]); //lấy ký tự ở số thứ tự 6 trong chữ school
console.log(str.charAt(2)); 
console.log(str.charCodeAt(2)); // Return ASCII of character at 2 (trả về ký tự trong bảng ASCII)

//! Get string length (độ dài chuỗi)
console.log("Length of string is", str.length, " characters"); 

//! Joins two string (nối 2 chuỗi)
let str_1 = "Fall all students of SST.";
let str_2 = str_1.concat(" ",str); // sử dụng hàm concat để nối chuỗi str_1 vào chuỗi str
console.log("------------------------------------");
console.log(str_2);

//! Find index of Substring
let keyword = "SST"
console.log("Keyword", keyword, "is" , str.indexOf(keyword)); //tìm từ trong chuỗi 
console.log("keyword", keyword , "is second index at ", str.indexOf(keyword, 50)); // tìm 'keyword' trong str bắt đầu từ vị trí thứ 50 trở đi , nếu không tìm thấy sẽ trả về -1

//! Find index of Subtring without upper-case or lower-case (tìm 'keyword' của chuỗi không có chữ hoa hoặc chữ thường )
console.log("keyword", keyword, "is" , str.indexOf('sst')); // tìm kiếm 'keyword' ở dạng chữ thường, không có sẽ trả về -1
console.log("Use search('sst') to find substring: ", str.search(/sst/i)); // /sst/i, tìm kiếm sẽ không phân biệt chữ hoa chữ thường. 

//! Extract characters from string (trích xuất ký tự từ chuỗi)
console.log("------------------------------------");
console.log(str.substring(4, 10));  // substring(start_index, end_index) (lấy từ ký tự thứ 4 đến ký tự thứ 10 (không bao gồm cký tự thứ 10) và không bao gồm giá trị âm)
console.log(str.substr(4, 7));      // substr(start_index, length of substring) (lấy ký tự thứ 4 đến khi đủ 7 ký tự)

//! Replace string (thay thế chuỗi)
console.log(str.replace('SST', 'HCMUS'));

//! Split a string to array of substring (tách mảng thành chuỗi con)
let arr_str = str.split(" "); // chuyển chuỗi thành từng mảng có từng chuỗi con
console.log(arr_str);

//! Extract parts of String
let res = str.slice(4, 10);
console.log(res); // tương tự như subtrings lấy tất cả giá trị kể cả giá trị âm

//! Insert and Remove character in string (chèn và xóa ký tự trong chuỗi)
let arr_char = str.split(" "); // khai báo arr_char là mảng str
arr_char.splice(1, 0, "MY"); // Thêm từ "MY" vào vị trí thứ 1 trong mảng
let new_str = arr_char.join(" ");
console.log(new_str);
console.log("------------------------------------");
arr_char.splice(1, 3); // Loại bỏ 3 phần tử bắt đầu từ vị trí thứ 1
new_str = arr_char.join(" ");
console.log(new_str);