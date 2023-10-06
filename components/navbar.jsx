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
import { useParams } from "next/navigation";

export default function Navbar() {
    const {toko} = useParams()
	return (
		<div className="flex h-10 w-full items-center p-10">
			<Logo width={"w-16"} height={"h-16"} />
			<div className="flex ml-6 items-center space-x-3 h-">
				<Link
					href="/dashboard/warung-joko"
					className="text-sm font-medium text-muted-foreground hover:underline"
				>
					Dashboard
				</Link>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Utama</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className="w-max p-2 grid grid-cols-2 gap-2">
									<Link
										href={`/dashboard/${toko}/data-barang`}
										className="p-2 hover:bg-muted transition-colors rounded text-sm"
									>
										Data Barang
									</Link>
									<Link
										href={`/dashboard/${toko}/data-merchant`}
										className="p-2 hover:bg-muted transition-colors rounded text-sm"
									>
										Data Merchant
									</Link>
									<Link
										href={`/dashboard/${toko}/transaksi/riwayat-transaski`}
										className="p-2 hover:bg-muted transition-colors rounded text-sm"
									>
										Riwayat Transaksi
									</Link>
									<Link
										href={`/dashboard/${toko}/transaksi/baru`}
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
	);
}
