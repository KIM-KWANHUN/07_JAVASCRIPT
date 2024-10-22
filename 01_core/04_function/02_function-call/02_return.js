function hello(name) {
    
    return `${hello} 헬로우~~`
    //java 와 마찬가지로 return 은가장 마지막 줄에 있어야 한다.
    // 하지만 스크립트는 error 가 아닌 무시힌디.
}

console.log(hello('김관훈'))

function fuc() {
    console.log('함수 호출됨....');
    // 반환 값을 명시적으로 지정하지 않으면 undefined 가 된다.
    // 생략을 하더라도 undefined 이다.
    return;
}

console.log (fuc());