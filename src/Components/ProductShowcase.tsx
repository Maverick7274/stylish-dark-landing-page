"use client";

import appScreen from "@/assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {

	const appImageRef = useRef<HTMLImageElement>(null);
	const { scrollYProgress } = useScroll({
		target: appImageRef,
		offset: ['start end', 'end end']
	});

	// useEffect(() => {
	// 	scrollYProgress.on('change', (latestValue) => {

	// 	});
	// }, [
	// 	scrollYProgress,
	// ]);

	const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

	const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<div ref={appImageRef} className="bg-gradient-to-b from-black to-[#5D2CA8] text-white py-[72px] sm:py-24">
			<div className="container">
				<h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
					Intuitive interface
				</h2>
				<div className="max-w-xl mx-auto">
					<p className="text-center mt-5 text-xl text-white/70">
						Celebrate the joy of accomplishment with an app designed
						to track your progress, motivate your efforts, and
						celebrate your successes, one task at a time.
					</p>
				</div>
                <motion.div style={{
					opacity: opacity,
					rotateX: rotateX,
					transformPerspective: "800px",
				}} 
				className="flex items-center justify-center">
                    <Image src={appScreen} alt="App Screen" className="mt-14"/>
                </motion.div>
			</div>
		</div>
	);
};
