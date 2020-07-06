import React, { createContext, useContext } from "react";

const context = createContext();

function Child({ text }) {
	const myContext = useContext(context);
	return <div>안녕하세요 나는 {myContext} 입니다.</div>;
}

function Parent({ text }) {
	const myContext = useContext(context);
	return <div>ㅇㅇ{myContext}</div>;
}
function GrandParent({ text }) {
	return <Parent text={text} />;
}
function ContextSample({ text }) {
	return (
		<context.Provider value="koo">
			<GrandParent />
		</context.Provider>
	);
}

export default ContextSample;
