import React from "react";
import Image from "next/image";
import "./css/side-navbar.min.css";
import DashboardLinks from "./features/dashboard-links";
import BusinessesNavLinks from "./features/businesses-nav-link";
import SettingsNavLinks from "./features/settings-links";

export default function BorrowersNavbar() {
  return (
    <aside>
      <button className="align">
        <Image
          src="/svgs/briefcase 1.svg"
          width={16}
          height={16}
          alt="briefcase icon"
        />
        Switch Organization
        <Image
          src="/svgs/dropdown-stroke.svg"
          width={14}
          height={14}
          alt="dropdown-stroke icon"
        />
      </button>
      <DashboardLinks />
      <div className="divider"></div>

      <div>
        <button className="logout align">
          <Image
            src="/svgs/sign-out 1.svg"
            width={16}
            height={16}
            alt="logout button"
          />
          Logout
        </button>
        <span className="align">1.2.0</span>
      </div>
    </aside>
  );
}
