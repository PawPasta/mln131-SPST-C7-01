import type { ReactNode } from 'react';

interface Reference {
  year: number;
  author: ReactNode;
  title: ReactNode;
  publisher: ReactNode;
}

const references: Reference[] = [
  {
    year: 2021,
    author: <strong>Bộ Giáo dục và Đào tạo</strong>,
    title: (
      <>
        Giáo trình <em>Chủ nghĩa xã hội khoa học</em> (dùng cho sinh viên đại học hệ không
        chuyên lý luận chính trị)
      </>
    ),
    publisher: (
      <>
        Nhà xuất bản <strong>Chính trị quốc gia sự thật</strong>, <em>Hà Nội</em>
      </>
    )
  },
  {
    year: 2021,
    author: <strong>Bộ Giáo dục và Đào tạo</strong>,
    title: (
      <>
        Giáo trình <em>Chủ nghĩa xã hội khoa học</em> (dùng cho sinh viên đại học hệ chuyên
        lý luận chính trị)
      </>
    ),
    publisher: (
      <>
        Nhà xuất bản <strong>Chính trị quốc gia sự thật</strong>, <em>Hà Nội</em>
      </>
    )
  },
  {
    year: 2006,
    author: <strong>Bộ Giáo dục và Đào tạo</strong>,
    title: (
      <>
        Giáo trình <em>chủ nghĩa xã hội khoa học</em>
      </>
    ),
    publisher: (
      <>
        Nhà xuất bản <strong>Giáo dục và đào tạo</strong>
      </>
    )
  },
  {
    year: 2002,
    author: <strong>Hội đồng Trung ương chỉ đạo biên soạn</strong>,
    title: (
      <>
        Giáo trình <em>chủ nghĩa xã hội khoa học</em>
      </>
    ),
    publisher: (
      <>
        Nhà xuất bản <strong>Chính trị quốc gia sự thật</strong>, <em>Hà Nội</em>
      </>
    )
  },
  {
    year: 2018,
    author: <strong>Học viện Chính trị quốc gia Hồ Chí Minh</strong>,
    title: (
      <>
        Giáo trình <em>Chủ nghĩa xã hội khoa học</em> (Chương trình cao cấp lý luận chính
        trị)
      </>
    ),
    publisher: (
      <>
        Nhà xuất bản <strong>Lý luận chính trị</strong>, <em>Hà Nội</em>
      </>
    )
  }
];

export function ReferencesPrint() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1">VII. Tài Liệu Tham Khảo</h2>
        <p className="text-xs text-muted-foreground">Các tài liệu học tập được sử dụng trong nội dung này</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {references.map((ref, idx) => (
          <div 
            key={idx}
            className="bg-card rounded-xl border border-border p-4 hover:shadow-md flex flex-col justify-between"
          >
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-1 items-center mb-1">
                  <span className="inline-block px-2 py-0.5 bg-secondary/15 text-secondary rounded-full text-[10px] font-semibold">
                    {ref.year}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium truncate max-w-[100px]">{ref.author}</span>
                </div>
                <h3 className="font-semibold text-foreground text-xs leading-snug line-clamp-3 mb-1">{ref.title}</h3>
                <p className="text-[10px] text-muted-foreground italic line-clamp-2">{ref.publisher}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌐</span>
          <div className="text-left">
            <h4 className="text-xs font-bold text-primary">Website tương tác Chương 7: Vấn Đề Gia Đình</h4>
            <p className="text-[10px] text-muted-foreground">Truy cập để học tập, làm câu hỏi trắc nghiệm tương tác và xem đầy đủ video podcast</p>
          </div>
        </div>
        <a 
          href="https://mln131-spst-c7-01.vercel.app/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-xs font-bold text-primary hover:underline bg-white px-3 py-1.5 rounded-lg border border-border shadow-sm"
        >
          https://mln131-spst-c7-01.vercel.app/
        </a>
      </div>
    </div>
  );
}
