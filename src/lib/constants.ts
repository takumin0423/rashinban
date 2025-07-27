export const siteConfig = {
	name: "Rashinban",
	description: "技術学習の羅針盤",
	tagline: "AIと仲間と共に、あなたの技術力を確実に成長させる",
} as const;

export const navigation = {
	main: [{ name: "機能", href: "#features" }],
	footer: {
		social: [
			{ name: "Twitter", href: "https://twitter.com/takumin0423x" },
			{ name: "GitHub", href: "https://github.com/takumin0423/rashinban" },
		],
	},
} as const;

export const features = [
	{
		title: "AIが即座にフィードバック",
		description:
			"投稿した学びに対して、AIが理解度を分析し、改善点や次の学習ステップを提案",
		icon: "Sparkles",
	},
	{
		title: "仲間と共に成長",
		description: "同じ技術を学ぶ仲間からリアクションやアドバイスをもらえる",
		icon: "Users",
	},
	{
		title: "成長を可視化",
		description: "学びを体系的に蓄積し、自分の成長過程を振り返れる",
		icon: "ChartBar",
	},
] as const;

export const howItWorks = [
	{
		step: 1,
		title: "学びを投稿",
		description: "技術的な気付きや学びを投稿する",
	},
	{
		step: 2,
		title: "AIとコミュニティからフィードバック",
		description: "AIの分析と仲間からのアドバイスを受け取る",
	},
	{
		step: 3,
		title: "理解を深める",
		description: "フィードバックを元に、さらに学習を進める",
	},
] as const;
