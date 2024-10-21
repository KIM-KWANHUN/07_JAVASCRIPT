/* 숫자 타입으로 명시적 타입 변환
   1. Number() 생성자 함수를 사용해서 변환
   2. parseInt, parseFloat 함수 이용(문자열 -> 숫자 '만' 가능)
   3. * 산술 이용 */

   1.
   console.log(Number(true)); // 숫자 1로 반환
   console.log(Number('10.01'));
   console.log('==================================')
   2. // int, float 소숫점 절삭
   console.log(parseInt('10'));
   console.log(parseFloat('10'));
   console.log(parseInt('10.2')); // 소숫점 절삭
   console.log(parseFloat('10.2'));

   console.log('==================================')
   console.log('10' * 1); // 아무 의미 없는 * 1을 함으로써 산술연산 진행

