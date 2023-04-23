import React from 'react';

export const Button = ({ children, anchor }) => {
	return (
		<>
			<a href={anchor}>
				<button className="p-4 rounded-md border border-neutral-600">
					{children}
				</button>
			</a>
		</>
	);
};

export default Button;
