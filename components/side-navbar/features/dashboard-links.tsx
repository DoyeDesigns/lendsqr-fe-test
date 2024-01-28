import React from "react";
import Image from "next/image";
import CustomersNavLinks from "./customers-nav-links";
import SettingsNavLinks from "./settings-links";
import BusinessesNavLinks from "./businesses-nav-link";

export default function DashboardLinks() {
  return (
    <div>
      <span className="align dashboard">
        <Image src="/svgs/home 1.svg" width={14.222} height={16} alt="icon" />
        Dashboard
      </span>
      <CustomersNavLinks />
      <BusinessesNavLinks />
      <SettingsNavLinks />
    </div>
  );
}
