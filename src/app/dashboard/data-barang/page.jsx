"use client";

import DataTable from "@/components/dataTable";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function page() {
	const dataBarangCols = [
		{
			field: "Nama Barang",
		},
		{
			field: "Kuantitas",
			className: "w-[110px]",
		},
		{
			field: "Merchant",
		},
		{
			field: "Kategori",
		},
		{
			field: "Harga",
		},
	];
	const rawDataBarang = [
		{
			id: "f913egfa",
			nama_barang: "Susu UHT Greenfield Fullcream",
			kuantitas: "39 item",
			merchant: "Greenfield",
			kategori: "Susu UHT",
			harga: "7.900 /item",
		},
		{
			id: "abc123",
			nama_barang: "Mie Instan Indomie Rasa Ayam Bawang",
			kuantitas: "50 item",
			merchant: "Indomaret",
			kategori: "Mie Instan",
			harga: "2.500 /item",
		},

		{
			id: "def456",
			nama_barang: "Telur Ayam Kampung",
			kuantitas: "30 butir",
			merchant: "Pasar Tradisional",
			kategori: "Telur",
			harga: "2.000 /butir",
		},

		,
		{
			id: "ghi789",
			nama_barang: "Beras Jasmine Premium",
			kuantitas: "10 kg",
			merchant: "Supermarket XYZ",
			kategori: "Beras",
			harga: "25.000 /kg",
		},

		{
			id: "jkl012",
			nama_barang: "Minyak Goreng Bimoli Botol 1 Liter",
			kuantitas: "20 botol",
			merchant: "Warung Pak Slamet",
			kategori: "Minyak Goreng",
			harga: "12.000 /botol",
		},

		{
			id: "mno345",
			nama_barang: "Gula Pasir",
			kuantitas: "5 kg",
			merchant: "Pasar Tradisional",
			kategori: "Gula",
			harga: "8.000 /kg",
		},

		{
			id: "pqr678",
			nama_barang: "Roti Tawar Gardenia",
			kuantitas: "15 bungkus",
			merchant: "Supermarket ABC",
			kategori: "Roti",
			harga: "10.500 /bungkus",
		},

		{
			id: "stu901",
			nama_barang: "Kopi Kapal Api Special Mix",
			kuantitas: "10 sachet",
			merchant: "Warung Kopi Jaya",
			kategori: "Kopi",
			harga: "5.000 /sachet",
		},

		{
			id: "vwx234",
			nama_barang: "Sarden ABC Kaleng",
			kuantitas: "25 kaleng",
			merchant: "Minimarket XYZ",
			kategori: "Sarden",
			harga: "6.500 /kaleng",
		},

		{
			id: "yz0123",
			nama_barang: "Sabun Mandi Lifebuoy",
			kuantitas: "40 pcs",
			merchant: "Apotek Sehat Sentosa",
			kategori: "Sabun Mandi",
			harga: "3.500 /pcs",
		},
	];

	return (
		<>
			<div className="flex flex-col">
				<span className="text-muted-foreground select-none text-sm uppercase">
					utama
				</span>
				<span className="font-bold select-none text-lg">
					Data Barang
				</span>
			</div>
			<div className="my-4 border shadow rounded p-5">
				<div className="flex justify-between items-center mt-4">
					<p className="font-medium text-muted-foreground ">
						Data Barang
					</p>
					<Button>
						<Plus className="mr-2 h-5 w-5" />
						Tambah Barang
					</Button>
				</div>
				<DataTable cols={dataBarangCols} data={rawDataBarang} />
			</div>
		</>
	);
}
