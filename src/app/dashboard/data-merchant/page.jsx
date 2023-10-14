import DataTable from "@/components/DataTable";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function page() {
	const dataMerchantCols = [
		{
			field: "Merchant",
		},
		{
			field: "Total Produk",
			className: "w-[150px]",
		},
		{
			field: "Supplier",
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
					Data Merchant
				</span>
			</div>
			<div className="my-4 border shadow rounded p-5">
				<div className="flex justify-between items-center mt-4">
					<p className="font-medium text-muted-foreground ">
						Data Merchant
					</p>
					<Button>
						<Plus className="mr-2 h-5 w-5" />
						Tambah Merchant
					</Button>
				</div>
				<DataTable cols={dataMerchantCols} data={rawDataMerchant} />
			</div>
		</>
	);
}
