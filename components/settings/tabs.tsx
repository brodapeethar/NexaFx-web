"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountIcon, SecurityIcon, IdentityIcon } from "../icons";
import { AccountInfo } from "./account-info";
import { Security } from "./security";
import { Notification } from "./notification";
import { ProfileOverview } from "../profile/profile-overview";
import { PersonalInfo } from "../profile/personal-info";
import { VerificationBanner } from "../profile/verification-banner";
import { FAQSection } from "../profile/faq-section";

export function TabsSettings() {
  const [isActiveTap, setIsActiveTap] = useState<undefined | string>();

  return (
    <Tabs
      defaultValue="account"
      onValueChange={(tap) => {
        setIsActiveTap(tap);
      }}
    >
      <TabsList variant="line" className="gap-1 sm:gap-2 mb-7.5 sm:mb-9">
        <TabsTrigger value="account">
          <AccountIcon
            color={isActiveTap === "account" ? "#000" : ""}
            className="size-3.5"
          />
          Account Info
        </TabsTrigger>
        <TabsTrigger value="security">
          <SecurityIcon
            color={isActiveTap === "security" ? "#000" : ""}
            className="size-3.5"
          />
          Security
        </TabsTrigger>
        <TabsTrigger value="notification">
          <SecurityIcon
            color={isActiveTap === "notification" ? "#000" : ""}
            className="size-3.5"
          />
          Notification
        </TabsTrigger>
        <TabsTrigger value="language">
          <SecurityIcon
            color={isActiveTap === "language" ? "#000" : ""}
            className="size-3.5"
          />
          Language
        </TabsTrigger>
        <TabsTrigger value="identity">
          <IdentityIcon
            color={isActiveTap === "identity" ? "#000" : ""}
            className="size-3.5"
          />
          Identity Verification
        </TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <AccountInfo />
      </TabsContent>
      <TabsContent value="security">
        <Security />
      </TabsContent>
      <TabsContent value="notification">
        <Notification />
      </TabsContent>
      <TabsContent value="language">
        <div className="rounded-2xl border-[#8C8C8C] border-[0.25px] bg-card p-6">
          <h3 className="text-foreground font-semibold text-lg mb-4">Language</h3>
          <p className="text-muted-foreground">Choose your preferred language for the application.</p>
        </div>
      </TabsContent>
      <TabsContent value="identity">
        {" "}
        {/* Identity Verification Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          {/* Left Column: Profile Card */}
          <div className="h-full">
            <ProfileOverview />
          </div>

          {/* Right Column: Content Stack */}
          <div className="space-y-6">
            <PersonalInfo />
            <VerificationBanner />
          </div>
        </div>
        {/* Full Width FAQ Section */}
        <div className="w-full">
          <FAQSection />
        </div>
      </TabsContent>
    </Tabs>
  );
}
