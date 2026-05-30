'use client';

import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-sm' 
          : 'bg-gradient-to-b from-background to-background/95'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
              ❤️
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Chương 7: Vấn Đề Gia Đình</h1>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="italic">Gia Đình; Biến Đổi Giá Trị</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-semibold">SPST-C7-01</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex gap-3">
            <a
              href="#concept"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5"
            >
              I. Khái niệm
            </a>
            <a
              href="#position"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5"
            >
              II. Vị trí
            </a>
            <a
              href="#functions"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5"
            >
              III. Chức năng
            </a>
            <a
              href="#development"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5"
            >
              IV. Phát triển
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
