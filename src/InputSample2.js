import React, { useState, useRef } from "react";

function InputSample2() {
	//input이 두개 이므로 객체 형식의 상태를 관리해야한다.
	const [inputs, setInputs] = useState({
		name: "",
		nickname: ""
	});
	//편의성을 위해 inputs에서 변수로 빼낸다.
	const { name, nickname } = inputs;
	//DOM의 직접 접근하기 위해 useRef를 사용.
	const inputEl = useRef();

	const onChange = e => {
		//e.target 객체에서 name 과 value 를 뽑아온다.
		const { name, value } = e.target;
		//객체나 배열의 상태를 관리할때 불변성을 지켜주기 위해
		// spread문법으로 기존 state를 복사한다
		setInputs({
			...inputs,
			[name]: value
		});
	};

	// 초기화 함수 정의
	const onReset = () => {
		setInputs({
			name: "",
			nickname: ""
		});
		inputEl.current.focus();
	};
	return (
		<div>
			<input
				name="name"
				placeholder="이름을 입력하세요"
				onChange={onChange}
				value={inputs.name}
				ref={inputEl}
			/>
			<input
				name="nickname"
				placeholder="닉네임을 입력하세요"
				onChange={onChange}
				value={inputs.nickname}
			/>
			<button onClick={onReset}>초기화</button>
			<p>
				값 : {name}({nickname})
			</p>
		</div>
	);
}

export default InputSample2;
