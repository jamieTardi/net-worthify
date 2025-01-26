"use client";
import React, { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Modal.module.scss";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}

		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	return (
		<AnimatePresence>
			{isOpen && (
				<div className={styles.modal}>
					<motion.div
						className={styles.modal__backdrop}
						role="presentation"
						onClick={onClose}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>

					<motion.div
						className={styles.modal__content}
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ type: "spring", stiffness: 300, damping: 25 }}
					>
						{title && <h2 className={styles.modal__title}>{title}</h2>}

						<div className={styles.modal__children}>{children}</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
