var panda = {
    name : '푸바오',
    // 객체 내에 프로퍼티로 가지고 있는 함수를 메소드 라고 한다.
    eat : function(food){
        // this 는 panda 를 가르킨다. 자바에서 this(자기자신) 과 동일한 의미
        console.log(`${this.name} 는 ${food}(을)를 대나무를 맛있게 먹어요`);   
    }
}; // function 을 축약할 수 있다.

var pororo = {
    name : '뽀로로',
        eat(food){// ES6 에서 메소드 정의 시 function 키워드 생략 가능
        console.log(`${this.name} 는 ${food}(을)를 맛있게 먹어요`);   
    }
};

pororo.eat('생선');

console.table(pororo);