import { Compass } from "lucide-react";
import { siteConfig } from "../../lib/constants";

export function HeroSection() {
	return (
		<section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-0 -left-4 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-30" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
			</div>

			<div className="max-w-7xl mx-auto">
				<div className="text-center">
					{/* Icon */}
					<div className="flex justify-center mb-8">
						<div className="p-4 bg-gray-100 rounded-full">
							<Compass className="w-12 h-12 text-gray-700" />
						</div>
					</div>

					{/* Main heading */}
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						{siteConfig.description}
					</h1>

					{/* Subheading */}
					<p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
						{siteConfig.tagline}
					</p>
				</div>
			</div>
		</section>
	);
}
