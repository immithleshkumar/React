//

// DESTRUCTUREING
// let arr = [10, 20, 30, 40]
// let [a, b, c, d] = arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let arr2 = [10, 20, 30, 40]
// skipping array
// let [, x, , y] = arr2;
// console.log(x, y);

// let arr3 = [10, ["hello", [30, [67, "hii"], ["bye"]], 90]]
// let [, [s1, [, [, s2], [s3]]]] = arr3;
// console.log(s1, s2, s3);

// let obj = {
//     id: 1,
//     title: "Laptop",
//     brand: "Hp",
//     price: 6000,
//     rating: {
//         rate: 5,
//     },
// };

// let { title, price, rating: { rate } } = obj;
// console.log(rate);


//

//

// !MODULES
// !1)-default exports
// !2)-named exports

import { Display as disp, add } from "./script.js"
import substract from "./script.js";

disp()

let val = add(10, 20)
console.log(val);

let val2 = substract(50, 10);
console.log(val2);