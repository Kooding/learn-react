import React from "react";

function User({ user, onRemove, onToggle }) {
	const handleDelete = () => {};

	return (
		<div>
			<b
				style={{
					color: user.active ? "green" : "black",
					cursor: "pointer",
				}}
				onClick={() => onToggle(user.id)}
			>
				{user.username}
			</b>
			&nbsp;
			<span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	);
}

function AddableUserList({ users, onRemove, onToggle }) {
	return (
		//Fragment는 <></>으로 사용해도된다.
		<>
			{users.map((user) => (
				<User
					key={user.id}
					user={user}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</>
	);
}

export default AddableUserList;
