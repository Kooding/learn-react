import React, { Fragment } from "react";

function User({ user }) {
	return (
		<div>
			<b>{user.name}</b>
			<span>({user.email})</span>
		</div>
	);
}

function AddableUserList({ users }) {
	return (
		//Fragment는 <></>으로 사용해도된다.
		<Fragment>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</Fragment>
	);
}

export default AddableUserList;
