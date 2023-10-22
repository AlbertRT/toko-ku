"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button, Input } from "@nextui-org/react";

export default function page() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [isLoading, setLoading] = useState(false);

	const onSignIn = async () => {
		setLoading(true);
		const signInData = await signIn("credentials", {
			email,
			redirect: false,
		});
		if (signInData?.error) {
			setLoading(false);
			toast.error("Terjadi kesalahan saat Masuk...");
		} else {
			setLoading(false);
			router.push("/dashboard");
		}
	};
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="border shadow rounded h-max w-1/4 p-10">
				<div className="select-none font-bold text-xl">
					<p>Masuk Disini</p>
				</div>
				<div className="mt-4 flex flex-col space-y-4">
					<Input
						placeholder="example@mail.com"
						variant="bordered"
						label="Email"
						labelPlacement="inside"
						name="email"
						aria-label="email"
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mt-4">
					<Link href="daftar" className="text-sm hover:underline">
						Belum punya akun?
					</Link>
				</div>
				<div className="mt-4 flex justify-end space-x-4">
					<Button
						variant="flat"
						color="primary"
						className="w-full"
						isLoading={isLoading}
						onClick={onSignIn}
					>
						Masuk
					</Button>
				</div>
			</div>
		</div>
	);
}
