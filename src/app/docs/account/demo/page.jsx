"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";

export default function page() {
	return (
		<>
			<h1 className="text-3xl font-bold">Account Demo</h1>
			<div className="my-4">
				<span className="text-muted-foreground">
					Ingin mencoba aplikasi tanpa harus membuat akun?
				</span>
			</div>
			<div className="mt-4 space-y-4">
				<p className="font-medium text-lg">Apa itu Akun Demo?</p>
				<Separator />
				<p>
					"TokoKu" menyediakan layanan <i>Akun Demo</i> bagi anda yang
					ingin mecoba aplikasi kami tanpa harus membuat akun terlebih
					dahulu. Dengan Akun Demo ini, anda dapat mencoba semua fitur
					yang utama kami dan mendapat gambaran bagaimana cara
					aplikasi kami ini bekerja.
				</p>
			</div>
			<div className="mt-4 space-y-4">
				<p className="font-medium text-lg">
					Bagaimana cara mencoba Akun Demo?
				</p>
				<Separator />
				<p>
					Untuk mencoba Akun Demo ini, anda hanya harus melakukan
					beberapa hal.
				</p>
			</div>
		</>
	);
}
