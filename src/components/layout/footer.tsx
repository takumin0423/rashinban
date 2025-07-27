import { siteConfig } from "../../lib/constants";
import { Card, CardContent } from "../ui/card";

export function Footer() {
	return (
		<footer className="relative mt-20">
			{/* 背景グラデーション */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-muted/40" />

			<div className="relative mx-auto max-w-7xl px-6 py-16">
				{/* メインフッターコンテンツ */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
					{/* ブランドセクション */}
					<div className="lg:col-span-2">
						<Card className="border-0 bg-background/60 backdrop-blur-sm shadow-sm">
							<CardContent className="p-8">
								<div className="flex items-center space-x-3 mb-6">
									<div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
										<span className="text-primary font-bold text-lg">R</span>
									</div>
									<div>
										<h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
											{siteConfig.name}
										</h3>
										<p className="text-muted-foreground text-sm">
											{siteConfig.description}
										</p>
									</div>
								</div>
								<p className="text-muted-foreground leading-relaxed">
									{siteConfig.tagline}
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</footer>
	);
}
