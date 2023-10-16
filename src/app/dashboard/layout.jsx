import Navbar from "@/components/Navbar";
import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Layout({ children }) {
	const session = await getServerSession(authOptions);
	return (
		<>
			<Navbar user={session?.user} />
			<div className="px-10 py-6">{children}</div>
		</>
	);
}
