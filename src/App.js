import React, { useReducer, useMemo, createContext } from "react";
import AddableUserList from "./AddableUserList";
import AddForm from "./AddForm";

function countActiveuser(users) {
	console.log("활성 사용자 수를 세는중....");
	const activeCount = users.filter((user) => user.active).length;
	return activeCount;
}
function reducer(state, action) {
	switch (action.type) {
		case "CREATE_USER":
			return {
				users: state.users.concat(action.user),
			};
		case "TOGGLE_USER":
			return {
				...state,
				users: state.users.map((user) =>
					user.id === action.id ? { ...user, active: !user.active } : user
				),
			};
		case "REMOVE_USER":
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.id),
			};
		default:
			return new Error("ERROR!!!!");
	}
}
const initialState = {
	users: [
		{
			id: 1,
			username: "admin",
			email: "admin@help.com",
			active: true,
		},
		{
			id: 2,
			username: "guest",
			email: "guest@guest.co.kr",
			active: false,
		},
		{
			id: 3,
			username: "user",
			email: "user@userhome.co.kr",
			active: false,
		},
	],
};
export const UserDispatch = createContext(null);
function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { users } = state;

	const count = useMemo(() => countActiveuser(users), [users]);
	return (
		<UserDispatch.Provider value={dispatch}>
			<AddForm />
			<AddableUserList users={users} />
			<div>활성 사용자 수 : {count}</div>
		</UserDispatch.Provider>
	);
}

export default App;
