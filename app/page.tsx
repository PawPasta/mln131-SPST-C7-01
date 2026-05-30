'use client';

import { Header } from '@/components/header';
import { SectionCard } from '@/components/section-card';
import { VideoSection } from '@/components/video-section';
import { References } from '@/components/references';
import { MindMap } from '@/components/mindmap';
import { RadialMap } from '@/components/radial-map';

const conceptItems = [
  {
    label: 'Định nghĩa',
    content: [
      <>
        Gia đình là một hình thức <strong>cộng đồng xã hội</strong> đặc biệt, được hình thành,
        duy trì và củng cố chủ yếu dựa trên cơ sở <strong>hôn nhân</strong>, quan hệ{' '}
        <strong>huyết thống</strong> và quan hệ <strong>nuôi dưỡng</strong>.
      </>,
      <>
        Cùng với những quy định về <strong>quyền</strong> và <strong>nghĩa vụ</strong> của các
        thành viên trong <em>gia đình</em>.
      </>
    ]
  },
  {
    label: 'Các mối quan hệ chủ yếu',
    content: [
      <>
        Quan hệ <strong>hôn nhân</strong> – quan hệ chiều ngang (<em>vợ</em> và <em>chồng</em>)
      </>,
      <>
        Quan hệ <strong>huyết thống</strong> – quan hệ chiều dọc (<em>cha mẹ</em> -{' '}
        <em>con cái</em>)
      </>,
      <>
        Quan hệ <strong>nuôi dưỡng</strong> (<em>cha mẹ nuôi</em> - <em>con nuôi</em>)
      </>
    ]
  }
];

const relationshipItems = [
  {
    icon: '💍',
    title: <strong>Hôn nhân</strong>,
    description: (
      <>
        Quan hệ <em>vợ chồng</em> theo chiều <strong>ngang</strong>
      </>
    )
  },
  {
    icon: '🧬',
    title: <strong>Huyết thống</strong>,
    description: (
      <>
        <strong>Cha mẹ</strong> ↔ <strong>con cái</strong> theo chiều <em>dọc</em>
      </>
    )
  },
  {
    icon: '🤝',
    title: <strong>Nuôi dưỡng</strong>,
    description: (
      <>
        Quan hệ <strong>cha mẹ nuôi</strong> – <strong>con nuôi</strong>
      </>
    )
  }
];

const positionNodes = [
  {
    title: <strong>Gia đình là tế bào của xã hội</strong>,
    items: [
      <>
        Quyết định sự <strong>tồn tại</strong> và <strong>phát triển</strong> của xã hội
      </>,
      <>
        Tái sản xuất <strong>con người</strong>, tư liệu sản xuất và tiêu dùng
      </>
    ]
  },
  {
    title: <strong>Gia đình là tổ ấm</strong>,
    items: [
      <>
        Mang lại <strong>hạnh phúc</strong> và sự <em>hài hòa</em> trong đời sống cá nhân
      </>,
      <>
        Đảm bảo sự <strong>ổn định tâm lý</strong> cho mọi thành viên
      </>
    ]
  },
  {
    title: <strong>Gia đình là cầu nối</strong>,
    items: [
      <>
        Kết nối <strong>cá nhân</strong> với <strong>xã hội</strong>
      </>,
      <>
        Giúp cá nhân <em>hòa nhập</em> và <strong>phát triển</strong> bền vững
      </>
    ]
  }
];

const functionItems = [
  {
    label: 'Chức năng tái sản xuất con người',
    content: [
      <>
        Chức năng <strong>đặc thù</strong> không cộng đồng nào thay thế
      </>,
      <>
        Duy trì <strong>nòi giống</strong> và <strong>sức lao động</strong>
      </>
    ]
  },
  {
    label: 'Chức năng nuôi dưỡng và giáo dục',
    content: [
      <>
        Trách nhiệm <strong>nuôi dưỡng</strong>, <strong>dạy dỗ</strong> con cái
      </>,
      <>
        Hình thành <em>nhân cách</em> và <strong>đạo đức</strong>
      </>
    ]
  },
  {
    label: 'Chức năng kinh tế',
    content: [
      <>
        Đảm bảo đời sống <strong>vật chất</strong> và <strong>tinh thần</strong>
      </>,
      <>
        Tham gia <em>sản xuất</em> và <strong>tái sản xuất</strong> của cải
      </>
    ]
  },
  {
    label: 'Chức năng thỏa mãn nhu cầu tâm sinh lý',
    content: [
      <>
        Thỏa mãn nhu cầu <strong>tình cảm</strong>, <em>văn hóa</em>, <strong>tinh thần</strong>
      </>,
      <>
        Bảo vệ và <strong>chăm sóc sức khỏe</strong>
      </>
    ]
  }
];

const developmentRadialNodes = [
  {
    position: 'top',
    title: <strong>Cơ sở hình thành gia đình hiện đại</strong>,
    items: [
      <>
        Cơ sở <strong>kinh tế - xã hội</strong>: phát triển lực lượng sản xuất, xóa bỏ bất bình
        đẳng nam nữ
      </>,
      <>
        Cơ sở <strong>chính trị - xã hội</strong>: thiết lập nhà nước XHCN, giải phóng phụ nữ
      </>,
      <>
        Cơ sở <strong>văn hóa</strong>: nâng cao dân trí, hình thành chuẩn mực mới
      </>
    ]
  },
  {
    position: 'right',
    title: <strong>Sự biến đổi về quy mô gia đình</strong>,
    items: [
      <>
        Gia đình <strong>hai thế hệ</strong> thay thế gia đình <strong>ba - bốn thế hệ</strong>
      </>,
      <>
        Gia đình <strong>đơn</strong> trở nên phổ biến hơn trong xã hội
      </>
    ]
  },
  {
    position: 'bottom',
    title: <strong>Biến đổi trong các chức năng</strong>,
    items: [
      <>
        Sinh đẻ <strong>chủ động</strong>, tự giác, giảm mức sinh
      </>,
      <>
        Kinh tế chuyển từ <em>tự cấp tự túc</em> sang <strong>hàng hóa</strong>
      </>,
      <>
        Gia đình là <strong>đơn vị tiêu dùng</strong> quan trọng của xã hội
      </>
    ]
  },
  {
    position: 'left',
    title: <strong>Phương hướng phát triển</strong>,
    items: [
      <>
        Tăng cường <strong>lãnh đạo của Đảng</strong>, nâng cao nhận thức xã hội
      </>,
      <>
        Nâng cao <strong>đời sống vật chất</strong> và <strong>tinh thần</strong>
      </>,
      <>
        Kế thừa <em>giá trị truyền thống</em>, tiếp thu tiến bộ của nhân loại
      </>,
      <>
        Xây dựng <strong>gia đình văn hóa</strong>, <strong>gia đình hạnh phúc</strong>
      </>
    ]
  }
];

export default function Home() {
  const appendixUrl = process.env.NEXT_PUBLIC_AI_APPENDIX_URL;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Chương 7: Vấn Đề Gia Đình
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-secondary">
              Gia Đình; Biến Đổi Giá Trị
            </h2>
            <div className="flex justify-center">
              <span className="px-4 py-1.5 rounded-full bg-secondary/15 text-secondary font-semibold tracking-wide">
                SPST-C7-01
              </span>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6">
              Khám phá vai trò thiết yếu của <strong>gia đình</strong> trong xã hội, từ khái
              niệm cơ bản đến những <em>biến đổi</em> hiện đại của gia đình Việt Nam.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-16"></div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto space-y-24">
          <div id="concept" className="scroll-mt-24">
            <SectionCard
              title="I. KHÁI NIỆM GIA ĐÌNH"
              items={conceptItems}
              imageUrl="/images/khainiem.png"
              imageAlt="Gia đình"
            />
            <div className="mt-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">Mối quan hệ trong gia đình</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relationshipItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-card/90 shadow-sm">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h4 className="mt-3 text-lg font-semibold text-secondary">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="position" className="scroll-mt-24 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              II. VỊ TRÍ CỦA GIA ĐÌNH TRONG XÃ HỘI
            </h2>
            <MindMap
              center={
                <>
                  <strong>Gia đình</strong> trong <em>xã hội</em>
                </>
              }
              nodes={positionNodes}
              columns="grid-cols-1 md:grid-cols-3"
            />
          </div>

          <div id="functions" className="scroll-mt-24 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <SectionCard
              title="III. CHỨC NĂNG CƠ BẢN CỦA GIA ĐÌNH"
              items={functionItems}
              imageUrl="/images/chucnang.png"
              imageAlt="Chức năng gia đình"
              titlePlacement="header"
              imageHeightClass="h-[399px]"
            />
          </div>

          <div id="development" className="scroll-mt-24 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              IV. SỰ PHÁT TRIỂN VÀ BIẾN ĐỔI CỦA GIA ĐÌNH VIỆT NAM
            </h2>
            <RadialMap
              center={
                <>
                  <strong>Gia đình Việt Nam</strong> hiện đại
                </>
              }
              nodes={developmentRadialNodes}
              largeSize={true}
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <VideoSection title="V. Tại Sao Người Trẻ Ngại Kết Hôn?" />
        </div>
      </section>

      {/* Appendix Section */}
      <section id="appendix" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                VI. Ứng dụng AI
              </h2>
              <p className="text-muted-foreground">
                Tài liệu phụ lục sử dụng <strong>AI</strong> với liên kết <em>deeplink</em> từ{' '}
                <strong>Google Drive</strong>.
              </p>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-card/90 p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl">
                  🤖
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-foreground/80">
                    Tải hoặc xem nhanh nội dung phụ lục nhằm minh họa cách ứng dụng{' '}
                    <strong>AI</strong> trong nghiên cứu chủ đề gia đình.
                  </p>
                  {appendixUrl ? (
                    <a
                      href={appendixUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Mở phụ lục AI
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground">
                      Vui lòng cập nhật biến môi trường cho liên kết phụ lục.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <References />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Chương 7</h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Vấn đề gia đình - Gia đình; Biến đổi giá trị. Nội dung giáo dục toàn diện về
                khái niệm, vị trí và chức năng của gia đình trong xã hội Việt Nam.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Mục Lục</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#concept" className="hover:text-background transition-colors">I. Khái Niệm Gia Đình</a></li>
                <li><a href="#position" className="hover:text-background transition-colors">II. Vị Trí Của Gia Đình</a></li>
                <li><a href="#functions" className="hover:text-background transition-colors">III. Chức Năng Gia Đình</a></li>
                <li><a href="#development" className="hover:text-background transition-colors">IV. Phát Triển & Biến Đổi</a></li>
                <li><a href="#video" className="hover:text-background transition-colors">V. Tại Sao Người Trẻ Ngại Kết Hôn</a></li>
                <li><a href="#appendix" className="hover:text-background transition-colors">VI. Ứng dụng AI</a></li>
                <li><a href="#references" className="hover:text-background transition-colors">VII. Tài Liệu Tham Khảo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Nguồn Tham Khảo</h3>
              <p className="text-background/80 text-sm">
                Nội dung được biên soạn dựa trên các giáo trình chính thức của Bộ Giáo dục và Đào tạo Việt Nam.
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8">
            <p className="text-center text-background/70 text-sm">
              © 2024 Chương 7: Vấn Đề Gia Đình. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
