"use client";

import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";

export default function AddNewData({ children }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen} color="primary" variant="flat">
				Tambah Data
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					<ModalHeader>Modal</ModalHeader>
					<ModalBody>{children}</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
