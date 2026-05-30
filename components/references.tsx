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

export function References() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">VII. Tài Liệu Tham Khảo</h2>
        <p className="text-muted-foreground">Các tài liệu học tập được sử dụng trong nội dung này</p>
      </div>

      <div className="space-y-4">
        {references.map((ref, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">
                    {ref.year}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{ref.author}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{ref.title}</h3>
                <p className="text-sm text-muted-foreground italic">{ref.publisher}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
