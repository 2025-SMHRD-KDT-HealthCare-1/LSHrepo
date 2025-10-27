import React from 'react'
import { useState } from 'react'

const Ex09 = () => {
    // 1. input태그에 적은 내용이 계획추가 버튼 클릭시, 배열에 저장(state)
    // 2. 저장된 배열state를 map를 통해서 ul에 출력
    // 3. li에 달려있는 삭제 버튼을 클릭했을 때, filter 함수를 사용해서
    //    해당 요소만을 지우고, 새롭게 배열을 만들어서 저장(state)
    
    // state 배열에 값 추가하는 방법! (스프레드 연산자 사용)
    // const [list, setList] = useState([]);
    // setList([...list, "밥 먹기"]);

    // todoList가 저장될 state변수와 input태그의 값을 받아줄 state변수를 선언
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // todoList 추가 함수
    const addTodo = () => {
        // console.log(inputValue);
        setTodos([...todos, inputValue]);
        setInputValue("");
    }

    // todoList 삭제 함수
    const removeTodo = (deleteIndex) => {
        const updatedTodos = todos.filter((item, index) => index !== deleteIndex);
        setTodos(updatedTodos);
    }

  return (
    <div>
        <h1>2025 올해는 꼭!! 할 수 있다!</h1>
        {/* controlled input으로 input 태그 제어(useState이용한 input 제어) */}
        <input 
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={addTodo}>계획추가</button>

        <h1>TodoList</h1>
        <ul>
            {/* 이곳에 todoList가 li의 형태로 들어간다!! */}
            {todos.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => removeTodo(index)}>삭제</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Ex09