"use client";
import Image from "next/image";
import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";
import { motion } from "framer-motion";

const images = [
	{ src: acmeLogo, alt: "Acme" },
	{ src: quantumLogo, alt: "Quantum" },
	{ src: echoLogo, alt: "Echo" },
	{ src: celestialLogo, alt: "Celestial" },
	{ src: pulseLogo, alt: "Pulse" },
	{ src: apexLogo, alt: "Apex" },
];

export const LogoTicker = () => {
	return (
		<div className="bg-black text-white py-[72px] sm:py-24">
			<div className="container">
				<h2 className="text-xl text-center ">
					Trusted by the world&apos;s innovative teams
				</h2>
				<div className="overflow-hidden mt-9 before:content-[''] after:[''] before:z-10 before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
					<motion.div
						className="flex gap-16 flex-none pr-16"
						initial={{ translateX: 0 }}
						animate={{ translateX: "-50%" }}
						transition={{
							duration: 30,
							repeat: Infinity,
							ease: "linear",
						}}
					>
						{images.map((image, index) => (
							<Image
								key={index}
								src={image.src}
								alt={image.alt}
								className="flex-none h-8 w-auto"
							/>
						))}
						{images.map((image, index) => (
							<Image
								key={index}
								src={image.src}
								alt={image.alt}
								className="flex-none h-8 w-auto"
							/>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};
