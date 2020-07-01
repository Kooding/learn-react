import { useState, useCallback, useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case "CHANGE_INPUT":
			return {
				...state,
				[action.name]: action.value,
			};
		case "RESET":
			return {
				...action.initialForm,
			};
		default:
			return new Error("Error!!");
	}
}

function useInputs(initialForm) {
	const [form, dispatch] = useReducer(reducer, initialForm);
	const onChange = useCallback((e) => {
		const { name, value } = e.target;
		dispatch({
			type: "CHANGE_INPUT",
			name,
			value,
		});
	}, []);
	const reset = useCallback(() => {
		dispatch({
			type: "RESET",
			initialForm,
		});
	}, [initialForm]);
	return [form, onChange, reset];
}

export default useInputs;
