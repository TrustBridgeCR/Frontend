"use client";

import { useState, useEffect } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { DashboardHeader } from "@/components/layouts/dashboard-header";
import { DashboardFooter } from "@/components/layouts/dashboard-footer";
import { RequestsContent } from "@/components/dashboard/requests/requests-content";

export default function RequestsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<"es" | "en" | "fr" | "de">("en");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className={`flex min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader theme={theme} setTheme={setTheme} setLanguage={setLanguage} />
        <RequestsContent />
        <DashboardFooter />
      </div>
    </div>
  );
}