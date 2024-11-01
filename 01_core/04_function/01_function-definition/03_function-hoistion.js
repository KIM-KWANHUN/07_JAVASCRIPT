/* 함수의 호이스팅 */

// 함수 참조하기
console.log(hello); // 2
console.log(hi);// 3

console.log('==========================');
console.log(hello('김관훈')); // 4
// console.log(hi('김관훈')); // 5

// 함수 선언문 (1)
function hello(name) {
    return `${name}님 헬로우~`;
}
 
// 함수(변수) 표현식
// (1) // (6)
var hi = function(name) {
    return `${name} 님 하이~`
}

console.log(hi('김관훈'));

/* 자바스크립트는 특이하게 선언 과정과 값 할당 과정 이렇게 따로따로 동작을 하게 된다.
   선언은 코드를 run 하는 동시에 가장 먼저 선언 구문을 메모리에 할당하게 된다.
   선언 구문이 마무리가 되면 이제 위에서 부터 아래로 코드가 진행함에 따라
   값을 할당하는 과정이 실행되는 것이다. */

/* 주의점
    값을 할당하는 과정은 코드가 진행함에 따라 실행되기 때문에
    함수 표현식에 경우에는 사용하고 싶으면
    함수 표현식 이후에 참조 또는 호출해야 한다. */