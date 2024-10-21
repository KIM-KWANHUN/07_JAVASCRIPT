/* 04. undefined
   undefined 타입의 값은 undefined 가 유일하다.
   var test; 선언된 변수는 암묵적으로 undefined 값으로
   초기화가 된다.
   자바스크립트 언어를 동작하게 만드는 것은
   자바스크립트 엔진 이라는 것이다.
   undefined 는 엔진이 변수를 초기화 할 때 사용하는
   값으로써 실제 개발자들이 undifined 로 초기화 하는 것은
   지양한다. 되도록 쓰지말 것! */

   var undef; // 변수 선언
   console.log(undef);

   /* null 타입 */

   var nullValue = 'hi';
   nullValue = null // 이전에 참조하고 있는 hi 공간을 
   console.log(nullValue);