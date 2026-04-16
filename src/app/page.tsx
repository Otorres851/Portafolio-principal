'use client';

import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import {
  education,
  experience,
  metrics,
  projects,
  siteData,
  stack,
} from '@/data/site';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CircleDot,
  Code2,
  ExternalLink,
  LayoutTemplate,
  Mail,
  MapPin,
  MessageSquareMore,
  MonitorSmartphone,
  Palette,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import Image from 'next/image';
import type { CSSProperties, ComponentType } from 'react';
import { useMemo, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const primaryServices = [
  {
    icon: LayoutTemplate,
    title: 'Interfaces modernas y responsivas',
    copy: 'Desarrollo layouts adaptables, accesibles y visualmente consistentes a partir de diseños UI con foco en claridad visual y experiencia de usuario.',
  },
  {
    icon: Code2,
    title: 'Aplicaciones web con React, Next, y Vue',
    copy: 'Construyo aplicaciones con React, Vue, TypeScript y consumo de APIs REST, organizando componentes y flujos pensados para mantenerse bien con el tiempo.',
  },
  {
    icon: Sparkles,
    title: 'UI enfocada en producto',
    copy: 'Transformo requerimientos de negocio en experiencias funcionales, equilibrando diseño visual, usabilidad y estructura de desarrollo.',
  },
  {
    icon: Palette,
    title: 'Diseño de producto',
    copy: 'Aporto criterio visual para plantear soluciones más útiles, consistentes y alineadas con lo que necesita el usuario final.',
  },
  {
    icon: MessageSquareMore,
    title: 'Comunicación visual',
    copy: 'Integro fundamentos de branding y diseño gráfico para reforzar la presentación de productos digitales, marcas y portafolios.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Soluciones orientadas a usuario',
    copy: 'Diseño y desarrollo interfaces que facilitan la interacción, mejoran la navegación y apoyan objetivos concretos del producto.',
  },
];

const strengths = [
  { label: 'Comunicación', value: 95 },
  { label: 'Trabajo en equipo', value: 85 },
  { label: 'Resolución de problemas', value: 80 },
  { label: 'Pensamiento visual', value: 88 },
];

const featuredProjects = projects.slice(0, 3);

const portfolioFilters = [
  { key: 'all', label: 'Todas las categorías' },
  { key: 'web', label: 'Web' },
  { key: 'branding', label: 'Branding' },
  { key: 'mockups', label: 'Mockups' },
  { key: 'producto', label: 'Producto' },
] as const;

type SocialIcon = ComponentType<{ className?: string }>;

const socialLinks: { href: string; Icon: SocialIcon }[] = [
  { href: siteData.social.github, Icon: FaGithub },
  { href: siteData.social.linkedin, Icon: FaLinkedinIn },
  { href: siteData.social.twitter, Icon: FaXTwitter },
];

const featureCards = [
  {
    Icon: BadgeCheck,
    title: 'UI sólida',
    copy: 'Priorizo jerarquía visual, consistencia y detalle para que cada pantalla tenga mejor presencia.',
  },
  {
    Icon: BriefcaseBusiness,
    title: 'Pensamiento de producto',
    copy: 'Mi experiencia me ayuda a traducir requerimientos en decisiones front-end con más intención.',
  },
  {
    Icon: BookOpenCheck,
    title: 'Aprendizaje continuo',
    copy: 'Sigo afinando stack, animación, composición y producto para elevar la calidad del resultado.',
  },
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof portfolioFilters)[number]['key']>('all');
  const [isOpen, setIsOpen] = useState(false);

  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) => activeFilter === 'all' || project.filter === activeFilter,
      ),
    [activeFilter],
  );

  return (
    <main>
      <section
        id="inicio"
        className="hero-stage relative overflow-hidden border-b border-black/5 dark:border-line"
      >
        <div className="hero-aurora absolute inset-0" />
        <div className="hero-noise absolute inset-0" />
        <div className="hero-ring ring-one" />
        <div className="hero-ring ring-two" />
        <div className="hero-pulse pulse-one" />
        <div className="hero-pulse pulse-two" />
        <div className="hero-particle particle-one" />
        <div className="hero-particle particle-two" />
        <div className="hero-particle particle-three" />
        <div className="hero-particle particle-four" />

        <div
          className="hero-particle"
          style={{
            left: '8%',
            bottom: '-26px',
            width: 10,
            height: 10,
            animationDelay: '-1s',
            animationDuration: '16s',
          }}
        />
        <div
          className="hero-particle"
          style={{
            left: '38%',
            bottom: '-18px',
            width: 7,
            height: 7,
            animationDelay: '-5s',
            animationDuration: '12s',
          }}
        />
        <div
          className="hero-particle"
          style={{
            left: '56%',
            bottom: '-34px',
            width: 12,
            height: 12,
            animationDelay: '-8s',
            animationDuration: '18s',
          }}
        />
        <div
          className="hero-particle"
          style={{
            right: '34%',
            bottom: '-22px',
            width: 6,
            height: 6,
            animationDelay: '-11s',
            animationDuration: '13s',
          }}
        />
        <div
          className="hero-particle"
          style={{
            right: '6%',
            bottom: '-30px',
            width: 11,
            height: 11,
            animationDelay: '-6s',
            animationDuration: '17s',
          }}
        />

        <div className="floating-orb orb-one" />
        <div className="floating-orb orb-two" />
        <div className="floating-orb orb-three" />
        <div
          className="floating-orb"
          style={{
            top: '58%',
            left: '16%',
            width: 110,
            height: 110,
            background: 'rgba(255,255,255,0.12)',
            animationDelay: '-4s',
          }}
        />
        <div
          className="floating-orb"
          style={{
            top: '8%',
            right: '24%',
            width: 88,
            height: 88,
            background: 'rgba(255,255,255,0.10)',
            animationDelay: '-9s',
          }}
        />
        <div className="floating-line line-one" />
        <div className="floating-line line-two" />

        <div className="container-shell relative grid min-h-[calc(100vh-80px)] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-200">
                <WandSparkles className="h-4 w-4" /> Disponible para nuevos
                proyectos
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-7xl">
                Oscar Torres
                <span className="mt-3 block text-2xl font-medium text-slate-600 dark:text-slate-300 md:text-4xl">
                  Front-End Developer · React · Next.js · TypeScript · Vue
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                Desarrollo interfaces modernas, aplicaciones web escalables y
                experiencias digitales centradas en el usuario. Combino diseño,
                desarrollo y enfoque en producto para construir soluciones
                funcionales y visualmente sólidas.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />{' '}
                  {siteData.email}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />{' '}
                  {siteData.location}
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px] dark:bg-white dark:text-slate-900"
                >
                  Trabajemos juntos <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Ver portafolio
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {socialLinks.map(({ href, Icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="glass-card relative rounded-[2rem] p-5 shadow-soft">
                <div className="grid gap-5 rounded-[1.7rem] border border-black/10 bg-gradient-to-br from-white to-white/70 p-6 dark:border-white/10 dark:from-white/10 dark:to-white/[0.03] lg:grid-cols-[0.84fr_1.16fr]">
                  <div className="space-y-4">
                    <div className="photo-ring overflow-hidden rounded-[2rem] border border-black/10 bg-slate-200 dark:border-white/10 dark:bg-white/5">
                      <Image
                        src="/images/profile-placeholder.png"
                        alt="Espacio para foto de Oscar Torres"
                        width={520}
                        height={620}
                        className="h-full w-full object-cover"
                        priority
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-5 dark:border-white/10">
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Portfolio Snapshot
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                          {siteData.name}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        Front-End
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {metrics.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[1.4rem] border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-slate-950/40"
                        >
                          <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                            {item.value}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[1.4rem] border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/[0.03]">
                      <p className="text-xs uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
                        Enfoque
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        Interfaces modernas, componentes escalables, animación
                        sutil y criterio de producto para que cada pantalla se
                        vea más cuidada y funcional.
                      </p>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {[
                        'React & Vue',
                        'UI responsive',
                        'Animaciones suaves',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-4 py-3 p-5 text-center text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="acerca" className="py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="glass-card rounded-[2rem] p-5 shadow-card">
              <Image
                src="/images/about-illustration.png"
                alt="Ilustración de interfaz y desarrollo"
                width={720}
                height={520}
                className="w-full rounded-[1.6rem]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <SectionHeading
                kicker="Acerca de mí"
                title="Diseño y desarrollo con una mirada visual y enfoque de producto"
                copy="Soy Front-End Developer con formación en Diseño Tecnológico y experiencia construyendo interfaces web, aplicaciones responsive e integraciones con APIs REST."
              />

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 dark:text-slate-300 md:text-base">
                Me enfoco en crear productos digitales claros, mantenibles y
                alineados con objetivos de negocio. También aporto criterio de
                branding, comunicación visual y estructura de experiencia para
                que el resultado no se sienta solo funcional, sino mejor
                resuelto en jerarquía, narrativa y detalle visual.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {stack.slice(0, 12).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="servicios"
        className="border-y border-black/5 py-24 dark:border-line"
      >
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              kicker="Servicios"
              title="Qué puedo aportar"
              copy="Una mezcla de ejecución visual, estructura front-end y criterio para priorizar la experiencia del usuario."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {primaryServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <article className="glass-card h-full rounded-[1.8rem] p-6 shadow-card transition hover:-translate-y-1">
                    <div className="inline-flex rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-cyan-700 dark:text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {service.copy}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell">
          <Reveal>
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 shadow-soft md:p-12">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <p className="section-kicker">Proceso</p>

                  <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white md:text-5xl">
                    Cómo desarrollo interfaces modernas
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
                    Construyo interfaces web desde la estructura hasta la
                    implementación, desarrollando componentes reutilizables,
                    integrando APIs y asegurando una experiencia fluida,
                    escalable y orientada al producto.
                  </p>

                  <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <p>✔ Desarrollo de interfaces con React, Next.js y Vue</p>
                    <p>
                      ✔ Construcción de componentes reutilizables y escalables
                    </p>
                    <p>✔ Integración con APIs y lógica de negocio</p>
                  </div>
                </div>

                <div
                  data-testid="process-image"
                  className="relative cursor-zoom-in group"
                  onClick={() => setIsOpen(true)}
                >
                  <Image
                    src="/images/process-section.png"
                    alt="Imagen ampliada"
                    data-testid="modal-image"
                    width={800}
                    height={600}
                    className="w-full rounded-[20px]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                    <span className="rounded-full bg-black/60 px-4 py-2 text-white text-xs uppercase tracking-wide">
                      Ver en grande
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="stack" className="py-24">
        <div className="container-shell grid gap-14 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <SectionHeading
                kicker="Stack"
                title="Tecnologías principales"
                copy="Trabajo principalmente con tecnologías front-end y herramientas que me permiten construir interfaces modernas, responsivas y mantenibles."
              />

              <div className="mt-10 space-y-6">
                {[
                  ['JavaScript', '90%'],
                  ['TypeScript', '88%'],
                  ['React', '85%'],
                  ['Vue', '80%'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-3 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                      <div
                        className="skill-bar skill-fill h-full rounded-full"
                        style={
                          { ['--target' as string]: value } as CSSProperties
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading kicker="Fortalezas" title="Perfil profesional" />

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {strengths.map((item, index) => (
                  <article
                    key={item.label}
                    className="glass-card rounded-[1.8rem] p-6 text-center shadow-card transition hover:-translate-y-1"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="profile-circle mx-auto"
                      style={{ '--value': item.value } as CSSProperties}
                    >
                      <div className="profile-circle__inner">
                        <span>{item.value}%</span>
                      </div>
                    </motion.div>

                    <p className="mt-4 text-base font-semibold text-slate-950 dark:text-white">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="destacados"
        className="border-y border-black/5 py-24 dark:border-line"
      >
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              kicker="Destacados"
              title="Proyectos destacados"
              copy="Una selección de trabajos con los que muestro ejecución front-end, criterio visual y experiencia responsive."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.06}>
                <article className="glass-card group h-full rounded-[1.8rem] p-5 shadow-card transition hover:-translate-y-1">
                  <div className="project-shot relative overflow-hidden rounded-[1.4rem] border border-black/10 p-3 dark:border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1600}
                      height={900}
                      className="w-full rounded-[1rem]"
                    />
                  </div>

                  <div className="flex h-full flex-col pt-5">
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.copy}
                    </p>

                    <span className="mt-4 inline-block text-sm font-medium text-cyan-700 dark:text-cyan-300">
                      {project.tags.join(' · ')}
                    </span>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                    >
                      Ver proyecto <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-24">
        <div className="container-shell grid gap-14 xl:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading
                kicker="Experiencia"
                title="Trayectoria profesional"
              />

              <div className="mt-10 space-y-5">
                {experience.map((item) => (
                  <article
                    key={item.company}
                    className="glass-card rounded-[1.8rem] p-6 shadow-card"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm text-cyan-700 dark:text-cyan-300">
                          {item.company}
                        </p>
                      </div>

                      <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 whitespace-pre-line">
                      {item.copy}
                    </p>

                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CircleDot className="mt-1 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading kicker="Educación" title="Formación" />

              <div className="mt-10 space-y-5">
                {education.map((item) => (
                  <article
                    key={item.title}
                    className="glass-card rounded-[1.8rem] p-6 shadow-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-cyan-700 dark:text-cyan-300">
                          {item.institution}
                        </p>
                      </div>

                      <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="proyectos"
        className="border-y border-black/5 py-24 dark:border-line"
      >
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              kicker="Portafolio"
              title="Portafolio reciente"
              copy="Una mezcla de aplicaciones React, landing pages y piezas visuales para mostrar ejecución front-end, criterio visual y narrativa de producto."
            />
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {portfolioFilters.map((item) => {
              const isActive = activeFilter === item.key;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveFilter(item.key)}
                  className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
                    isActive
                      ? 'border-cyan-500/30 bg-cyan-500/12 text-cyan-700 shadow-[0_10px_30px_rgba(6,182,212,0.12)] dark:text-cyan-200'
                      : 'border-black/10 bg-white/70 text-slate-700 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.article
                  layout
                  key={`${activeFilter}-${project.title}`}
                  initial={{ opacity: 0, y: 26, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="glass-card portfolio-card group overflow-hidden rounded-[1.8rem] p-4 shadow-card transition hover:-translate-y-1"
                >
                  <div className="project-shot relative overflow-hidden rounded-[1.4rem] border border-black/10 p-3 dark:border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={520}
                      className="portfolio-card__image w-full rounded-[1rem] transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-2 pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
                        {project.category}
                      </span>

                      <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-slate-900 dark:group-hover:text-white" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.copy}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/[0.04] px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                    >
                      Ver proyecto <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell">
          <Reveal>
            <div className="glass-card rounded-[2rem] p-8 shadow-soft md:p-10">
              <div className="grid gap-6 lg:grid-cols-3">
                {featureCards.map(({ Icon, title, copy }) => (
                  <article
                    key={title}
                    className="rounded-[1.6rem] border border-black/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <Icon className="h-6 w-6 text-cyan-700 dark:text-cyan-300" />

                    <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="contacto"
        className="border-t border-black/5 py-24 dark:border-line"
      >
        <div className="container-shell">
          <Reveal>
            <div className="glass-card rounded-[2rem] p-8 shadow-soft md:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="section-kicker">Contacto</p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                    ¿Tienes una idea, una vacante o un producto por mejorar?
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
                    Estoy disponible para colaborar en interfaces, landings,
                    aplicaciones web y mejoras visuales de producto. También
                    puedes escribirme por LinkedIn o descargar mi CV.
                  </p>

                  <div className="mt-8 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <p className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                      {siteData.email}
                    </p>

                    <p className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                      {siteData.location}
                    </p>

                    <p className="flex items-center gap-3">
                      <FaGithub className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                      {siteData.social.github}
                    </p>
                  </div>
                </div>

                <form
                  action="https://formspree.io/f/mbjqokyp"
                  method="POST"
                  className="grid gap-4"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      name="name"
                      required
                      placeholder="Nombre"
                      className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-300/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                    />

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Correo"
                      className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-300/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>

                  <input
                    name="subject"
                    required
                    placeholder="Asunto"
                    className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-300/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                  />

                  <textarea
                    name="message"
                    required
                    placeholder="Cuéntame sobre tu proyecto"
                    rows={7}
                    className="rounded-[1.5rem] border border-black/10 bg-white/70 px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-300/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
                  />

                  <button
                    type="submit"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px] dark:bg-white dark:text-slate-900"
                  >
                    Enviar mensaje <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/process-section.png"
              alt="Proceso de desarrollo digital"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl shadow-lg"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
