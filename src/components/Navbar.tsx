'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { siteData } from '@/data/site';
import ThemeToggle from '@/components/ThemeToggle';
import logo from '../../public/images/logo.png';

const items = [
  ['Inicio', '#inicio'],
  ['Acerca', '#acerca'],
  ['Servicios', '#servicios'],
  ['Stack', '#stack'],
  ['Destacados', '#destacados'],
  ['Portafolio', '#proyectos'],
  ['Contacto', '#contacto'],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-surface/70">
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-black/5 shadow-card dark:border-white/10 dark:bg-white/5">
            <Image
              src={logo}
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {siteData.brand}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Front-End Portfolio
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={siteData.social.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 bg-black/5 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Descargar CV
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-black/5 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white/95 dark:border-white/10 dark:bg-surface/95 lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {items.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
