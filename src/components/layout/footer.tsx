import { navigation, siteConfig } from "../../lib/constants";

export function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
				{/* サイト情報 */}
				<div>
					<h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
					<p className="text-gray-400 mb-2">{siteConfig.description}</p>
					<p className="text-gray-400 text-sm">{siteConfig.tagline}</p>
				</div>

				{/* ソーシャルリンク */}
				<div className="flex space-x-8">
					{navigation.footer.social.map((item) => {
						return (
							<a
								key={item.name}
								href={item.href}
								className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>{item.name}</span>
							</a>
						);
					})}
				</div>
			</div>
		</footer>
	);
}
