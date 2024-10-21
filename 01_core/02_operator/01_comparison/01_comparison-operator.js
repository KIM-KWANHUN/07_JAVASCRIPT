/* 기본적인 연산자 내용은 java 동일
   다른 거 위주로 확인 */

/* 동등/일치 비교 연산자
   - 동등비교(==, !=) : 암묵적인 타입변환을 통해 타입을 일치 시킨 후 비교
   - 일치비교(===, !==) : 타입과 값이 모두 일치하는지 비교 */

// 숫자 1과, 문자 '1', true 비교해보기
console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);
console.log(`1 === '1' : ${1 === '1'}`); // 타입까지 비교햇을때 타입은 틀리다 그러므로 false 가 출력된다.
console.log(`1 === true : ${1 === true}`); // 타입까지 비교햇을때 타입은 틀리다 그러므로 false 가 출력된다.

// 비교 연산자를 통해 문자열 끼리도 비교 가능하다.
console.log('================================')
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`);



