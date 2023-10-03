"use client";

import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { MoreVertical } from "lucide-react";

export default function DataTable({ cols, data }) {
	return (
		<div className="border rounded mt-4">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[10px]">No</TableHead>
						<TableHead className="w-[135px]">ID</TableHead>
						{cols.map((col, idx) => (
							<TableHead
								key={idx}
								className={col.className && col.className}
							>
								{col.field}
							</TableHead>
						))}
						<TableHead className="w-[5px]"></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{!data ? (
						<TableRow>
							<span className="w-full text-center">No Data</span>
						</TableRow>
					) : (
						data.map((obj, idx) => (
							<TableRow key={idx}>
								<TableCell>{idx < 9 ? (`0${idx + 1}`) : (idx + 1)}</TableCell>
								{Object.keys(obj).map((value, key) => {
									return <TableCell key={key}>{obj[value]}</TableCell>;
								})}
								<TableCell>
									<Button size="icon" variant="ghost">
										<MoreVertical className="h-4 w-4" />
									</Button>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
}
