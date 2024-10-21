/* java case
    - int x = 10;
    - if(조건문)

javascript case
저위에 조건문이 된다. */

/* 자바스크립트 엔진은 boolean 타입이 아닌 값을
   Truthy 값(참으로 평가되는 값)
   과
   Falsy 값(거짓으로 평가되는 값)
   으로 구분을 해준다.
   
   Falsy 값은 정해져있다. 
    - false, undefinded, null, 0, NaN, '' 
    - 이 친구들은 Falsy 값이며
    - 이 친구들을 제외한 모든 값은 Truthy 값이다. */

if(true) console.log('동작하니?');
if(false) console.log('동작하니?');
if(undefined) console.log('동작하니?');
if(4) console.log('동작하니?');
if('') console.log('동작하니?');