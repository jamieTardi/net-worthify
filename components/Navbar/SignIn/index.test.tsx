import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "./index"; // Adjust the path as needed

describe("SignIn Component", () => {
	it("renders the Login/Register text", () => {
		// Render the SignIn component
		render(<SignIn />);

		// Assert the text content is rendered
		expect(screen.getByText("Login / Register")).toBeInTheDocument();
	});

	it("has the correct className for styling", () => {
		// Render the SignIn component
		render(<SignIn />);

		// Assert the className is applied
		const signInElement = screen.getByTestId("login");
		expect(signInElement).toHaveClass("signin");
	});
});
