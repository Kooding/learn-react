import React, { useState, useReducer } from "react";

function reducer(state, active) {
	switch (active.type) {
		case "INCREASE":
			return state + 1;
		case "DECREASE":
			return state - 1;
		default:
			throw new Error("ERROR!!!!!");
	}
}

function Counter() {
	const [number, dispatch] = useReducer(reducer, 0);
	const onIncrease = () => {
		dispatch({
			type: "INCREASE",
		});
	};
	const onDecrease = () => {
		dispatch({
			type: "DECREASE",
		});
	};
	return (
		<div>
			<h1>현재 카운트 : {number}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
}

export default Counter;

//state 상태가 바뀌면 render함수가 실행된다.(re-rendering)
