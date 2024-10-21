/* 05. symbol 타입
   변경 불가능한 원시 타입의 값이며
   다른 값과 중복이 되지 않는 유일한 값을 의미한다.
   -> key
   이 Symbol 타입을 활용해서 나중에 값에 대한 key 를
   생성하게 된다. */

   // 심볼 값 생성하기 심볼 메소드라고 생각한다.
   // Symbol 함수(메소드)를 사용해서 생성한다.
   var key = Symbol('key');
   // 값의 데이터 타입을 확인할 때 사용하는 typeof
   console.log(typeof key);