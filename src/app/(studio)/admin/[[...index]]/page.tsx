"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";
import Home from "@/components/ui/hero-ascii";

export default function DemoOne() {
  return (
    <div className="w-screen min-h-screen bg-[#0C2340]">
      <Home />
    </div>
  );
}

export default function AdminPage() {
  return <NextStudio config={config} />;
  // return <>this sanity studio page</>;
}
