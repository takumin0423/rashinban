import { CoreFeaturesSection } from "./_components/core-features-section";
import { HeroSection } from "./_components/hero-section";
import { HowItWorksSection } from "./_components/how-it-works-section";

export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroSection />
			<CoreFeaturesSection />
			<HowItWorksSection />
		</main>
	);
}
