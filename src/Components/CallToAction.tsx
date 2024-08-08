"use client";
import helixImage from "@/assets/images/helix2.png";
import emojiStarImage from "@/assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	});

	// useEffect(() => {
	// 	scrollYProgress.on("change", (value) => console.log("value", value));
	// }, [scrollYProgress]);

	const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

	return (
		<div
			ref={containerRef}
			className="bg-black text-white py-[72px] sm:py-24 overflow-x-clip"
		>
			<div className="container max-w-xl mx-auto relative">
				<motion.div
					style={{ translateY }}
					className="relative"
					initial={{ translateY: 80 }}
				>
					<Image
						src={helixImage}
						alt="helix"
						className="absolute top-6 left-[calc(100%+36px)]"
					/>
				</motion.div>
				<motion.div
					style={{ translateY }}
					className="relative"
					initial={{ translateY: 80 }}
				>
					<Image
						src={emojiStarImage}
						alt="emoji star"
						className="absolute -top-[120px] right-[calc(100%+24px)]"
					/>
				</motion.div>
				<h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
					Get instant access
				</h2>
				<p className="text-center mt-5 text-xl text-white/70">
					Celebrate the joy of accomplishment with an app designed to
					track your progress and motivate your efforts.
				</p>
				<form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto px-5">
					<input
						type="email"
						placeholder="your@email.com"
						className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
					/>
					<button className="btn">Get access</button>
				</form>
			</div>
		</div>
	);
};
