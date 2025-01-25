import { TNavItem } from "../../../types/components/navbar";

export const navItems: TNavItem[] = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Budget",
		path: "/budget",
		featureFlag: "budget",
	},
	{
		name: "Net Worth",
		path: "/net-worth",
		featureFlag: "net-worth",
	},
	{
		name: "FIRE Calculator",
		path: "/fire-calculator",
		featureFlag: "fire-calculator",
	},
];
