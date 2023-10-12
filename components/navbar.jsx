"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

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
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Utama
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="w-max p-2 grid grid-cols-2 gap-2">
										<Link
											href={`/dashboard/data-barang`}
											className="p-2 hover:bg-muted transition-colors rounded text-sm"
										>
											Data Barang
										</Link>
										<Link
											href={`/dashboard/data-merchant`}
											className="p-2 hover:bg-muted transition-colors rounded text-sm"
										>
											Data Merchant
										</Link>
										<Link
											href={`/dashboard/transaksi/riwayat-transaski`}
											className="p-2 hover:bg-muted transition-colors rounded text-sm"
										>
											Riwayat Transaksi
										</Link>
										<Link
											href={`/dashboard/transaksi/baru`}
											className="p-2 hover:bg-muted transition-colors rounded text-sm"
										>
											Buat Transaksi Baru
										</Link>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<Link
						href="/docs"
						className="text-sm font-medium text-muted-foreground hover:underline"
					>
						Panduan Pengguna
					</Link>
				</div>
			</div>
			<div className="flex items-center h-full">
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarFallback>B</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
				</DropdownMenu>
			</div>
		</div>
	);
}
