import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from ".";

describe("Modal Component", () => {
	const mockOnClose = jest.fn();

	const renderModal = (isOpen: boolean, title?: string, children?: React.ReactNode) => {
		render(
			<Modal isOpen={isOpen} onClose={mockOnClose} title={title}>
				{children}
			</Modal>
		);
	};

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders modal when isOpen is true", () => {
		renderModal(true, "Test Title", <p>Test Content</p>);

		expect(screen.getByText("Test Title")).toBeInTheDocument();
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});

	it("does not render modal when isOpen is false", () => {
		renderModal(false);

		expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
	});

	it("calls onClose when backdrop is clicked", () => {
		renderModal(true);

		const backdrop = screen.getByRole("presentation");
		fireEvent.click(backdrop);

		expect(mockOnClose).toHaveBeenCalledTimes(1);
	});

	it("calls onClose when Escape key is pressed", () => {
		renderModal(true);

		fireEvent.keyDown(document, { key: "Escape" });

		expect(mockOnClose).toHaveBeenCalledTimes(1);
	});

	it("does not call onClose when a random key is pressed", () => {
		renderModal(true);

		fireEvent.keyDown(document, { key: "A" });

		expect(mockOnClose).not.toHaveBeenCalled();
	});
});
