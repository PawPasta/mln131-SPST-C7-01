import type { ReactNode } from 'react';

interface RadialNode {
  title: ReactNode;
  items?: ReactNode[];
  position: 'top' | 'right' | 'bottom' | 'left';
}

interface RadialMapProps {
  center: ReactNode;
  nodes: RadialNode[];
  largeSize?: boolean;
}

const positionClasses: Record<RadialNode['position'], string> = {
  top: 'md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2',
  right: 'md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2',
  bottom: 'md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2',
  left: 'md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2'
};

export function RadialMap({ center, nodes, largeSize = false }: RadialMapProps) {
  const minHeightClass = largeSize ? 'md:min-h-[900px]' : 'md:min-h-[360px]';
  const nodeWidthClass = largeSize ? 'md:w-[360px]' : 'md:w-[260px]';
  const nodePaddingClass = largeSize ? 'p-7' : 'p-5';
  const fontSizeClass = largeSize ? 'text-lg' : 'text-sm';
  const titleFontClass = largeSize ? 'text-lg' : 'text-base';

  return (
    <div className="relative">
      <div className={`relative min-h-[420px] ${minHeightClass}`}>
        <div className="hidden md:block absolute inset-6">
          <span className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-accent/30" />
          <span className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-accent/30" />
        </div>

        <div className="flex justify-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="rounded-full bg-gradient-to-r from-primary/90 to-secondary/90 px-5 py-2 text-sm font-semibold text-white shadow-md animate-in fade-in zoom-in-95 duration-700">
            {center}
          </div>
        </div>

        <div className="mt-6 md:mt-0 space-y-4 md:space-y-0">
          {nodes.map((node, index) => (
            <div key={index} className={`${nodeWidthClass} ${positionClasses[node.position]}`}>
              <div className={`rounded-2xl border border-border bg-background ${nodePaddingClass} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-3`}>
                <h3 className={`font-semibold text-secondary ${titleFontClass}`}>{node.title}</h3>
                {node.items && node.items.length > 0 ? (
                  <div className="mt-3 space-y-2 text-foreground/75">
                    {node.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-3 items-start">
                        <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                        <p className={`${fontSizeClass} leading-relaxed flex-1`}>{item}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
