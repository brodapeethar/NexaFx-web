import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row max-w-[1440px] mx-auto px-6 md:px-12 gap-12 lg:gap-24 items-center mb-32">
      <div className="w-full md:w-1/2">
        <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
          <span className="text-brand text-sm font-semibold uppercase">
            Web3 Evolution is here
          </span>
        </div>

        <h1 className="font-bold text-5xl md:text-7xl mb-6 leading-tight">
          Seamless Crypto & Fiat{" "}
          <span className="text-brand">Exchange</span>
        </h1>

        <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl">
          Fast, secure, and fee-free cross-border payments for everyone.
          Experience the next generation of global finance with
          blockchain-backed reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/signup"
            className="bg-brand text-primary-foreground text-center px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="bg-slate-200 text-center px-8 py-4 rounded-lg text-lg font-bold hover:bg-slate-300 transition"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 justify-end hidden md:flex">
        <div className="bg-white/50 p-4 rounded-4xl shadow-2xl backdrop-blur border">
          <Image
            src="/finance.png"
            alt="finance visual"
            width={800}
            height={800}
            className="rounded-3xl w-[450px] h-[480px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
