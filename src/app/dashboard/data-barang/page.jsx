import DataTable from "@/components/DataTable";
import React from "react";
import { dataBarangColumns } from "@/lib/columns";

export default function page() {
	const rawDataBarang = [
		{
			no: 1,
			id: "f913egfa",
			nama_barang: "Susu UHT Greenfield Fullcream",
			kuantitas: "39 item",
			merchant: "Greenfield",
			kategori: "Susu UHT",
			harga: 7900,
		},
		{
			no: 2,
			id: "abc123",
			nama_barang: "Mie Instan Indomie Rasa Ayam Bawang",
			kuantitas: "50 item",
			merchant: "Indomaret",
			kategori: "Mie Instan",
			harga: 2500,
		},

		{
			no: 3,
			id: "def456",
			nama_barang: "Telur Ayam Kampung",
			kuantitas: "30 butir",
			merchant: "Pasar Tradisional",
			kategori: "Telur",
			harga: 2000,
		},
		{
			no: 4,
			id: "ghi789",
			nama_barang: "Beras Jasmine Premium",
			kuantitas: "10 kg",
			merchant: "Supermarket XYZ",
			kategori: "Beras",
			harga: 25000,
		},

		{
			no: 5,
			id: "jkl012",
			nama_barang: "Minyak Goreng Bimoli Botol 1 Liter",
			kuantitas: "20 botol",
			merchant: "Warung Pak Slamet",
			kategori: "Minyak Goreng",
			harga: 12000,
		},

		{
			no: 6,
			id: "mno345",
			nama_barang: "Gula Pasir",
			kuantitas: "5 kg",
			merchant: "Pasar Tradisional",
			kategori: "Gula",
			harga: 8000,
		},

		{
			no: 7,
			id: "pqr678",
			nama_barang: "Roti Tawar Gardenia",
			kuantitas: "15 bungkus",
			merchant: "Supermarket ABC",
			kategori: "Roti",
			harga: 10500,
		},

		{
			no: 8,
			id: "stu901",
			nama_barang: "Kopi Kapal Api Special Mix",
			kuantitas: "10 sachet",
			merchant: "Warung Kopi Jaya",
			kategori: "Kopi",
			harga: 5.0,
		},

		{
			no: 9,
			id: "vwx234",
			nama_barang: "Sarden ABC Kaleng",
			kuantitas: "25 kaleng",
			merchant: "Minimarket XYZ",
			kategori: "Sarden",
			harga: 6.5,
		},

		{
			no: 10,
			id: "yz0123",
			nama_barang: "Sabun Mandi Lifebuoy",
			kuantitas: "40 pcs",
			merchant: "Apotek Sehat Sentosa",
			kategori: "Sabun Mandi",
			harga: 3500,
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
			<div className="my-4">
				<DataTable
					columns={dataBarangColumns}
					data={rawDataBarang}
					initialColumns={[
						"no",
						"nama_barang",
						"kuantitas",
						"kategori",
						"harga",
						"action",
					]}
				/>
			</div>
		</>
	);
}
