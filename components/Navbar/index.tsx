import React from "react";
import styles from "./NavBar.module.css";

const Navbar = () => {
	console.log("hello");

	return (
		<div className={styles.container}>
			<div>
				<h1>Net-Worthify</h1>
			</div>
			<div></div>
		</div>
	);
};

export default Navbar;
