import React, { useState, useRef } from "react";
import "./App.css";
import AddableUserList from "./AddableUserList";

function App() {
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "admin",
			email: "admin@help.com"
		},
		{
			id: 2,
			name: "guest",
			email: "guest@guest.co.kr"
		},
		{
			id: 3,
			name: "user",
			email: "user@userhome.co.kr"
		}
	]);
	const [inputs, setInputs] = useState({
		name: "",
		email: ""
	});
	const { name, email } = inputs;
	// useing to users array in property id
	const nextId = useRef(4);
	//useing to onReset function
	const inputEl = useRef();
	const onChange = e => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	};

	const onCreateUser = () => {
		const newUser = [
			{
				id: nextId.current,
				name,
				email
			}
		];
		setUsers(users.concat(newUser));
		setInputs({
			name: "",
			email: ""
		});
		nextId.current += 1;
		inputEl.current.focus();
	};
	return (
		<>
			<input
				name="name"
				placeholder="write your name"
				onChange={onChange}
				value={name}
				ref={inputEl}
			/>
			<input
				name="email"
				placeholder="write your email"
				onChange={onChange}
				value={email}
			/>
			<button onClick={onCreateUser}>ADD</button>
			<div
				style={{
					borderBottomWidth: 1,
					borderBottomStyle: "solid",
					borderBottomColor: "black"
				}}
			>
				값 : {name}({email})
			</div>
			<AddableUserList users={users} />
		</>
	);
}

export default App;
