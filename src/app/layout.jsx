import { Toaster } from "sonner";
import "./globals.css";
import localFont from "next/font/local";
import Providers from "./providers";

const inter = localFont({ src: "./font/Inter-Regular.ttf" });

export const metadata = {
	title: "TokoKu",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Providers>
					{children}
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
