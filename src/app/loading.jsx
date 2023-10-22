import Logo from "@/components/Logo";
import React from "react";

export default function loading() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="flex flex-col">
				<Logo width={"w-52"} height={"h-52"} />
			</div>
		</div>
	);
}
