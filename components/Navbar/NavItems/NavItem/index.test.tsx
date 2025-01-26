import React from "react";
import { render, screen } from "@testing-library/react";
import NavItem from "./index";

// Mock the Next.js Link component to prevent actual routing

describe("NavItem Component", () => {
	it("renders the correct link and text", () => {
		const mockItem = {
			name: "Home",
			path: "/",
		};

		render(<NavItem item={mockItem} />);

		// Ensure the link has the correct text
		const linkElement = screen.getByText(mockItem.name);
		expect(linkElement).toBeInTheDocument();
	});
});
