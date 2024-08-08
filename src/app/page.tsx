import { Hero } from "@/Components/Hero";
import { LogoTicker } from "@/Components/LogoTicker";
import { Features } from "@/Components/Features";
import { ProductShowcase } from "@/Components/ProductShowcase";
import { FAQs } from "@/Components/FAQs";
import { CallToAction } from "@/Components/CallToAction";




export default function Home() {
	return (
		<main className="">
			<Hero/>
			<LogoTicker/>
			<Features/>
			<ProductShowcase/>
			<FAQs/>
			<CallToAction/>
		</main>
	);
}
