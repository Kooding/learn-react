import React from "react";

function AddForm({ username, email, onChange, onCreateUser }) {
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

export default AddForm;
