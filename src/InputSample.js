import React, { useState } from "react";

function InputSample() {
	const [text, setText] = useState("");

	const onChange = e => {
		setText(e.target.value);
	};
	const onReset = () => {
		setText("");
	};
	return (
		<div>
			<input onChange={onChange} value={text} />
			<button onClick={onReset}>reset</button>
			<p>값 : {text}</p>
		</div>
	);
}

export default InputSample;
