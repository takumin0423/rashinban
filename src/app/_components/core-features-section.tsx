import { ChartBar, Sparkles, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { features } from "../../lib/constants";

const iconMap = {
	Sparkles: Sparkles,
	Users: Users,
	ChartBar: ChartBar,
} as const;

export function CoreFeaturesSection() {
	return (
		<section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Rashinbanの特徴
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						技術学習を加速させる3つのコア機能
					</p>
				</div>

				{/* Features grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature) => {
						const Icon = iconMap[feature.icon as keyof typeof iconMap];
						return (
							<Card
								key={feature.title}
								className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-200"
							>
								<CardHeader className="text-center pb-4">
									<div className="flex justify-center mb-4">
										<div className="p-3 bg-gray-100 rounded-lg">
											<Icon className="w-8 h-8 text-gray-700" />
										</div>
									</div>
									<h3 className="text-xl font-semibold text-gray-900">
										{feature.title}
									</h3>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-center">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
