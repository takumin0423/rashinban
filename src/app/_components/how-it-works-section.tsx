import { ArrowRight } from "lucide-react";
import { howItWorks } from "../../lib/constants";

export function HowItWorksSection() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						使い方はシンプル
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						3つのステップで技術力を着実に向上させる
					</p>
				</div>

				{/* Steps */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
					{howItWorks.map((step, index) => (
						<div key={step.step} className="relative">
							<div className="text-center">
								{/* Step number */}
								<div className="flex justify-center mb-6">
									<div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
										{step.step}
									</div>
								</div>

								{/* Content */}
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									{step.title}
								</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>

							{/* Arrow between steps */}
							{index < howItWorks.length - 1 && (
								<div className="hidden md:block absolute top-8 -right-4 transform translate-x-1/2">
									<ArrowRight className="w-6 h-6 text-gray-400" />
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
