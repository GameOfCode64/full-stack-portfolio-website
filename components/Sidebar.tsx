"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/pngwing.com.png";
import Link from "next/link";
import {
  FolderGit2,
  GanttChart,
  GraduationCap,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navlikes = [
  {
    icon: LayoutDashboard,
    titel: "About Page",
    href: "/dashboard",
  },
  {
    icon: GanttChart,
    titel: "Add Skills",
    href: "/dashboard/add-skills",
  },
  {
    icon: FolderGit2,
    titel: "Add Project",
    href: "/dashboard/add-project",
  },
  {
    icon: GraduationCap,
    titel: "Add Experience",
    href: "/dashboard/add-experience",
  },
];

const DahboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:block lg:block w-[300px] bg-[#0000001b] shadow-lg">
      <div className="grid items-center justify-center py-4">
        <div className="flex items-center justify-center gap-6">
          <div className="w-[50px] h-[50px] p-2 bg-[#91c753]/20 rounded-md">
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <p className="font-[700] text-[22px] ">Dashboard</p>
        </div>
        <div className="mt-16">
          <div className="space-y-2">
            {Navlikes.map((links) => (
              <Link
                key={links.href}
                href={links.href}
                className={cn(
                  "flex w-full items-center justify-center px-8 rounded-md  font-semibold  py-3",
                  pathname === links.href ? "bg-[#91c753]/20" : ""
                )}
              >
                <div className="flex items-center flex-1">
                  <links.icon className="text-[#91c753] mr-5" />
                  {links.titel}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DahboardSidebar;
