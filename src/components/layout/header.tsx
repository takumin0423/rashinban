"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "../../lib/constants";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-200",
				isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white",
			)}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<span className="text-xl font-bold">{siteConfig.name}</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navigation.main.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-gray-700 hover:text-gray-900 transition-colors"
							>
								{item.name}
							</Link>
						))}
						<Button size="sm">始める</Button>
					</nav>

					{/* Mobile menu button */}
					<button
						type="button"
						className="md:hidden p-2"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="メニューを開く"
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-white border-t">
					<nav className="px-4 py-4 space-y-4">
						{navigation.main.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}
						<Button className="w-full" size="sm">
							始める
						</Button>
					</nav>
				</div>
			)}
		</header>
	);
}
