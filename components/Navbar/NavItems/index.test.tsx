import React from "react";
import { render, screen } from "@testing-library/react";
import NavItems from "./index";

// Mock the NavItem component using the technique described
jest.mock("./NavItem", () => {
	const MockNavItem = ({ item }: { item: { name: string } }) => <div data-testid="nav-item">{item.name}</div>;
	return MockNavItem;
});

jest.mock("../NavBar.module.scss", () => ({
	"nav-items": "nav-items",
}));

describe("NavItems Component", () => {
	test("renders the correct number of NavItem components", () => {
		// Mock the navItems array
		const mockNavItems = [{ name: "Home" }, { name: "Budget" }, { name: "Net Worth" }, { name: "FIRE Calculator" }];

		render(<NavItems />);

		// Check that each NavItem is rendered
		const renderedNavItems = screen.getAllByTestId("nav-item");
		expect(renderedNavItems).toHaveLength(mockNavItems.length);

		// Check that each item has the correct text
		mockNavItems.forEach((item, index) => {
			expect(renderedNavItems[index]).toHaveTextContent(item.name);
		});
	});
});
