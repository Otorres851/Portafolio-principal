import { siteData } from '@/data/site';
import Image from 'next/image';
import type { ComponentType } from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

type SocialIcon = ComponentType<{ className?: string }>;

type SocialLink = {
  href: string;
  Icon: SocialIcon;
};

const socialLinks: SocialLink[] = [
  { href: siteData.social.github, Icon: FaGithub },
  { href: siteData.social.linkedin, Icon: FaLinkedinIn },
  { href: siteData.social.twitter, Icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-12 dark:border-line">
      <div className="container-shell grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo Oscar Torres"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-base font-semibold text-slate-950 dark:text-white">
              {siteData.brand}
            </span>
          </div>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            Portafolio de <strong>{siteData.name}</strong>. Desarrollo
            interfaces modernas, productos digitales y experiencias web
            centradas en el usuario, con foco en performance, claridad y detalle
            visual.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900 dark:text-white">
            Navegación
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <a
              href="#inicio"
              className="block hover:text-slate-900 dark:hover:text-white"
            >
              Inicio
            </a>
            <a
              href="#acerca"
              className="block hover:text-slate-900 dark:hover:text-white"
            >
              Acerca
            </a>
            <a
              href="#destacados"
              className="block hover:text-slate-900 dark:hover:text-white"
            >
              Destacados
            </a>
            <a
              href="#proyectos"
              className="block hover:text-slate-900 dark:hover:text-white"
            >
              Portafolio
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900 dark:text-white">
            Sígueme
          </p>

          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {siteData.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
