/*
    배열의 고차 함수
    - 고차 함수란? 함수를 인자로 전달 받는 함수를 의미한다.
*/

// sort() : 배열을 정렬 해주는 함수

let numbers = [];

for(let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬 하기 전 number 배열 : ${numbers}`);
/*
    sort() : 오름차순이 기본 정렬이며
    배열은 기본적으로 문자열로 정렬이 되기 때문에
    한 자리수, 세자리 수가 올바르게 정렬이 되지 않는 모습을 확인할 수 있다.
    따라서 다른 정렬 기준을 사용하기 위해서는 매개변수로 compare 이라는
    함수를 전달해야 한다.
*/
numbers.sort();

console.log(`정렬 후 number 배열 : ${numbers}`);

// 숫자 오름차순 정렬
function compare(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}
// 문자열이 부등호를 만나서 문자열은 부등호 비교할수 없으니 암묵적으로 숫자로 변환되어 오름차순을 해준다.
numbers.sort(compare);

console.log(`인자로 compare 함수 전달 후 정렬배열 : ${numbers}`);

// 숫자 내림차순 정렬
numbers.sort(function(a,b) {
    return b - a;
});

// 애로우평션으로 해보기
numbers.sort((a,b) => b - a);
console.log(`인자로 함수 작성해서 내림차순 정렬 : ${numbers}`);

/*
    배열에서 제공하는 foreach() 
    - for문을 대체할 수 있는 고차함수
    ** 배열.forEach(function(item, index, array){}); **
*/

numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item, index, array){
    console.log(`item : ${item}`); // 1부터 시작하면 시작하는 값 value
    console.log(`index : ${index}`); // 인덱스 key 값
    console.log(`array : ${array}`); // 배열에 대한 정보
});

// 응용
/*
    forEach()
    1번째 인자 (item) : 요소(value)
    2번째 인자 (index) : 요소가 위치하는 번호
    3번째 인자 (array) : array 자신이 포함 된 배열 정보
 */

// 배열의 forEach 로 요소 출력하기
numbers.forEach(item => console.log(item));

/**********************************************매우중요************************************************************** */
// 배열의 map() : 배열 요소 전체를 대상으로 콜백함수 호출 후
// 반환 값들로 *새로운 배열* 을 반환
// 배열.map(function(item, index, array){});
/**********************************************매우중요************************************************************** */
const types = [true, 1, 'text'].map(item => typeof item);
// 기존 배열을 순회 후 우리가 작성한 함수 내부의 조건들로 다시
// 새로울 배열 반환
console.log(types);

const length = ['apple', 'banana', 'mango'].map(item => item.length);

console.log(length);

console.log(global.length === global);

/*
    배열의 filter() -> 검색 기능 굉장히 많이 활용 됨!
    - 배열의 요소 전체를 대상으로 콜백 함수 호출 후
    - 반환 값이 true 인 녀석들로 새로운 배열 반환
*/
// 홀수 배열(odd)
const odds = numbers.filter(item => item % 2);

console.log(odds);

/*
    배열의 reduce()
    - 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환
    - 전달하여 콜백 함수 실행 후 결과 반환
    - previousValue : 이전 콜백의 반환 값
    - currentvValue : 배열 요소의 값
    - currentIndex : 인덱스
    - array : 자신이 속한 배열
*/

numbers.reduce((pre, currV, currI, array) => {
    console.log(`previousValue' : ${pre}`);
    console.log(`currentvValue' : ${currV}`);
    console.log(`currentIndex' : ${currI}`);
    console.log(`array' : ${array}`);
});

const sum = numbers.reduce((pre, currV) => {
    return pre + currV; // return 한 결과는 다음 콜백의 첫번째 인자로 전달
});

console.log(`sum : ${sum}`);

