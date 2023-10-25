"use client";
import DataTable from "@/components/DataTable";
import { dataMerchantCols } from "@/lib/columns";
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
import React from "react";
import { addMerchantServerAction } from "../../../../actions/actions";

function AddNew() {
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
							/>
							<Input
								placeholder="e.g Indofood TBK"
								variant="bordered"
								label="Supplier"
								labelPlacement="outside"
							/>
						</ModalBody>
						<ModalFooter>
							<Button
								color="success"
								variant="flat"
								type="submit"
								onSubmit={(e) => e.preventDefault()}
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

export default function page() {
	const rawDataMerchant = [
		{
			id: "4fa12fa",
			merchant: "Greenfield",
			total_produk: "39 item",
			supplier: "Suplier XYZ",
		},
	];

	return (
		<>
			<div className="flex flex-col">
				<span className="text-muted-foreground select-none text-sm uppercase">
					utama
				</span>
				<span className="font-bold select-none text-lg">
					Data Merchant
				</span>
			</div>
			<div className="my-4">
				<DataTable
					columns={dataMerchantCols}
					data={rawDataMerchant}
					addNewComponent={<AddNew />}
					initialColumns={["no", "merchant", "supplier", "action"]}
				/>
			</div>
		</>
	);
}
