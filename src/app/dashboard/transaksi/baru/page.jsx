"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { formatRupiah } from "@/lib/formatRupiah";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("@/components/clock"), { ssr: false });

export default function page() {
	const [kembalian, setKembalian] = useState(0);
	const [jumlahUang, setJumlahUang] = useState(0);
	const [totalHarga, setTotalHarga] = useState(20000);
	const { toast } = useToast();

	const onUangChange = (e) => {
		const uang = parseInt(e.target.value);
		let kembali = uang - totalHarga;
		setJumlahUang(uang);
		if (isNaN(uang)) return;
		if (uang - totalHarga <= totalHarga) kembali = 0;
		setKembalian(kembali);
	};

	return (
		<div className="w-full">
			<div className="flex mb-8 justify-between items-center">
				<div className="select-none">
					<h2 className="text-2xl font-bold ">Transaski Baru</h2>
					<Clock />
				</div>
				<Button variant="outline">Buat Transaksi Baru</Button>
			</div>
			<div className="flex space-x-5">
				<div className="rounded border flex-[1] shadow h-max">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>No</TableHead>
								<TableHead>Item</TableHead>
								<TableHead>Kuantitas</TableHead>
								<TableHead>Harga</TableHead>
							</TableRow>
						</TableHeader>
					</Table>
				</div>
				<div className="rounded border shadow flex-[0.5] p-5 h-max">
					<ul className="list-none mb-4">
						<li className="flex justify-between items-center">
							<p className="select-none">Item</p>
							<p className="select-none font-medium">0</p>
						</li>
						<li className="flex justify-between items-center">
							<p className="select-none">Total Harga</p>
							<p className="select-none font-medium">Rp 0</p>
						</li>
					</ul>
					<Separator />
					<Select>
						<SelectTrigger className="my-4">
							<SelectValue placeholder="Pilih Metode Pembayaran" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="cash">Cash</SelectItem>
						</SelectContent>
					</Select>
					<Separator />
					<Dialog>
						<DialogTrigger asChild>
							<Button className="w-full mt-4">Lanjut</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Selesaikan Pembayaran</DialogTitle>
								<DialogDescription>
									Masukan jumlah uang
								</DialogDescription>
								<div className="flex items-center justify-between">
									<p>Total Harga</p>
									<p>{formatRupiah(totalHarga)}</p>
								</div>
								<div className="flex items-center justify-between">
									<p>Jumlah Uang</p>
									<p>{formatRupiah(jumlahUang)}</p>
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<p className="font-bold">Total Kembali</p>
									<p className="text-primary">
										{formatRupiah(kembalian)}
									</p>
								</div>
								<Separator />
								<Input
									placeholder="Masukan Jumlah Uang"
									onChange={onUangChange}
								/>
							</DialogHeader>
							<DialogFooter>
								<Button className="w-full">Bayar</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
}
