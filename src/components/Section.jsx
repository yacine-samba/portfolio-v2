import React, { useState } from 'react';

export const Section = ({ children, background, title }) => {
	if (title) {
		return (
			<section className={`px-48 my-8 py-8 h-screen ${background}`}>
				<h1 className="text-5xl">{title}</h1>
				{children}
			</section>
		);
	} else {
		return (
			<section className={`px-48 my-8 py-8 h-screen ${background}`}>
				{children}
			</section>
		);
	}
};

export default Section;
