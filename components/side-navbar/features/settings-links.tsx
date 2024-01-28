import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const settings = [
  {
    icon: "/svgs/sliders-h 1.svg",
    linkName: "Preferences",
    path: "#",
    width: 16,
    height: 16,
  },
  {
    icon: "/svgs/badge-percent 1.svg",
    linkName: "Fees and Pricing",
    path: "#",
    width: 16,
    height: 16,
  },
  {
    icon: "/svgs/clipboard-list 1.svg",
    linkName: "Audit Logs",
    path: "#",
    width: 16,
    height: 21.333,
  },
  {
    icon: "/svgs/tire 1.svg",
    linkName: "Systems Messages",
    path: "#",
    width: 16,
    height: 16,
  },
];

export default function SettingsNavLinks() {
  const pathname = usePathname();
  return (
    <nav className="settings">
      <h2 className="heading">Settings</h2>
      <ul>
        {settings.map((link) => {
          return (
            <li key={link.linkName} className="link">
              <Link
                href={link.path}
                className={`align ${
                  pathname === link.path ? "active-link" : ""
                }`}
              >
                <Image
                  src={link.icon}
                  width={link.width}
                  height={link.height}
                  alt={link.linkName + "icon"}
                />
                {link.linkName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
