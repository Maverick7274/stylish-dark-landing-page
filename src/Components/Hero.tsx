"use client";

import ArrowIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
	return (
		<div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_35%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-clip">
			<div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] sm:py-24 rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
			<div className="container relative">
				<div className="flex items-center justify-center">
					<a href="#" className="tag inline-flex gap-3">
						<span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
							Version 2.0 is here
						</span>
						<span className="inline-flex items-center gap-1 justify-center">
							Read More
							<ArrowIcon className="" />
						</span>
					</a>
				</div>
				<div className="flex justify-center mt-8">
					<div className="inline-flex relative">
						<h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
							One task <br /> at a time
						</h1>
						<motion.div
							className="absolute right-[476px] top-[108px] hidden sm:inline cursor-grab active:cursor-grabbing"
							drag
							// dragSnapToOrigin
						>
							<Image
								className="max-w-none"
								src={cursorImage}
								alt="Cursor"
								height={200}
								draggable={false}
							/>
						</motion.div>
						<motion.div
							className="absolute top-[56px] left-[498px] hidden sm:inline cursor-grab active:cursor-grabbing"
							drag
							// dragSnapToOrigin
						>
							<Image
								className="max-w-none"
								src={messageImage}
								alt="Cursor"
								height={200}
								draggable={false}
							/>
						</motion.div>
					</div>
				</div>
				<div className="flex justify-center">
					<p className="text-center text-xl mt-8 max-w-md">
						Celebrate the joy of accomplishment with an app designed
						to track your progress, motivate your efforts, and
						celebrate your successes.
					</p>
				</div>
				<div className="flex justify-center mt-8">
					<button className="btn font-medium">Get for free</button>
				</div>
			</div>
		</div>
	);
};
