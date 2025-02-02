"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import Image from "next/image";

const menuItems = [
  {
    title: "",
    items: [
      { icon: <HomeRoundedIcon />, label: "Home", href: "/admin" },
      { icon: <LeaderboardIcon />, label: "Projects", href: "/project" },
      { icon: <SchoolIcon />, label: "Subjects", href: "" },
      { icon: <SettingsIcon />, label: "Settings", href: "/settings" },
      { icon: <PersonIcon />, label: "User", href: "/user" },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-60 w-full bg-[#1A1A1A] overflow-hidden">
      {/* Menu Items with Scroll */}
      <div className="flex flex-col flex-grow gap-4 mt-2 text-sm overflow-auto">
        {menuItems.map((i) => (
          <div className="flex flex-col gap-2" key={i.title}>
            <span className="hidden lg:block text-gray-400 font-light my-4">
              {i.title}
            </span>

            {i.items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center justify-center lg:justify-start gap-4 py-3 md:px-2 rounded-md border 
                    ${
                      isActive
                        ? "border-[#77BF7D] text-black bg-[#77BF7D]"
                        : "border-transparent text-gray-500 hover:border-green-400 hover:text-white"
                    }`}
                >
                  <span className={isActive ? "text-black" : "text-[#77BF7D]"}>
                    {item.icon}
                  </span>
                  <span
                    className={`font-aclonica hidden lg:block ${
                      isActive ? "text-black" : "text-[#77BF7D]"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Pro Button with Image (Fixed at Bottom) */}
      <div className="w-full mt-48">
        <div className="relative bg-[#1A1A1A] text-center p-3">
          <div className="relative w-full h-20">
            <Image
              src="/GetPlus.png"
              alt="Get Pro"
              layout="fill"
              objectFit="contain"
              className="rounded-t-lg"
            />
          </div>
          <button className="w-full bg-[#77BF7D] text-white py-3 px-4 rounded-b-lg hover:bg-[#77BF7D]/90 transition-colors">
            Get Pro Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
