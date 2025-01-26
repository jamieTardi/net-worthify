import React from "react";
import styles from "../NavBar.module.scss";
import Link from "next/link";

const SignIn = () => {
	return (
		<Link href={"/authentication/login"} className={styles.signin} data-testid="login">
			Login / Register
		</Link>
	);
};

export default SignIn;
