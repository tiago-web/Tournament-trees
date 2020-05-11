import React, { useState } from "react";

const Input = props => {
	return (
		<input
			type={props.type}
			name={props.name}
			placeholder={props.placeholder}
			value={props.value}
			onClick={() => {
				props.onChange(props.value);
			}}
		/>
	);
};

export default Input;
