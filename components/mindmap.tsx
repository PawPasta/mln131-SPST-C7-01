import type { ReactNode } from 'react';

interface MindMapNode {
  title: ReactNode;
  items?: ReactNode[];
}

interface MindMapProps {
  center: ReactNode;
  nodes: MindMapNode[];
  columns?: string;
  layout?: 'vertical' | 'horizontal' | 'triangle';
}

export function MindMap({
  center,
  nodes,
  columns = 'grid-cols-1 md:grid-cols-2',
  layout = 'vertical'
}: MindMapProps) {
  if (layout === 'horizontal') {
    return (
      <div className="relative py-2">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex justify-center lg:justify-start">
            <div className="rounded-full bg-gradient-to-r from-primary/90 to-secondary/90 px-5 py-2 text-sm font-semibold text-white shadow-md animate-in fade-in zoom-in-95 duration-700">
              {center}
            </div>
          </div>
          <div className="relative flex-1 mt-6 lg:mt-0 lg:pl-6">
            <div className="absolute left-0 right-0 top-1/2 hidden lg:block h-px bg-accent/30" />
            <div className={`grid ${columns} gap-4`}>
              {nodes.map((node, index) => (
                <div
                  key={index}
                  className="relative pt-6 lg:pt-0 before:absolute before:top-0 before:left-1/2 before:h-6 before:w-px before:-translate-x-1/2 before:bg-accent/40 before:content-[''] lg:before:hidden"
                >
                  <div className="rounded-2xl border border-border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-3">
                    <h3 className="font-semibold text-secondary">{node.title}</h3>
                    {node.items && node.items.length > 0 ? (
                      <div className="mt-3 space-y-2 text-foreground/75">
                        {node.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex gap-3 items-start">
                            <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                            <p className="text-sm leading-relaxed flex-1">{item}</p>
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
      </div>
    );
  }

  if (layout === 'triangle') {
    return (
      <div className="relative py-2">
        <div className="flex justify-center">
          <div className="rounded-full bg-gradient-to-r from-primary/90 to-secondary/90 px-5 py-2 text-sm font-semibold text-white shadow-md animate-in fade-in zoom-in-95 duration-700">
            {center}
          </div>
        </div>

        <div className="relative mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nodes.map((node, index) => {
              const triangleClass =
                index === 0
                  ? 'md:col-span-2 md:justify-self-center md:max-w-[280px]'
                  : index === 1
                    ? 'md:justify-self-center md:max-w-[280px]'
                    : index === 2
                      ? 'md:justify-self-center md:max-w-[280px]'
                      : '';

              return (
                <div
                  key={index}
                  className={`relative pt-6 ${triangleClass} before:absolute before:top-0 before:left-1/2 before:h-6 before:w-px before:-translate-x-1/2 before:bg-accent/40 before:content-['']`}
                >
                  <div className="rounded-2xl border border-border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-3">
                    <h3 className="font-semibold text-secondary">{node.title}</h3>
                    {node.items && node.items.length > 0 ? (
                      <div className="mt-3 space-y-2 text-foreground/75">
                        {node.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex gap-3 items-start">
                            <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                            <p className="text-sm leading-relaxed flex-1">{item}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-2">
      <div className="flex justify-center">
        <div className="rounded-full bg-gradient-to-r from-primary/90 to-secondary/90 px-5 py-2 text-sm font-semibold text-white shadow-md animate-in fade-in zoom-in-95 duration-700">
          {center}
        </div>
      </div>

      <div className="relative mt-6">
        <div className="absolute left-1/2 top-2 hidden md:block h-px w-[72%] -translate-x-1/2 bg-accent/30" />
        <div className={`grid ${columns} gap-6`}>
          {nodes.map((node, index) => (
            <div
              key={index}
              className="relative pt-6 before:absolute before:top-0 before:left-1/2 before:h-6 before:w-px before:-translate-x-1/2 before:bg-accent/40 before:content-['']"
            >
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-3">
                <h3 className="font-semibold text-secondary">{node.title}</h3>
                {node.items && node.items.length > 0 ? (
                  <div className="mt-3 space-y-2 text-foreground/75">
                    {node.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-3 items-start">
                        <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                        <p className="text-sm leading-relaxed flex-1">{item}</p>
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
