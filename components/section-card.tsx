import type { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  items?: Array<{ label: string; content: ReactNode[] }>;
  imagePlaceholder?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  sideContent?: ReactNode;
  layout?: 'side' | 'stacked';
  imageHeightClass?: string;
  titlePlacement?: 'column' | 'header';
}

export function SectionCard({ 
  title, 
  items,
  imagePlaceholder = true,
  imageUrl,
  imageAlt,
  sideContent,
  layout = 'side',
  imageHeightClass = 'h-96',
  titlePlacement = 'column',
}: SectionCardProps) {
  const media = sideContent ? (
    <div className="w-full">{sideContent}</div>
  ) : imageUrl ? (
    <div className={`w-full ${imageHeightClass} rounded-2xl overflow-hidden shadow-lg border-2 border-accent/20`}>
      <img 
        src={imageUrl} 
        alt={imageAlt || title}
        className="w-full h-full object-cover"
      />
    </div>
  ) : imagePlaceholder ? (
    <div className={`w-full ${imageHeightClass} rounded-2xl bg-gradient-to-br from-accent/30 to-secondary/30 border-2 border-dashed border-accent/50 flex items-center justify-center`}>
      <div className="text-center">
        <div className="text-6xl mb-3">📸</div>
        <p className="text-muted-foreground font-medium">Thêm hình ảnh minh họa</p>
        <p className="text-muted-foreground text-sm mt-1">Kích thước: 500x400px</p>
      </div>
    </div>
  ) : null;

  const titleNode = (
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{title}</h2>
  );

  const itemsNode = (
    <div className="space-y-6">
      {items?.map((item, idx) => (
        <div key={idx}>
          <h3 className="font-bold text-lg text-secondary mb-3">{item.label}</h3>
          <div className="space-y-2 text-foreground/75 ml-4">
            {item.content.map((line, lineIdx) => (
              <div key={lineIdx} className="flex gap-3 items-start">
                <span className="text-primary font-bold text-xl leading-none mt-0.5">•</span>
                <p className="text-base leading-relaxed flex-1">{line}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  if (layout === 'stacked') {
    return (
      <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div>
          {titleNode}
          {media ? <div className="w-full mb-8">{media}</div> : null}
          {itemsNode}
        </div>
      </div>
    );
  }

  if (titlePlacement === 'header') {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
        {titleNode}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            {itemsNode}
          </div>
          <div className="flex-1 min-h-96 sticky top-24">
            {media}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 items-start animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="flex-1">
        {titleNode}
        {itemsNode}
      </div>

      <div className="flex-1 min-h-96 sticky top-24">
        {media}
      </div>
    </div>
  );
}
