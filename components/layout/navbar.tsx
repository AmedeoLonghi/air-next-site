"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Case Study", href: "#case-study" },
  { label: "Contatti", href: "#contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1 font-semibold text-lg">
          <span className="text-primary">Air</span>
          <span>Next</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contatti"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Accedi
          </Link>
          <Link
            href="#contatti"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Richiedi Demo
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="#contatti"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full justify-center")}
            >
              Accedi
            </Link>
            <Link
              href="#contatti"
              className={cn(buttonVariants({ size: "sm" }), "w-full justify-center")}
            >
              Richiedi Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
