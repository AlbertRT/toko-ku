"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

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

					<Link
						href="/docs"
						className="text-sm font-medium text-muted-foreground hover:underline"
					>
						Panduan Pengguna
					</Link>
				</div>
			</div>
			<div className="flex items-center h-full"></div>
		</div>
	);
}
