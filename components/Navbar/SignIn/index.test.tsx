import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "./index"; // Adjust the path as needed

describe("SignIn Component", () => {
	it("renders the Login/Register text", () => {
		render(<SignIn />);

		expect(screen.getByText("Login / Register")).toBeInTheDocument();
	});

	it("has the correct className for styling", () => {
		render(<SignIn />);

		const signInElement = screen.getByTestId("login");
		expect(signInElement).toHaveClass("signin");
	});
});
