/**
 * const, letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// letは上書きが可能 再宣言不可能
// val2 = "let変数を上書き";
// console.log(val2);

// constは上書き不可能、再宣言不可能
// const val3 = "const変数";
// console.log(val3);

// constの場合でも、オブジェクトの中身は変更可能
// const val4 = {
//   name: "aaa",
//   age: 26
// };
// val4.name = "bbb";

// console.log(val4);

// constの場合でも、配列の中身は変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "test";
// const age = 26;

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// テンプレート文字列を用いた方法
// console.log(`私の名前は${name}です。年齢は${age}です。`);

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}

console.log(func1("func1です"));

// アロー関数

const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

/**
 * 分割代入
 */

const myPro = {
  name: "aaa",
  age: 26
};

const message1 = `名前は${myPro.name}です。年齢は${myPro.age}です。`;
console.log(message1);

const { name, age } = myPro;
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * デフォルト値、引数など
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const array1 = [1, 2];
// console.log(array1);
// console.log(...array1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(array1[0], array1[1]);
// sumFunc(...array1);

// まとめる
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array2;
// console.log(num1);
// console.log(num2);
// console.log(array3);

// 配列のコピー、結合
const array4 = [10, 20];
const array5 = [30, 40];

const array6 = [...array4];
console.log(array6);

const array7 = [...array4, ...array5];
console.log(array7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "栗山"];
// 従来のやり方
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

/**
 * 三項演算子
 */
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

/**
 * 論理演算子 && ||
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("1か2はtrueになります。")
// }

// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 1000;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
