import React from "react";

function Hello({ info, isNotProps, color }) {
	// console.log(props);
	return (
		<h1 style={{ color }}>
			{isNotProps ? <span>안녕하세요</span> : <span>잘가세요</span>} 제
			이름은 {info.name}. 나이는 {info.age}살 입니다.
		</h1>
	);
}

Hello.defaultProps = {
	info: {
		name: "park",
		age: 22
	}
};
export default Hello;
