import React from "react";
import Image from "next/image";

const statistic = [
  {
    icon: "/svgs/icon(1).svg",
    type: "Users",
    stats: "2,453",
  },
  {
    icon: "/svgs/icon(2).svg",
    type: "Active Users",
    stats: "2,453",
  },
  {
    icon: "/svgs/icon(3).svg",
    type: "Users with Loans",
    stats: "12,453",
  },
  {
    icon: "/svgs/icon(4).svg",
    type: "Users with Savings",
    stats: "102,453",
  },
];

export default function UsersStatistic() {
  return (
    <div>
      <h1 className="user-heading">Users</h1>
      <div className="user-stats">
        {statistic.map((stat) => {
          return (
            <div className="users-statistic">
              <Image src={stat.icon} width={40} height={40} alt="icon" />
              <p>{stat.type}</p>
              <p>{stat.stats}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
