import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./index";

jest.mock("./NavItems", () => {
	const MockNavItems = () => <div data-testid="nav-items" />;
	return MockNavItems;
});

jest.mock("./SignIn", () => {
	const MockSignInBtn = () => <button data-testid="sign-in-button">Sign In</button>;
	return MockSignInBtn;
});

describe("Navbar", () => {
	it("renders the Navbar with logo, nav items, and sign-in button", () => {
		render(<Navbar />);

		expect(screen.getByText("Net-Worthify")).toBeInTheDocument();

		expect(screen.getByTestId("nav-items")).toBeInTheDocument();

		expect(screen.getByTestId("sign-in-button")).toBeInTheDocument();
	});
});
