import React from 'react';

type TProps = {
	children: React.ReactNode;
};
const Home = ({ children }: TProps) => {
	return (
		<div>
			Home
			<main>{children}</main>
		</div>
	);
};

export default Home;
