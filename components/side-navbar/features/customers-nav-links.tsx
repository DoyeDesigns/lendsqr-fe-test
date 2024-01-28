"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const customers = [
  {
    icon: "/svgs/user-friends 1.svg",
    linkName: "Users",
    path: "/dashboard/users-details",
    width: 16,
    height: 12.8,
  },
  {
    icon: "/svgs/users 1.svg",
    linkName: "Guarantors",
    path: "#",
    width: 16,
    height: 12.8,
  },
  {
    icon: "/svgs/sack 1.svg",
    linkName: "Loans",
    path: "#",
    width: 16,
    height: 16,
  },
  {
    icon: "/svgs/handshake-regular 1.svg",
    linkName: "Decision Models",
    path: "#",
    width: 19,
    height: 15.2,
  },
  {
    icon: "/svgs/piggy-bank 1.svg",
    linkName: "Savings",
    path: "#",
    width: 16,
    height: 14.222,
  },
  {
    icon: "/svgs/Group 104.svg",
    linkName: "Loan Requests",
    path: "#",
    width: 18,
    height: 22,
  },
  {
    icon: "/svgs/user-check 1.svg",
    linkName: "Whitelist",
    path: "#",
    width: 16,
    height: 12.8,
  },
  {
    icon: "/svgs/user-times 1.svg",
    linkName: "Karma",
    path: "#",
    width: 16,
    height: 12.8,
  },
];

export default function CustomersNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="customers">
      <h2 className="heading">Customers</h2>
      <ul>
        {customers.map((link) => {
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
