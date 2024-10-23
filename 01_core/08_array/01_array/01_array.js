/* 
    java 의 배열은 원시자료형을 저장하는 용도로 사용을 했다.
    그리고 java 의 경우에는 type 이 굉장히 중요하기 때문에
    하나의 배열은 같은 타입의 데이터만 취급을 할 수 있었다.
    자바스크립트에서 배열은 조금 더 넓은 범위로 취급한다. 
*/

// 1. 배열 리터럴을 사용해서 배열 생성
// 배열이 가지고 있는 값을 요소 라고 부르며
// 배열은 자바스크립트의 모든 값을 다 넣을 수 있다.
const arr = ['바나나','복숭아','키위'];
console.log(arr);
console.log('=====================================')
// 2. 배열 생성자 함수를 사용
// 인자가 없는 값이면 [] 빈배열을 만들어준다.
const arr2 = new Array();
console.log(arr2);
console.log('=====================================')
// 인자가 1개이면서, 숫자인 경우 전달한 숫자만큼의 length 를 가진 배열 리턴
const arr3 = new Array(10);
console.log(arr3);
console.log('=====================================')
// 인자가 2개 이상이거나, 숫자가 아닌 경우에는 전달한 인자를 요소로 갖는 배열 생성
const arr4 = new Array(1, 2, 3);
console.log(arr4);
console.log('=====================================')
// 3. Array.of() 메소드
// 전달한 인자를 요소로 갖는 배열을 생성하게 된다.
console.log(Array.of(10));
console.log('=====================================')
//요소에 접근하는방법
// int[] arr = new int[]{1, 2, 3};
// 1 -> arr[0]

console.table(arr[0]);
console.log(arr[0]);

// 자바 스크립트에서 객체는 프로퍼티의 집합이다.
// 원시 타입이 아닌 모든 값은 객체이다.

// 배열은 요소의 갯수, 즉 배열의 길이를 나타내는
// length 라는 프로퍼티를 가지고있다.
console.log(arr.length);
// 배열은 자바와 마찬가지로 length 라는 프로퍼티를
// 갖기 때문에 for문 사용할 수 있다.

for(let i =0; i < arr.length; i++  {
    console.log(arr[i]);
})

cosole.lo(typeofarr)