import React, { useState, useRef } from "react";
import AddableUserList from "./AddableUserList";
import AddForm from "./AddForm";

function App() {
	const [users, setUsers] = useState([
		{
			id: 1,
			username: "admin",
			email: "admin@help.com",
			active: true
		},
		{
			id: 2,
			username: "guest",
			email: "guest@guest.co.kr",
			active: false
		},
		{
			id: 3,
			username: "user",
			email: "user@userhome.co.kr",
			active: false
		}
	]);
	const [inputs, setInputs] = useState({
		username: "",
		email: ""
	});
	const { username, email } = inputs;
	// useing to users array in property id
	const nextId = useRef(4);
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
				username,
				email
			}
		];
		setUsers(users.concat(newUser));
		setInputs({
			username: "",
			email: ""
		});
		nextId.current += 1;
	};

	const onDelete = id => {
		console.log(id);
		setUsers(users.filter(user => user.id !== id));
	};

	const onToggle = id => {
		setUsers(
			users.map(user =>
				user.id === id ? { ...user, active: !user.active } : user
			)
		);
	};
	return (
		<>
			<AddForm
				username={username}
				email={email}
				onChange={onChange}
				onCreateUser={onCreateUser}
			/>
			<AddableUserList
				users={users}
				onDelete={onDelete}
				onToggle={onToggle}
			/>
		</>
	);
}

export default App;
