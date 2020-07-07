import React, { useContext, useRef } from "react";
import useInputs from "./useInputs";
import { UserDispatch } from "./App";

function AddForm() {
	const [form, onChange, reset] = useInputs({
		username: "",
		email: "",
	});
	const { username, email } = form;
	const dispacth = useContext(UserDispatch);
	const nextId = useRef(4);
	const onCreateUser = () => {
		dispacth({
			type: "CREATE_USER",
			user: {
				id: nextId.current,
				username,
				email,
			},
		});
		nextId.current += 1;
		reset();
	};

	return (
		<div>
			<input
				name="username"
				placeholder="계정명"
				onChange={onChange}
				value={username}
			/>
			<input
				name="email"
				placeholder="이메일"
				onChange={onChange}
				value={email}
			/>
			<button onClick={onCreateUser}>등록</button>
		</div>
	);
}

export default React.memo(AddForm);
