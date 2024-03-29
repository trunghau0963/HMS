"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "../logo";
import SidebarToggle from "./side-bar-toggle";
import { RootState } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
// import { MAX_FREE_COUNT } from "@/constant";
// import { Progress } from "../ui/progress";
// import SubcriptionButton from "../subcription-button";
import Navbar from "./navbar";
// import ThemeToggle from "./theme-toggle";
import { useDispatch, useSelector } from "react-redux";
// import DialogProfile from "./profileButton";
import Link from "next/link";

interface SidebarProps {
  className?: string;
  // isProPlan?: boolean; //de check xem user da dang ky goi pro chua
  // userLimitCount: number; // user da su dung duoc bao nhiue lan goi
}
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { value } = useSelector((state: RootState) => state.sidebar);
  const { valueAuth } = useSelector((state: RootState) => state.auth);

  return (
    <div className={(cn("shadow-md"), className)}>
      <div className="h-20 pl-7 pr-6">
        <Link className="flex items-center justify-between w-full" href="#">
          <SidebarToggle />
          {!value.isMinimal && <Logo />}
        </Link>
      </div>
      <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
        <Navbar />
      </div>
    </div>
  );
};

export default Sidebar;
