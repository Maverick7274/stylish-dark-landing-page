import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";
import { Navbar } from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Stylish Dark Landing Page",
	description: "Neelanjan's Stylish Dark landing page.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(dmSans.className, "antialiased")}>
        <Navbar />
        {children}
        <Footer/>
        </body>
		</html>
	);
}
