interface NavItem {
	label: string;
	href: string;
	protected?: boolean;
}

export const HEADER_NAV: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Blog", href: "/blog" },
	{ label: "Dashboard", href: "/dashboard", protected: true },
];

export const FOOTER_NAV: NavItem[] = [
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Terms of Service", href: "/terms" },
];
