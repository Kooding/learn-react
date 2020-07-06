import React, {
	useReducer,
	useRef,
	useMemo,
	useCallback,
	createContext,
} from "react";
import AddableUserList from "./AddableUserList";
import AddForm from "./AddForm";
import useInputs from "./useInputs";

function countActiveuser(users) {
	console.log("활성 사용자 수를 세는중....");
	const activeCount = users.filter((user) => user.active).length;
	return activeCount;
}
function reducer(state, action) {
	switch (action.type) {
		// case "INPUT_CHANGE":
		// 	return {
		// 		...state,
		// 		inputs: {
		// 			...state.inputs,
		// 			[action.name]: action.value,
		// 		},
		// 	};
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
	const [form, onChange, reset] = useInputs({
		username: "",
		email: "",
	});
	const nextId = useRef(4);
	const { users } = state;
	const { username, email } = form;

	const onCreateUser = useCallback(() => {
		dispatch({
			type: "CREATE_USER",
			user: {
				id: nextId.current,
				username,
				email,
			},
		});
		nextId.current += 1;
		reset();
	}, [username, email, reset]);

	const count = useMemo(() => countActiveuser(users), [users]);
	return (
		<UserDispatch.Provider value={dispatch}>
			<AddForm
				username={username}
				email={email}
				onChange={onChange}
				onCreateUser={onCreateUser}
			/>
			<AddableUserList users={users} />
			<div>활성 사용자 수 : {count}</div>
		</UserDispatch.Provider>
	);
}

export default App;
