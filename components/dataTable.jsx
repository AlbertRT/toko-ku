"use client";

import React from "react";
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Button,
} from "@nextui-org/react";
import { MoreVertical } from "lucide-react";

export default function DataTable({ cols, data }) {
	return (
		<Table>
			<TableHeader>
				<TableColumn>No</TableColumn>
				<TableColumn>ID</TableColumn>
				{cols.map((col, idx) => (
					<TableColumn key={idx}>{col.field}</TableColumn>
				))}
				<TableColumn></TableColumn>
			</TableHeader>
			<TableBody>
				{data.map((obj, idx) => (
					<TableRow key={idx}>
						<TableCell>
							{idx < 9 ? `0${idx + 1}` : idx + 1}
						</TableCell>
						{Object.keys(obj).map((value, key) => {
							return (
								<TableCell key={key}>{obj[value]}</TableCell>
							);
						})}
						<TableCell>
							<Button isIconOnly size="sm" variant="light">
								<MoreVertical className="w-4 h-4" />
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
