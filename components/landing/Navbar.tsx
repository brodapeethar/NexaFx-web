"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b">
      <div className="flex items-center justify-between px-4 md:px-12 h-16 max-w-[1440px] mx-auto">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="NexaFx Logo"
            width={110}
            height={36}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <a href="#features" className="hover:text-brand cursor-pointer">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-brand cursor-pointer">
            How It Works
          </a>
          <a href="#market-rates" className="hover:text-brand cursor-pointer">
            Rates
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/login" className="font-semibold">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-brand text-primary-foreground px-5 py-2 rounded-lg font-bold"
          >
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center"
        >
          <span className="text-2xl">
            {open ? <X /> : <Menu />}
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-6 pt-2 bg-white rounded-b-2xl shadow-lg">
          <div className="flex flex-col text-center gap-4 text-slate-600 font-medium">
            <a href="#features" onClick={() => setOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" onClick={() => setOpen(false)}>
              How It Works
            </a>
            <a href="#market-rates" onClick={() => setOpen(false)}>
              Rates
            </a>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="/login"
              className="text-center font-semibold py-2 border rounded-lg"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-center bg-brand text-primary-foreground py-2 rounded-lg font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
