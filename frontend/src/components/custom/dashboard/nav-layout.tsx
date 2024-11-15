import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/shared/mode-toggle";
import SearchBar from "@/components/shared/search-bar";

export default function NavLayout() {
  return (
    <div className="flex gap-2 items-center justify-between px-5 py-5">
      <SidebarTrigger />
      <SearchBar />
      <ModeToggle />
    </div>
  );
}
