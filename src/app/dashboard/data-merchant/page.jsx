import DataTable from "@/components/DataTable";
import { dataMerchantCols } from "@/lib/columns";
import React from "react";

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
				<DataTable columns={dataMerchantCols} data={rawDataMerchant} />
			</div>
		</>
	);
}
