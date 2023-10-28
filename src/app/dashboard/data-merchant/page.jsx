import DataTable from "@/components/DataTable";
import { dataMerchantCols } from "@/lib/columns";
import React from "react";
import { AddNew } from "./component/AddNew";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

async function getMerchant() {
	const session = await getServerSession(authOptions);

	try {
		const { toko_id } = await db.user.findUnique({
			where: { email: session?.user.email },
		});

		const data = await db.merchant.findMany({ where: { toko_id } });
		const response = data.map((item, index) => ({
			no: index + 1,
			id: item.node_id,
			merchant: item.name,
			supplier: item.supplier,
		}));

		return response;
	} catch (error) {
		console.log(error);
	}
}

export default async function page() {
	const data = await getMerchant();

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
				<DataTable
					columns={dataMerchantCols}
					data={data}
					addNewComponent={<AddNew />}
					initialColumns={["no", "merchant", "supplier", "action"]}
				/>
			</div>
		</>
	);
}
