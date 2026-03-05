export interface NavItemConfig {
  label: string;
  href: string;
}

export const mainNav: NavItemConfig[] = [
	{ label: "Dashboard", href: "/"},
  { label: "Network Feed", href: "/network" },
  { label: "Channel", href: "/channel" },
  { label: "Directory", href: "/directory" },
  { label: "Photos", href: "/photos" },
  { label: "Files", href: "/files" },
  { label: "Settings", href: "/settings" },
];
