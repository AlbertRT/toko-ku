"use client";
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import { addMerchantServerAction } from "@/actions/actions";
export function AddNew() {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} variant="flat" color="primary">
				Tambah Data
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					<ModalHeader>Tambah Merchant</ModalHeader>
					<form action={addMerchantServerAction}>
						<ModalBody>
							<Input
								placeholder="e.g Greenfield"
								variant="bordered"
								label="Merchant"
								labelPlacement="outside"
								name="merchant"
								autoComplete="off"
							/>
							<Input
								placeholder="e.g Indofood TBK"
								variant="bordered"
								label="Supplier"
								labelPlacement="outside"
								name="supplier"
								autoComplete="off"
							/>
						</ModalBody>
						<ModalFooter>
							<Button
								color="success"
								variant="flat"
								type="submit"
							>
								Tambah
							</Button>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	);
}
