export interface NavItemConfig {
  label: string;
  href: string;
}

export const mainNav: NavItemConfig[] = [
  { label: "Network", href: "/" },
  { label: "Channel", href: "/channel" },
  { label: "Settings", href: "/settings" },
];
