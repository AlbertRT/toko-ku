"use client";

import React, { useMemo, useState } from "react";
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Input,
	Dropdown,
	DropdownTrigger,
	Button,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import { renderCell } from "@/lib/renderCell";
import { ChevronDown, SearchIcon } from "lucide-react";

const INITIAL_VISIBLE_COLUMNS = [
	"no",
	"nama_barang",
	"kuantitas",
	"kategori",
	"harga",
	"action",
];

export default function DataTable({ columns, data }) {
	const [visibleColumns, setVisibleColumns] = useState(
		new Set(INITIAL_VISIBLE_COLUMNS)
	);
	const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
	const [sortDescriptor, setSortDescriptor] = React.useState({
		column: "age",
		direction: "ascending",
	});

	const headerColumns = useMemo(() => {
		if (visibleColumns === "all") return columns;

		return columns.filter((column) =>
			Array.from(visibleColumns).includes(column.key)
		);
	}, [visibleColumns]);

	// const items = useMemo(() => {

	// })

	// const sortedItem = useMemo(() => {
	//     return [...items] =
	// }, [sortDescriptor, items])

	const topContent = useMemo(() => {
		return (
			<div className="flex gap-4 flex-col">
				<div className="flex gap-3">
					<Input
						isClearable
						placeholder="Cari Barang"
						startContent={<SearchIcon className="w-4 h-4" />}
						className="max-w-[40%]"
					/>
					<Dropdown>
						<DropdownTrigger>
							<Button
								variant="flat"
								endContent={<ChevronDown className="w-4 h-4" />}
							>
								Columns
							</Button>
						</DropdownTrigger>
						<DropdownMenu
							disallowEmptySelection
							aria-label="dropdown-table-column"
							closeOnSelect={false}
							selectedKeys={visibleColumns}
							selectionMode="multiple"
							onSelectionChange={setVisibleColumns}
						>
							{columns.map((column) => (
								<DropdownItem key={column.key}>
									{column.label}
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
		);
	}, [data.length, visibleColumns]);
	return (
		<Table
			topContent={topContent}
			aria-label="data-table"
			isHeaderSticky
			sortDescriptor={sortDescriptor}
			onSortChange={setSortDescriptor}
		>
			<TableHeader columns={headerColumns}>
				{(column) => (
					<TableColumn
						key={column.key}
						allowsSorting={column.sortAble}
					>
						{column.label}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={data} emptyContent="No Data to display">
				{(item) => (
					<TableRow key={item.key}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
