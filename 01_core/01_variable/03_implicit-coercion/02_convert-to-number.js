/* 02. 숫자 타입으로 암묵적 타입 변환 */

// 산술연산자의 피연산자는 숫자여야 하기 때문에
// 숫자가 아닌 피연산자를 숫자로 암묵적을 변환한다.
console.log(10 - '5');
console.log(10 * '5');
console.log(10 % '5');
console.log(10 / '5');

console.log(10 * 'hi'); // 피연산자가 숫자로 변환 불가하기 때문에 NaN

// + 단항 연산자로 숫자가 아닌 타입을 변환할 수 있다.

console.log('=======================================================');
console.log(+''); // 빈문자열 -> 0
console.log(+'10'); // 10
console.log(+'java'); // NaN 숫자로 변환 불가
console.log(+ true); // 1
console.log(+ false); // 0
console.log(+ null); // 0
console.log(+ undefined); // NaN
console.log(+ {}); // NaN
console.log(+ []); // 0 빈 배열은 0으로 변환된다.
console.log(+function(){}); // NaN

