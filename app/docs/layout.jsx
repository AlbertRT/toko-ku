"use client";
import SideBar from "@/components/docs/SideBar";
import { usePathname } from "next/navigation";
import React from "react";

export default function layout({ children }) {
	const params = usePathname();
	return (
		<div className="w-full h-full flex">
			<SideBar />
			<div className="p-4 pb-10 w-3/4">
				<div className="my-4 flex space-x-2 text-sm font-medium select-none">
					<span className="text-muted-foreground">Docs</span>
					<span className="text-muted-foreground">/</span>
					<span className="capitalize text-primary">
						{params.split("/")[2]}
					</span>
				</div>
				<div className="w-3/4">{children}</div>
			</div>
		</div>
	);
}
