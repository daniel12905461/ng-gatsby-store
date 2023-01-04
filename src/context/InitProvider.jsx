import React, { useState } from 'react';

export const InitContext = React.createContext({
	isNavOpen: false,
	closeNav: () => {},
	toggleNav: () => {},
});

export const InitProvider = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	function toggleNav() {
		setIsNavOpen(!isNavOpen);
		console.log(isNavOpen);
	}

	function closeNav() {
		setIsNavOpen(false);
	}

	const context = {
		isNavOpen,
		toggleNav,
		closeNav,
	};

	return <InitContext.Provider value={context}>{children}</InitContext.Provider>;
};
