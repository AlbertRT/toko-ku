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
	Pagination,
} from "@nextui-org/react";
import { renderCell } from "@/lib/renderCell";
import { ChevronDown, Mail, SearchIcon } from "lucide-react";

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
	const [filterBy, setFilterBy] = useState(
		columns.filter(
			(column) =>
				column.key !== "id" &&
				column.key !== "no" &&
				column.key !== "action"
		)
	);
	const [sortDescriptor, setSortDescriptor] = React.useState({
		column: "Nama Barang",
		direction: "ascending",
	});
	const [filterValue, setFilterValue] = useState("");
	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = useMemo(() => {
		if (visibleColumns === "all") return columns;

		return columns.filter((column) =>
			Array.from(visibleColumns).includes(column.key)
		);
	}, [visibleColumns]);

	const filteredItems = useMemo(() => {
		let filteredData = [...data];
		if (hasSearchFilter) {
			filteredData = filteredData.filter((data) =>
				data["nama_barang"]
					.toLowerCase()
					.includes(filterValue.toLowerCase())
			);
		}
		return filteredData;
	}, [data, filterValue, hasSearchFilter]);

	const rowsPerPage = 5;
	const [page, setPage] = useState(1);
	const pages = Math.ceil(filteredItems.length / rowsPerPage);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems]);

	const sortedItem = useMemo(() => {
		return [...items].sort((a, b) => {
			const first = a[sortDescriptor.column];
			const second = b[sortDescriptor.column];
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === "descending" ? -cmp : +cmp;
		});
	}, [sortDescriptor, items]);

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

	const bottomContent = useMemo(() => (
		<div className="flex w-full justify-end">
			<Pagination
				showControls
				page={page}
				total={pages}
				onChange={(page) => setPage(page)}
			/>
		</div>
	));

	return (
		<Table
			topContent={topContent}
			aria-label="data-table"
			isHeaderSticky
			sortDescriptor={sortDescriptor}
			onSortChange={setSortDescriptor}
			bottomContent={bottomContent}
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
			<TableBody items={sortedItem} emptyContent="No Data to display">
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
