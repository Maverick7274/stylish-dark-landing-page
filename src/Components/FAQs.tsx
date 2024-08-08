"use client";

import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import { cn } from "@/libs/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
	{
		question: "How can I get started?",
		answer: "You can get started by creating an account on our platform. Once you have created an account, you can start setting your goals and tracking your progress.",
	},
	{
		question: "Is my data secure?",
		answer: "Yes, your data is securely stored and protected from unauthorized access. We use end-to-end encryption to ensure that your data is safe.",
	},
	{
		question: "Can I integrate with other tools?",
		answer: "Yes, you can integrate with your favorite tools to enhance your productivity. Keep all your essentials in one place by connecting with other tools.",
	},
	{
		question: "How can I track my progress?",
		answer: "You can track your progress by setting goals and breaking down objectives into achievable tasks. Keep your targets in sight by tracking your progress.",
	},
	{
		question: "Do you offer customer support?",
		answer: "Yes, we offer customer support to help you with any questions or issues you may have. Our team is available to assist you with any inquiries.",
	},
];

const AccordionItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="mt-16">
			<div className="">
				<div
					className="flex items-center py-7 border-b border-white/30 cursor-pointer select-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span className="flex-1">
						<h3 className="font-bold text-lg sm:text-3xl tracking-tighter">
							{question}
						</h3>
					</span>
					{isOpen ? <MinusIcon /> : <PlusIcon />}
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0, marginTop: 0 }}
							animate={{
								opacity: 1,
								height: "auto",
								marginTop: "16px",
							}}
							exit={{ opacity: 0, height: 0, marginTop: 0 }}
						>
							<p>{answer}</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export const FAQs = () => {
	return (
		<div className="bg-gradient-to-b from-[#5D2CA8] to-black text-white py-[72px] sm:py-24">
			<div className="container">
				<h2 className="text-center max-w-[648px] mx-auto font-bold text-5xl sm:text-6xl tracking-tighter">
					Frequently asked questions
				</h2>
				<div className="mt-12 max-w-[648px] mx-auto ">
					{items.map((item, index) => (
						<AccordionItem
							key={index}
							question={item.question}
							answer={item.answer}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
