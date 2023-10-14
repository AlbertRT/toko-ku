import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import { MoreVerticalIcon } from "lucide-react";

export const renderCell = (data, columnKey) => {
	const cellValue = data[columnKey];

	switch (columnKey) {
		case "action":
			return (
				<Dropdown>
					<DropdownTrigger>
						<Button isIconOnly variant="light" size="sm">
							<MoreVerticalIcon className="w-4 h-4" />
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-aria-label="Static">
						<DropdownItem key="edit">Edit</DropdownItem>
						<DropdownItem
							key="delete"
							color="danger"
							className="text-danger"
						>
							Delete
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			);
		default:
			return cellValue;
	}
};
