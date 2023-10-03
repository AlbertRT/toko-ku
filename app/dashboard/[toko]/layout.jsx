import Navbar from '@/components/navbar'
import React from 'react'

export default function Layout({ children }) {
  return (
		<>
			<Navbar />
			<div className="px-10 py-6">
				<div className="mt-4">{children}</div>
			</div>
		</>
  );
}
