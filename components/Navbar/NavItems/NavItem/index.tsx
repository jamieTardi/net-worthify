import React from "react";
import { TNavItem } from "../../../../types/components/navbar";
import Link from "next/link";

type TProps = {
	item: TNavItem;
};

const NavItem = ({ item }: TProps) => {
	return <Link href={item.path}>{item.name}</Link>;
};

export default NavItem;
