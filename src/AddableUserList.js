import React, { useEffect, useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
	const dispacth = useContext(UserDispatch);
	const { username, email, id } = user;
	return (
		<div>
			<b
				style={{
					color: user.active ? "green" : "black",
					cursor: "pointer",
				}}
				onClick={() =>
					dispacth({
						type: "TOGGLE_USER",
						id,
					})
				}
			>
				{user.username}
			</b>
			&nbsp;
			<span>({user.email})</span>
			<button
				onClick={() =>
					dispacth({
						type: "REMOVE_USER",
						id,
					})
				}
			>
				삭제
			</button>
		</div>
	);
});

function AddableUserList({ users }) {
	return (
		//Fragment는 <></>으로 사용해도된다.
		<>
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
		</>
	);
}

export default AddableUserList;
