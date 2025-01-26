import React from "react";
import { navItems } from "./navItems";
import NavItem from "./NavItem";
import styles from "../NavBar.module.scss";

const NavItems = () => {
	return (
		<div className={styles["nav-items"]}>
			{navItems.map((item) => {
				return <NavItem key={item.name} item={item} />;
			})}
		</div>
	);
};

export default NavItems;
