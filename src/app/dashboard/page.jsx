"use client";

import DataTable from "@/components/DataTable";
import { dataBarangColumns, dataMerchantCols } from "@/lib/columns";
import { Tab, Tabs } from "@nextui-org/react";

export default function page() {
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
					Data Barang dan Merchant
				</span>
			</div>
			<Tabs
				aria-label="dashboard table"
				className="mt-4"
				variant="bordered"
			>
				<Tab key="data-barang" title="Barang">
					<DataTable
						columns={dataBarangColumns}
						data={rawDataBarang}
					/>
				</Tab>
				<Tab key="data-merchant" title="Merchant">
					<DataTable
						columns={dataMerchantCols}
						data={rawDataMerchant}
					/>
				</Tab>
			</Tabs>
		</>
	);
}
