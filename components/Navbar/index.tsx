import React from "react";
import styles from "./NavBar.module.scss";
import NavItems from "./NavItems";
import SignIn from "./SignIn";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__logo}>
				<h1>Net-Worthify</h1>
			</div>
			<div className={styles.navbar__links}>
				<NavItems />
			</div>
			<div className={styles.navbar__signIn}>
				<SignIn />
			</div>
		</div>
	);
};

export default Navbar;
