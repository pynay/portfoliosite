'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TextScramble } from '@/components/ui/text-scramble';

declare global {
  interface Window {
    UnicornStudio?: { isInitialized?: boolean; init?: () => void };
  }
}

export default function HeroAsciiOne() {
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    // Inject scene-scoped CSS once
    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] { position: relative !important; overflow: hidden !important; }
      [data-us-project] canvas { clip-path: inset(0 0 10% 0) !important; }
      [data-us-project] * { pointer-events: none !important; }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important; visibility: hidden !important; opacity: 0 !important;
        position: absolute !important; left: -9999px !important; top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    // Init the scene as soon as the script and container are available.
    // On client-side navigation back to this page, the previous canvas is torn
    // down but UnicornStudio.isInitialized stays true globally — so we reset
    // the flag on each mount to force re-init.
    let cancelled = false;
    let initCalled = false;
    const tryInit = () => {
      if (cancelled) return;
      const container = document.querySelector('[data-us-project]');

      if (container?.querySelector('canvas')) {
        setSceneReady(true);
        return;
      }

      if (!initCalled && container && window.UnicornStudio?.init) {
        window.UnicornStudio.isInitialized = false;
        window.UnicornStudio.init();
        initCalled = true;
      }

      requestAnimationFrame(tryInit);
    };
    tryInit();

    // Strip any branding leaked into the embed
    const hideBranding = () => {
      const containers = document.querySelectorAll('[data-us-project]');
      containers.forEach((container) => {
        container.querySelectorAll<HTMLElement>('*').forEach((el) => {
          const text = (el.textContent || '').toLowerCase();
          const title = (el.getAttribute('title') || '').toLowerCase();
          const href = (el.getAttribute('href') || '').toLowerCase();
          if (
            text.includes('made with') ||
            text.includes('unicorn') ||
            title.includes('made with') ||
            title.includes('unicorn') ||
            href.includes('unicorn.studio')
          ) {
            el.remove();
          }
        });
      });
    };
    const brandingInterval = setInterval(hideBranding, 200);
    const brandingTimeouts = [500, 1500, 4000].map((t) => setTimeout(hideBranding, t));

    return () => {
      cancelled = true;
      clearInterval(brandingInterval);
      brandingTimeouts.forEach(clearTimeout);
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background — Unicorn Studio sisyphus/atlas scene */}
      <div
        className={`absolute inset-0 w-full h-full hidden lg:block transition-opacity duration-700 ease-out ${
          sceneReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          data-us-project="OMzqyUv6M3kSnv0JeAtC"
          style={{ width: '100%', height: '100%', minHeight: '100vh' }}
        />
      </div>

      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20"></div>
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20" style={{ bottom: '5vh' }}></div>
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20" style={{ bottom: '5vh' }}></div>

      {/* CTA Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-end pt-16 lg:pt-0" style={{ marginTop: '5vh' }}>
        <div className="w-full lg:w-1/2 px-6 lg:px-16 lg:pr-[10%]">
          <div className="max-w-lg relative lg:ml-auto">
            <div className="flex items-center gap-2 mb-3 opacity-60">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>

            <TextScramble
              as="h1"
              duration={1.2}
              speed={0.04}
              className="text-2xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight font-mono tracking-wider whitespace-nowrap"
              style={{ letterSpacing: '0.1em' }}
            >
              PRANAY YALAMANCHALI
            </TextScramble>

            <div className="hidden lg:flex gap-1 mb-3 opacity-40">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>
              ))}
            </div>

            <div className="relative">
              <p className="text-xs lg:text-base text-white mb-5 lg:mb-6 leading-relaxed font-mono">
                math-cs ∩ cogsci ml ∈ ucsd. building systems, infrastructure, and tools that actually work — one iteration at a time.
              </p>

              <div className="hidden lg:block absolute -left-4 top-1/2 w-3 h-3 border border-white opacity-30" style={{ transform: 'translateY(-50%)' }}>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white" style={{ transform: 'translate(-50%, -50%)' }}></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
              <Link
                href="/projects"
                className="relative px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent text-white font-mono text-xs lg:text-sm border border-white hover:bg-white hover:text-black transition-all duration-200 group text-center"
              >
                <span className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                VIEW PROJECTS
              </Link>

              <Link
                href="/resume"
                className="relative px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent border border-white text-white font-mono text-xs lg:text-sm hover:bg-white hover:text-black transition-all duration-200 text-center"
                style={{ borderWidth: '1px' }}
              >
                READ THE RESUME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
