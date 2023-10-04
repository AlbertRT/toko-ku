"use client"
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react'
import { Github } from 'lucide-react';

export default function page() {
  return (
		<>
			<h1 className="text-3xl font-bold">About</h1>
			<div className="my-4">
				<span className="text-muted-foreground">
					TokoKu - Kelola Stok dengan Lebih Mudah
				</span>
			</div>
			<div className="mt-4 space-y-4">
				<p className="font-medium text-lg">Tentang TokoKu</p>
				<Separator />
				<p>
					Selamat datang di "TokoKu" - solusi lengkap untuk membantu
					Anda, para pengusaha warung dan toko, dalam mengelola stok
					barang, mencatat riwayat transaksi, dan menyediakan
					pengalaman belanja yang lebih baik bagi pelanggan Anda.
				</p>
			</div>
			<div className="mt-10 space-y-4">
				<p className="font-medium text-lg">Visi & Misi TokoKu</p>
				<Separator />
				<p>
					Visi kami adalah untuk mendukung pertumbuhan bisnis Anda
					dengan memberikan alat yang efisien dan mudah digunakan
					untuk mengelola toko Anda. Kami memahami betapa pentingnya
					pengelolaan stok dan catatan transaksi yang baik dalam
					menjalankan bisnis Anda.
				</p>
				<p>Misi Kami Adalah: </p>
				<ul className="list-decimal">
					<li>
						<p className="font-bold">Mengelola Stok dengan Mudah</p>
						<p>
							Kami membantu Anda melacak stok barang dengan cepat
							dan akurat sehingga Anda tidak pernah kehabisan
							barang atau memiliki kelebihan stok yang tidak
							perlu.
						</p>
					</li>
					<li>
						<p className="font-bold">Mencatat Riwayat Transaksi</p>
						<p>
							Dengan "TokoKu", Anda dapat mencatat setiap
							transaksi dengan mudah. Ini membantu Anda untuk
							memahami tren penjualan dan mengambil keputusan yang
							lebih baik dalam bisnis Anda.
						</p>
					</li>
					<li>
						<p className="font-bold">
							Pelayanan Pelanggan yang Lebih Baik
						</p>
						<p>
							Kami memungkinkan Anda untuk memberikan pelayanan
							yang lebih baik kepada pelanggan Anda dengan akses
							cepat ke informasi stok dan riwayat pembelian
							mereka.
						</p>
					</li>
				</ul>
			</div>
			<div className="mt-10 space-y-4">
				<p className="font-medium text-lg">Fitur Utama TokoKu</p>
				<Separator />
				<ul className="list-decimal">
					<li>
						<p className="font-bold">Manajemen Stok</p>
						<p>
							Tambahkan, hapus, dan update stok barang dengan
							mudah. Pantau stok minimum dan terima pemberitahuan
							saat barang hampir habis.
						</p>
					</li>
					<li>
						<p className="font-bold">Catatan Transaksi</p>
						<p>
							Catat semua transaksi dengan tanggal, item yang
							dibeli, dan jumlah harga.
						</p>
					</li>
					<li>
						<p className="font-bold">Penggunaan yang Mudah</p>
						<p>
							Aplikasi ini dirancang untuk penggunaan yang mudah.
							Tidak perlu pengetahuan teknis yang mendalam untuk
							menggunakannya.
						</p>
					</li>
				</ul>
			</div>
			<div className="mt-10 space-y-4">
				<p className="font-medium text-lg">Powered by</p>
				<Separator />
				<ul className="list-disc">
					<li>
						<Link
							href="https://nextjs.org/"
							className="underline underline-offset-2"
						>
							Next JS
						</Link>
					</li>
					<li>
						<Link
							href="https://ui.shadcn.com/"
							className="underline underline-offset-2"
						>
							shadcn/ui
						</Link>
					</li>
					<li>
						<Link
							href="https://tailwindcss.com/"
							className="underline underline-offset-2"
						>
							Tailwind CSS
						</Link>
					</li>
				</ul>
			</div>
			<div className="mt-10 space-y-4">
				<Link
					className="font-medium text-lg flex items-center underline underline-offset-2"
					href="https://github.com/AlbertRT/toko-ku"
				>
					<Github className='w-4 h-4 mr-2' />
					Github
				</Link>
				<Separator />
			</div>
		</>
  );
}
