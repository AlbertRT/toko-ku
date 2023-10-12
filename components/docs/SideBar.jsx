"use client"
import { ScrollArea } from '@radix-ui/react-scroll-area'
import Link from 'next/link';
import React from 'react'

export default function SideBar() {
  return (
		<ScrollArea className="h-screen w-1/4">
			<div className="w-full p-10">
				<div className="mb-4">
					<div className="select-none font-bold text-sm">
						Getting Started
					</div>
					<ul className="list-none text-sm mt-3 font-medium">
						<li>
							<Link
								href="/docs/changelog"
								className="text-muted-foreground hover:underline"
							>
								Changelog
							</Link>
						</li>
						<li>
							<Link
								href="/docs/about"
								className="text-muted-foreground hover:underline"
							>
								About
							</Link>
						</li>
					</ul>
				</div>
				<div className="mb-4">
					<div className="select-none font-bold text-sm">Account</div>
					<ul className="list-none text-sm mt-3 font-medium">
						<li>
							<Link
								href="/docs/account/demo"
								className="text-muted-foreground hover:underline"
							>
								Demo Account
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</ScrollArea>
  );
}
