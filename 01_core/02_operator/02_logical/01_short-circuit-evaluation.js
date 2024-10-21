/* 논리 연산자
   || (OR), && (AND), !(NOT)
   단축 평가
   - 표현식을 평가하는 도중 결과가 확정이 된 경우
     나머지 과정을 생략한다. ex) A && B -> A가 false 면 B는 실행하지 않는다. */

// OR 연산의 경우 'apple' 문자열이 Truthy 값이기 때문에
// 뒤에 banana 는 보지도 않고 결정한다.
// 그렇기 때문에 논리 연산의 결과를 결정한 apple 이라는 피연산자를 반환한다.
     console.log('apple' || 'banana'); // apple
     console.log(false || 'banana'); // banana
     console.log('apple' || false); // apple
     console.log('============================')
// AND 의 경우 좌항과 우항 모두 확인해야 하기 때문에
// 논리 연산의 결과를 결정하는 banana 가 반환이 된다.
     console.log('apple' && 'banana'); // banana
     console.log(false && 'banana'); // false
     console.log('apple' && false); // false