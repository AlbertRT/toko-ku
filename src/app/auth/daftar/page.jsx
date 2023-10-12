"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
									placeholder="Nama Lengkap"
									name="fullName"
									aria-label="data_diri"
									onChange={onChange}
									autoComplete="off"
									value={formData.data_diri.fullName}
								/>
								<Input
									placeholder="Email"
									name="email"
									aria-label="data_diri"
									onChange={onChange}
									autoComplete="off"
									value={formData.data_diri.email}
								/>
								<Input
									placeholder="No HP"
									name="phone"
									aria-label="data_diri"
									onChange={onChange}
									autoComplete="off"
									value={formData.data_diri.phone}
								/>
								<Input
									placeholder="Alamat"
									name="address"
									aria-label="data_diri"
									onChange={onChange}
									autoComplete="off"
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
									placeholder="Nama Toko"
									className="col-span-2"
									name="name"
									aria-label="data_toko"
									onChange={onChange}
									autoComplete="off"
									value={formData.data_toko.name}
								/>
								<Input
									placeholder="Alamat Toko"
									name="addrss"
									aria-label="data_toko"
									onChange={onChange}
									autoComplete="off"
									value={formData.data_toko.addrss}
								/>
								<Input
									placeholder="No Telp / Email Toko"
									name="contact"
									aria-label="data_toko"
									onChange={onChange}
									autoComplete="off"
									value={formData.data_toko.contact}
								/>
								<Textarea
									className="resize-none col-span-2 h-10"
									placeholder="Tentang Toko"
									name="description"
									aria-label="data_toko"
									value={formData.data_toko.description}
									onChange={onChange}
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
					<Button
						variant="outline"
						disabled={formSteps > currentSteps}
						onClick={onPreviousStep}
					>
						Kembali
					</Button>
					{currentSteps === 1 ? (
						<Button onClick={onNextStep}>Lanjut</Button>
					) : (
						<Button onClick={onSubmit}>Daftar</Button>
					)}
				</div>
			</div>
		</div>
	);
}
