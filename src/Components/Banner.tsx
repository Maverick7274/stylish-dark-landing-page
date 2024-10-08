export const Banner = () => {
	return (
		<div className="py-3 text-center bg-[linear-gradient(to_right,rgb(254,_236,_255,_.7),rgb(254,_202,_255,_.7),rgb(254,_181,_255,_.7),rgb(255,_219,_231,_.7),rgb(255,_244,_214,_.7),rgb(243,_252,_215,_.7),rgb(210,_245,_238,_.7),rgb(195,_239,_255,_.7),rgb(251,_239,_255,_.7))]">
			<div className="container">
				<p className="font-medium">
					<span className="hidden sm:inline">
						This page is included in a free SaaS Website Kit. - {" "}
					</span>
					<a href="#" className="underline underline-offset-4">
						Explore the demo
					</a>
				</p>
			</div>
		</div>
	);
};
