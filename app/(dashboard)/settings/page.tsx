<<<<<<< HEAD
"use client";

import { TabsSettings } from "@/components/settings/tabs";

export default function SettingsPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account profile and security preferences.
        </p>
      </header>
      <TabsSettings />
=======
// app/(dashboard)/page.tsx
"use client";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Welcome back!</p>
      </div>
>>>>>>> 3042a2a (feat: worked on dashboard sidebar and navbar)
    </div>
  );
}
