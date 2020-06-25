import React, { Fragment } from "react";

function User({ user, onDelete, onToggle }) {
	return (
		<div>
			<b
				style={{
					color: user.active ? "green" : "black",
					cursor: "pointer"
				}}
				onClick={() => onToggle(user.id)}
			>
				{user.username}
			</b>
			&nbsp;
			<span>({user.email})</span>
			<button onClick={() => onDelete(user.id)}>삭제</button>
		</div>
	);
}

function AddableUserList({ users, onDelete, onToggle }) {
	return (
		//Fragment는 <></>으로 사용해도된다.
		<Fragment>
			{users.map(user => (
				<User
					key={user.id}
					user={user}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</Fragment>
	);
}

export default AddableUserList;
