import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { Feature } from "./Feature";

const features = [
	{
		logo: <EcosystemIcon />,
		title: "Integration ecosystem",
		description:
			"Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
	},
	{
		logo: <EcosystemIcon />,
		title: "Goal setting and tracking",
		description:
			"Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
	},
	{
		logo: <EcosystemIcon />,
		title: "Secure data encryption",
		description:
			"With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
	},
];

export const Features = () => {
	return (
		<div className="bg-black text-white py-[72px] sm:py-24">
			<div className="container">
				<h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
					Everything you need
				</h2>
				<div className="max-w-xl mx-auto">
					<p className="text-center mt-5 text-xl text-white/70">
						Enjoy customizable lists, team work tools, and smart
						tracking all in one place. Set tasks, get reminders, and
						see your progress simply and quickly.
					</p>
				</div>
				<div className="mt-16 flex flex-col sm:flex-row gap-4">
					{features.map((feature, index) => (
						<Feature 
							key={index}
							logo={feature.logo}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
