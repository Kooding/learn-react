import React from "react";

function User({ user }) {
	return (
		<div>
			<b>{user.name}</b>
			<span>({user.email})</span>
		</div>
	);
}

function UserList() {
	const users = [
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
	];
	return (
		<div>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
}

export default UserList;
