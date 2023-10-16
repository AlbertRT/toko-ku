"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	User,
} from "@nextui-org/react";
import {
	BoxIcon,
	ChevronDownIcon,
	FactoryIcon,
	LogOut,
	Settings2Icon,
	User2,
	User2Icon,
} from "lucide-react";

export default function Navbar({ user }) {
	return (
		<div className="flex h-10 w-full items-center p-10 justify-between">
			<div className="flex items-center-h-full">
				<Logo width={"w-16"} height={"h-16"} />
				<div className="flex ml-6 items-center space-x-3 h-">
					<Link
						href="/dashboard"
						className="text-sm font-medium text-muted-foreground hover:underline"
					>
						Dashboard
					</Link>
					<Dropdown>
						<DropdownTrigger>
							<Button
								variant="light"
								endContent={
									<ChevronDownIcon className="w-4 h-4" />
								}
							>
								Utama
							</Button>
						</DropdownTrigger>
						<DropdownMenu variant="flat">
							<DropdownItem
								as={Link}
								href="/dashboard/data-barang"
								startContent={<BoxIcon className="w-4 h-4" />}
								key="data-barang"
							>
								Data Barang
							</DropdownItem>
							<DropdownItem
								as={Link}
								href="/dashboard/data-merchant"
								startContent={
									<FactoryIcon className="w-4 h-4" />
								}
								key="data-merchant"
							>
								Data Merchant
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
			<div className="flex items-center h-full">
				<Dropdown>
					<DropdownTrigger>
						<User
							as="button"
							name={user.name}
							avatarProps={{
								src: user?.picture,
							}}
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="profile action" variant="flat">
						<DropdownSection title="Application" showDivider>
							<DropdownItem
								key="settings"
								startContent={
									<Settings2Icon className="w-4 h-4" />
								}
								as={Link}
								href="/dashboard/settings"
							>
								Settings
							</DropdownItem>
						</DropdownSection>
						<DropdownSection title="Account">
							<DropdownItem
								key="profile"
								startContent={<User2Icon className="w-4 h-4" />}
								as={Link}
								href="/dashboard/profile"
							>
								Profile
							</DropdownItem>
							<DropdownItem
								key="logout"
								startContent={<LogOut className="w-4 h-4" />}
								color="danger"
								className="text-danger"
							>
								Logout
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			</div>
		</div>
	);
}
