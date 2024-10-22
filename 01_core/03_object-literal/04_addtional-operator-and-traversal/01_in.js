/* in 연산자는 존재 여부를 확인하는 연산자
   SQL 에서 썻던 것과 동일한 기능 */

   var student = {
        name : '김관훈',
        age : 30,
        test : undefined
   };

   // in 연산자로 존재 여부 확인
   console.log('name' in student); // name이 student에 존재 true
   console.log('sum' in student); // sum이 student에 존재하지 않아서 false
   console.log('=============================');
