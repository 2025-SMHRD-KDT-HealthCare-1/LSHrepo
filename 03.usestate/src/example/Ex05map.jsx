import React from 'react'

const Ex05map = () => {
    // 배열데이터를 생성 => 객체데이터가 들어가져있는 형태
    let students = [
        { name : '홍길동', age : 30, bloodType : 'A' },
        { name : '고길동', age : 50, bloodType : 'AB' },
        { name : '둘리', age : 10, bloodType : 'A' }
    ]

    let food = ['마라탕', '분식', '도시락']

    let numList = [1,2,3,4,5]

    // 1. map함수 : 기존 배열을 이용해서 새로운 배열을 만드는 배열함수(JS 내장)
    //           : 기존배열.map(콜백함수)
    // 2. filter함수 : 기존 배열에서 조건을 이용해서 조건이 true면 유지, 
    //                 false면 버려서 새로운 배열을 만드는 배열함수(JS 내장)
    //               : 기존배열.filter(콜백함수)
    // 3. map함수와 filter함수를 동시 사용
    //             : 기존배열.filter(조건함수).map(콜백함수)

    // 1). filter 함수 사용
    const filteredList = numList.filter(num => num % 2 === 0);
    console.log(filteredList);

  return (
    <div>
        <h3>Case 1 : 객체의 값을 하나씩 출력</h3>
        <p>
            안녕하세요. 제 이름은 {students[0].name} 입니다.
            혈액형은 {students[0].bloodType} 이고, 나이는 {students[0].age} 입니다.
        </p>
        <p>
            안녕하세요. 제 이름은 {students[1].name} 입니다.
            혈액형은 {students[1].bloodType} 이고, 나이는 {students[1].age} 입니다.
        </p>
        <p>
            안녕하세요. 제 이름은 {students[2].name} 입니다.
            혈액형은 {students[2].bloodType} 이고, 나이는 {students[2].age} 입니다.
        </p>

        <h3>Case 2 : map함수를 통해서 출력</h3>
        {/* map : 기존의배열(students)을 가져와서 결과를 반복처리해서 새로운 배열을 반환 
            기존의 배열은 영향을 받지않는다
            key 값을 꼭 저장해야한다
        */}
        {students.map((item) => (
            // console.log(item)
            <p key={item.name}>
                안녕하세요 제 이름은 {item.name} 입니다. 혈액형은 {item.bloodType}
                이며, 나이는 {item.age}
            </p>
        ))}
        <h3>Case 3 : map함수 실습</h3>
        {/* food변수를 map함수를 통해서 => 버튼요소로 만들기
            총 3개의 버튼을 만들기
        */}
        {food.map(
            (item) => <button style={{background : 'yellow'}} key={item}>{item}</button>
        )}

        {/* numList변수를 map함수를 통해서 => 버튼요소로 만들기
            => 2,4,6,8,10 으로 숫자를 바꿔서 버튼을 만들기
        */}
        {numList.map((item) => (
            <button style={{background : 'red'}} key={item}>{item * 2}</button>
        ))}

        <h3>Case 4:filter함수 실습</h3>
        {/* 
            1. numList배열을 map함수를 통해서 => 버튼요소로 만들기
                => 1, 2, 3, 4, 5 상태로 버튼을 만들기
            2. 새롭게 만들어진 1, 2, 3, 4, 5 버튼 중에서 짝수만 filter함수를 이용해
               화면에 출력
        */}
        {/* 
            * map, filter에 들어가는 콜백함수의 형태
            (요소, 인덱스, 배열) => {
                return 반환값    
            }
            * 인덱스와, 배열의 경우 생략이 가능
            * 컴포넌트의 key를 고유값으로 사용하기 위해서 index를 쓰는 것은 가능하나,
              권장되지는 않는다! (배열의 index는 요소의 추가/삭제로 변동이 가능)
         */}
        {
            numList.filter(num => num % 2 === 0)
                .map((num, i) => <button key={i}>{num}</button>)
        }
    </div>
  )
}

export default Ex05map