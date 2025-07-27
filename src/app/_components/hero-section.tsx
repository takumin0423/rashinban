import { ArrowRight, Compass } from "lucide-react";
import { Button } from "../../components/ui/button";
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

					{/* CTA buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="group">
							無料で始める
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
						<Button size="lg" variant="outline">
							デモを見る
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
