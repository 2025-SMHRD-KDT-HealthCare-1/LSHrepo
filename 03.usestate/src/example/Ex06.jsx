import React from 'react'
import Ex06map from '../components/Ex06map'
import data from '../json/ex06data.json'

const Ex06 = () => {
  return (
    <div>
        <h1>Map 실습</h1>
        <div style={{display : 'flex'}}>
            {data.result.map((item) => (
              // 하위 컴포넌트로 데이터를 전달 => map함수를 사용해서 전체 데이터를 반복해서 보내기
                <Ex06map key={item.title} item={item}></Ex06map>
            ))}
        </div>
        <h1>Filter 실습</h1>
        {/* 
          94년 이전 출생 연예인만 필터링해서 출력
          .birthYear를 통해서 출생년도에 접근 가능!
        */}
        <div style={{display : 'flex'}}>
          {data.result
            .filter(item => item.birthYear < 1994)
            .map(item => (
              <Ex06map key={item.title} item={item}></Ex06map>
            ))
          }
        </div>
    </div>
  )
}

export default Ex06