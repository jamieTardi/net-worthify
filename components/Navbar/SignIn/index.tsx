import React from "react";
import styles from "../NavBar.module.scss";

const SignIn = () => {
	return (
		<div className={styles.signin} data-testid="login">
			Login / Register
		</div>
	);
};

export default SignIn;
