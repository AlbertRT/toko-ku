"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
	const router = useRouter();
	const [formSteps, setFormSteps] = useState(2);
	const [currentSteps, setCurrentSteps] = useState(1);
	const [formData, setFormData] = useState({
		data_diri: {
			fullName: "",
			email: "",
			phone: "",
			address: "",
		},
		data_toko: {
			name: "",
			addrss: "",
			contact: "",
			description: "",
		},
	});

	const onChange = (e) => {
		const label = e.target.getAttribute("aria-label");
		const name = e.target.name;
		const value = e.target.value;

		setFormData((prev) => ({
			...prev,
			[label]: {
				...prev[label],
				[name]: value,
			},
		}));
	};
	const onSubmit = async () => {
		const response = await fetch("/api/user", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			router.push("masuk");
		} else {
			console.error(await response.json());
		}
	};

	const onNextStep = () => setCurrentSteps((prevStep) => prevStep + 1);
	const onPreviousStep = () => setCurrentSteps((prevStep) => prevStep - 1);

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="border shadow rounded h-max w-max p-10">
				<div className="select-none font-bold text-xl">
					<p>Daftar Disini</p>
				</div>
				<div className="mt-4 text-sm text-muted-foreground">
					Step {currentSteps}/2
				</div>
				<div className="mt-4">
					{currentSteps === 1 ? (
						<>
							<span className="select-none text-sm font-medium">
								Masukan data diri anda
							</span>
							<div className="mt-4 grid grid-cols-2 gap-4">
								<Input
									placeholder="John Doe"
									variant="bordered"
									label="Nama Lengkap"
									labelPlacement="inside"
									name="fullName"
									aria-label="data_diri"
									autoComplete="off"
									onChange={onChange}
									value={formData.data_diri.fullName}
								/>
								<Input
									placeholder="example@mail.com"
									variant="bordered"
									label="Email"
									labelPlacement="inside"
									name="email"
									aria-label="data_diri"
									autoComplete="off"
									onChange={onChange}
									value={formData.data_diri.email}
								/>
								<Input
									placeholder="081234567890"
									variant="bordered"
									label="No. HP"
									labelPlacement="inside"
									name="phone"
									aria-label="data_diri"
									autoComplete="off"
									onChange={onChange}
									value={formData.data_diri.phone}
								/>
								<Input
									placeholder="Alamat Lengkap"
									variant="bordered"
									label="Alamat"
									labelPlacement="inside"
									name="address"
									aria-label="data_diri"
									autoComplete="off"
									onChange={onChange}
									value={formData.data_diri.address}
								/>
							</div>
						</>
					) : (
						<>
							<span className="select-none text-sm font-medium">
								Masukan data Toko Anda
							</span>
							<div className="mt-4 grid grid-cols-2 gap-4">
								<Input
									placeholder="Masukan Nama Toko"
									variant="bordered"
									label="Nama Toko"
									labelPlacement="inside"
									name="name"
									aria-label="data_toko"
									autoComplete="off"
									onChange={onChange}
									value={formData.data_toko.name}
								/>
								<Input
									placeholder="Masukan Alamat Lengkap"
									variant="bordered"
									label="Alamat Toko"
									labelPlacement="inside"
									name="addrss"
									aria-label="data_toko"
									autoComplete="off"
									onChange={onChange}
									value={formData.data_toko.addrss}
								/>
								<Input
									placeholder="081234567890"
									variant="bordered"
									label="No.Toko"
									labelPlacement="inside"
									name="contact"
									aria-label="data_toko"
									autoComplete="off"
									onChange={onChange}
									className="col-span-2"
									value={formData.data_toko.contact}
								/>
								<Textarea
									placeholder="Deskripsi"
									variant="bordered"
									label="Deksripsi"
									labelPlacement="inside"
									name="description"
									aria-label="data_toko"
									autoComplete="off"
									onChange={onChange}
									className="col-span-2"
									value={formData.data_toko.description}
								/>
							</div>
						</>
					)}
				</div>
				<div className="mt-4">
					<Link href="masuk" className="text-sm hover:underline">
						Sudah pernah Mendaftar?
					</Link>
				</div>
				<div className="mt-4 flex justify-end space-x-4">
					{currentSteps === 1 ? (
						<Button
							variant="flat"
							color="primary"
							onClick={onNextStep}
						>
							Lanjut
						</Button>
					) : (
						<>
							<Button
								variant="bordered"
								disabled={currentSteps < formSteps}
								onClick={onPreviousStep}
							>
								Kembali
							</Button>
							<Button
								variant="flat"
								color="primary"
								onClick={onSubmit}
							>
								Daftar
							</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
