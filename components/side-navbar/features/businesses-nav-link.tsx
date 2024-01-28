import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const businesses = [
  {
    icon: "/svgs/briefcase 2.svg",
    linkName: "Organization",
    path: "#",
    width: 16,
    height: 16,
  },
  {
    icon: "/svgs/sack 1.svg",
    linkName: "Loan Products",
    path: "#",
    width: 18,
    height: 16,
  },
  {
    icon: "/svgs/np_bank_148501_000000 1.svg",
    linkName: "Savings Products",
    path: "#",
    width: 16,
    height: 16,
  },
  {
    icon: "/svgs/coins-solid 1.svg",
    linkName: "Fees and Charges",
    path: "#",
    width: 16,
    height: 16,
  },
  {
    icon: "/svgs/icon.svg",
    linkName: "Transactions",
    path: "#",
    width: 16,
    height: 18,
  },
  {
    icon: "/svgs/galaxy 1.svg",
    linkName: "Services",
    path: "#",
    width: 16,
    height: 16,
  },
  {
    icon: "/svgs/user-cog 1.svg",
    linkName: "Service Account",
    path: "#",
    width: 16,
    height: 12.8,
  },
  {
    icon: "/svgs/scroll 1.svg",
    linkName: "Settlements",
    path: "#",
    width: 16,
    height: 12.8,
  },
  {
    icon: "/svgs/chart-bar 2.svg",
    linkName: "Reports",
    path: "#",
    width: 16,
    height: 16,
  },
];

export default function BusinessesNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="businesses">
      <h2 className="heading">Businesses</h2>
      <ul>
        {businesses.map((link) => {
          return (
            <li key={link.linkName}>
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
