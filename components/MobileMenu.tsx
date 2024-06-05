"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/pngwing.com.png";
import Link from "next/link";
import { FolderGit2, GanttChart, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

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
];

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <div className="md:hidden lg:hidden relative">
      <Sheet>
        <SheetTrigger className="absolute px-4 py-4">
          <AlignRight />
        </SheetTrigger>
        <SheetContent>
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
