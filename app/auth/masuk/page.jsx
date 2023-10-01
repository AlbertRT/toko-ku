"use client"

import React, { useState } from 'react'
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Link from 'next/link';

export default function page() {
    const [email, setEmail] = useState("")
  return (
    <div className="w-full h-screen flex items-center justify-center">
			<div className="border shadow rounded h-max w-max p-10">
				<div className="select-none font-bold text-xl">
					<p>Masuk Disini</p>
				</div>
                <div className="mt-4 flex flex-col space-y-4">
                    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-4">
                    <Link href="daftar" className="text-sm hover:underline">Belum punya akun?</Link>
                </div>
				<div className="mt-4 flex justify-end space-x-4">
                    <Button className="w-full" >Masuk</Button>
				</div>
			</div>
		</div>
  )
}
