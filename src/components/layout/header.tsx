"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "../../lib/constants";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
			<div className="mx-auto max-w-7xl">
				<div
					className={cn(
						"rounded-2xl bg-background/80 backdrop-blur-md border shadow-lg transition-all duration-300",
						isScrolled && "bg-background/95 shadow-xl",
					)}
				>
					<div className="px-6 py-4">
						<nav
							className="flex items-center justify-between"
							aria-label="メインナビゲーション"
						>
							{/* モダンロゴセクション */}
							<Link href="/" className="flex items-center space-x-2 group">
								<div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
									<span className="text-primary font-bold">R</span>
								</div>
								<span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
									{siteConfig.name}
								</span>
							</Link>

							{/* デスクトップナビゲーション */}
							<div className="hidden md:flex items-center space-x-2">
								<Button variant="ghost" className="rounded-xl">
									記事一覧
								</Button>
								<Separator orientation="vertical" className="h-6" />
								<Button variant="outline" className="rounded-xl">
									ログイン
								</Button>
								<Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
									始める
								</Button>
							</div>

							{/* モバイルメニュー */}
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="md:hidden rounded-xl"
									>
										<Menu className="h-5 w-5" />
										<span className="sr-only">メニューを開く</span>
									</Button>
								</SheetTrigger>
								<SheetContent className="rounded-l-2xl">
									<div className="flex flex-col space-y-6 mt-8">
										<div className="flex items-center space-x-2">
											<div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
												<span className="text-primary font-bold">R</span>
											</div>
											<span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
												{siteConfig.name}
											</span>
										</div>
										<Separator />
										<div className="flex flex-col space-y-4">
											<Button
												variant="ghost"
												className="rounded-xl justify-start"
											>
												記事一覧
											</Button>
											<Button
												variant="outline"
												className="rounded-xl justify-start"
											>
												ログイン
											</Button>
											<Button className="rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
												始める
											</Button>
										</div>
									</div>
								</SheetContent>
							</Sheet>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
