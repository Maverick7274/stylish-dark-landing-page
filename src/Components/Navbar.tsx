import logoImage from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";

import Image from "next/image";
import { Banner } from "./Banner";

export const Navbar = () => {
	return (
		<header className="">
			<Banner />
			<div className="bg-black">
				<div className="px-4">
					<div className="py-4 flex items-center justify-between">
						<div className="relative">
							<div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
							<Image
								src={logoImage}
								alt="logo"
								className="h-12 w-12 relative"
							/>
						</div>
						<div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
							<MenuIcon className="text-white" />
						</div>
						<nav className="gap-6 items-center hidden sm:flex">
							<a
								href="#"
								className="text-white text-opacity-60 hover:text-opacity-100 transition"
							>
								Home
							</a>
							<a
								href="#"
								className="text-white text-opacity-60 hover:text-opacity-100 transition"
							>
								About
							</a>
							<a
								href="#"
								className="text-white text-opacity-60 hover:text-opacity-100 transition"
							>
								Features
							</a>
							<a
								href="#"
								className="text-white text-opacity-60 hover:text-opacity-100 transition"
							>
								Updates
							</a>
							<a
								href="#"
								className="text-white text-opacity-60 hover:text-opacity-100 transition"
							>
								Help
							</a>
							<a
								href="#"
								className="text-white text-opacity-60 hover:text-opacity-100 transition"
							>
								Customers
							</a>
							<button className="btn">Get for free</button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
