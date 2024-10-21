/* Boolean 타입으로 명시적 타입 변환
   1. Boolean() 생성자 함수 사용
   2. !! 부정 논리 연산자를 2번 쓰게 되면 Boolean 타입으로 변환한다.
   
   - !true => false
   - !!'java' => true */

   // truely 와 falsely
   console.log(Boolean('java'));
   console.log(Boolean('')); // '', 0, NaN, undefined, null, false -> false 값이다.
   console.log('==========================')
   // !를 이용한 타입변환
   console.log(!!'java');
   console.log(!'java');
   console.log(!!0);
