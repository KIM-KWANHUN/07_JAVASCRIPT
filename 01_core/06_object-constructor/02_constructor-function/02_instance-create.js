function Student(name, age) {
    // 1. this
    console.log(this);
    this.name = name; // 필드
    this.age = age; // 핃드
    this.getInfo = function() { // 함수(메소드)
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
}

const student = new Student('김관훈', 30);
console.log(student);