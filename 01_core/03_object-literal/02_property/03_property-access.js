/* 프로퍼티에 접근하는 방법
    1. 마침표(.) 표기법
    2. 대괄호[] 표기법 */

    var panda = {
        name : '푸바오',
        eat : function(food){
                console.log(`${this.name} 는 ${food}(을)를 대나무를 맛있게 먹어요`);   
        }
    };

    panda.eat('죽순');

    // 마침표 표기법 확인
    console.log(panda.name);
    console.log('=================================')
    // 대괄호 표기법 확인 -> 프로퍼티 키는 반드시 따옴표를 감싼 문자열 사용
    console.log(panda['name']);

    panda['eat']('죽순2')

    // 대괄호 표기법을 쓸 수 밖에 없는 상황 발생
    var obj = {
        'dash-key' : 'value',
        0 : 1,
    };
    // 프로퍼티 키가 네이밍 규칙을 위반하는 경우 마침표 표기법 사용 불가
    // console.log(obj.dash-key); // 오류 발생 

    // 네이밍 규칙을 위반하는 경우 대괄호 표기법을 사용해야 한다.
    console.log(obj['dash-key']);
    // 대괄표 표기법을 할 때 문자열로 감싸야 된다. 감싸지 않으면 오류 발생
    // console.log(obj[dash-key]);
    console.log('=================================')
    // 프로퍼티 키가 정수값으로 된 경우에는 '' 를 생략할 수 있다. 암묵적 형변환이 일어났다.
    console.log(obj[0]);