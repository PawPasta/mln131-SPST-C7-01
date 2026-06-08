'use client';

import { Header } from '@/components/header';
import { SectionCard } from '@/components/section-card';
import { VideoSection } from '@/components/video-section';
import { References } from '@/components/references';
import { MindMap } from '@/components/mindmap';
import { RadialMap } from '@/components/radial-map';
import { ReferencesPrint } from '@/components/references-print';

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

import { RadialNode } from "@/components/radial-map";

const developmentRadialNodes: RadialNode[] = [
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
      {/* SCREEN ONLY WEBSITE LAYOUT */}
      <div className="no-print">
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
      </div>

      {/* PRINT ONLY 16:9 SLIDE DECK (HIDDEN ON SCREEN, VISIBLE ON PRINT) */}
      <div className="print-only">
        {/* Slide 1: Cover Slide */}
        <section className="print-slide">
          {/* Slide Header */}
          <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chương 7: Vấn Đề Gia Đình</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold">SPST-C7-01</span>
          </div>

          {/* Slide Body */}
          <div className="print-slide-body flex flex-col justify-center items-center text-center space-y-6 my-auto">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Bài thuyết trình</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Chương 7: Vấn Đề Gia Đình
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                Gia Đình; Biến Đổi Giá Trị
              </h2>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            
            <div className="grid grid-cols-4 gap-4 text-left max-w-4xl mx-auto mt-4 text-xs text-muted-foreground bg-slate-100/60 p-4 rounded-xl border border-slate-200/50">
              <div><strong>Môn học:</strong> Chủ nghĩa xã hội khoa học</div>
              <div><strong>Mã lớp:</strong> SPST-C7-01</div>
              <div><strong>Chủ đề:</strong> Thiết chế gia đình</div>
              <div><strong>Đối tượng:</strong> Sinh viên Đại học</div>
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] text-muted-foreground w-full">
            <span>Học phần: Chủ nghĩa xã hội khoa học</span>
            <span className="font-bold">Slide 1 / 8</span>
          </div>
        </section>

        {/* Slide 2: I. Khái niệm Gia đình */}
        <section className="print-slide">
          {/* Slide Header */}
          <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chương 7: Vấn Đề Gia Đình</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold">SPST-C7-01</span>
          </div>

          {/* Slide Body */}
          <div className="print-slide-body">
            <h2 className="text-2xl font-bold text-primary mb-3">I. KHÁI NIỆM GIA ĐÌNH</h2>
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-7 space-y-3">
                {conceptItems.map((item, idx) => (
                  <div key={idx} className="bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-xs text-secondary mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {item.label}
                    </h3>
                    <ul className="space-y-1 text-[11px] text-foreground/80 pl-4">
                      {item.content.map((line, lineIdx) => (
                        <li key={lineIdx} className="list-disc leading-relaxed">{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="col-span-5 flex flex-col justify-between h-full space-y-3">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-sm border border-accent/20">
                  <img 
                    src="/images/khainiem.png" 
                    alt="Khái niệm Gia đình"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {relationshipItems.map((item, index) => (
                    <div key={index} className="p-2 rounded-lg bg-slate-50/80 border border-slate-100 text-center flex flex-col items-center justify-center">
                      <span className="text-lg mb-0.5">{item.icon}</span>
                      <h4 className="text-[10px] font-bold text-secondary">{item.title}</h4>
                      <p className="text-[9px] text-foreground/75 leading-tight mt-0.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] text-muted-foreground w-full">
            <span>I. Khái niệm Gia đình & các mối quan hệ cơ bản</span>
            <span className="font-bold">Slide 2 / 8</span>
          </div>
        </section>

        {/* Slide 3: II. Vị trí của Gia đình */}
        <section className="print-slide">
          {/* Slide Header */}
          <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chương 7: Vấn Đề Gia Đình</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold">SPST-C7-01</span>
          </div>

          {/* Slide Body */}
          <div className="print-slide-body">
            <h2 className="text-2xl font-bold text-primary mb-3">II. VỊ TRÍ CỦA GIA ĐÌNH TRONG XÃ HỘI</h2>
            
            {/* Center Node */}
            <div className="flex justify-center mb-5">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2 text-sm font-semibold text-white shadow-md">
                <strong>Gia đình</strong> trong <em>xã hội</em>
              </div>
            </div>

            {/* Branches list in 3-column cards, keeping bolding and original CSS style */}
            <div className="grid grid-cols-3 gap-4">
              {positionNodes.map((node, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-5 shadow-sm relative flex flex-col justify-between">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-px h-5 bg-accent/30"></div>
                  <div>
                    <h3 className="font-semibold text-secondary text-sm border-b border-slate-100 pb-2 mb-3">{node.title}</h3>
                    <ul className="space-y-2 text-foreground/75 text-left pl-4 list-disc">
                      {node.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-[11px] leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] text-muted-foreground w-full">
            <span>II. Vai trò & vị trí thiết yếu của thiết chế gia đình</span>
            <span className="font-bold">Slide 3 / 8</span>
          </div>
        </section>

        {/* Slide 4: III. Chức năng cơ bản */}
        <section className="print-slide">
          {/* Slide Header */}
          <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chương 7: Vấn Đề Gia Đình</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold">SPST-C7-01</span>
          </div>

          {/* Slide Body */}
          <div className="print-slide-body">
            <h2 className="text-2xl font-bold text-primary mb-4">III. CHỨC NĂNG CƠ BẢN CỦA GIA ĐÌNH</h2>
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-7">
                <div className="grid grid-cols-2 gap-3">
                  {functionItems.map((item, idx) => (
                    <div key={idx} className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="font-bold text-xs text-secondary mb-1 flex items-start gap-2">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-[10px]">
                            {idx + 1}
                          </span>
                          <span className="leading-snug">{item.label}</span>
                        </h3>
                        <ul className="space-y-0.5 text-[10px] text-foreground/75 pl-6">
                          {item.content.map((line, lineIdx) => (
                            <li key={lineIdx} className="list-disc leading-normal">{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-5">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-sm border border-accent/20">
                  <img 
                    src="/images/chucnang.png" 
                    alt="Chức năng gia đình"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] text-muted-foreground w-full">
            <span>III. Bốn chức năng nền tảng duy trì và phát triển xã hội</span>
            <span className="font-bold">Slide 4 / 8</span>
          </div>
        </section>

        {/* Slide 5: IV. Sự phát triển và Biến đổi */}
        <section className="print-slide">
          {/* Slide Header */}
          <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chương 7: Vấn Đề Gia Đình</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold">SPST-C7-01</span>
          </div>

          {/* Slide Body */}
          <div className="print-slide-body">
            <h2 className="text-2xl font-bold text-primary mb-3">IV. SỰ PHÁT TRIỂN & BIẾN ĐỔI CỦA GIA ĐÌNH VIỆT NAM</h2>
            
            {/* Center Node */}
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-1.5 text-xs font-semibold text-white shadow-md">
                <strong>Gia đình Việt Nam</strong> hiện đại
              </div>
            </div>

            {/* 4 Nodes rendered in a 2x2 Grid representing top, right, bottom, left */}
            <div className="grid grid-cols-2 gap-4">
              {developmentRadialNodes.map((node, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-4 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-secondary text-xs md:text-sm border-b border-slate-100 pb-1.5 mb-2">{node.title}</h3>
                    <ul className="space-y-1 text-foreground/75 text-left pl-4 list-disc">
                      {node.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-[10px] leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] text-muted-foreground w-full">
            <span>IV. Xu thế phát triển và sự biến đổi cấu trúc gia đình hiện đại</span>
            <span className="font-bold">Slide 5 / 8</span>
          </div>
        </section>

        {/* Slide 6: V. Video */}
        <section className="print-slide">
          {/* Slide Header */}
          <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chương 7: Vấn Đề Gia Đình</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold">SPST-C7-01</span>
          </div>

          {/* Slide Body */}
          <div className="print-slide-body flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-primary mb-4 w-full text-left">V. TẠI SAO NGƯỜI TRẺ NGẠI KẾT HÔN?</h2>
            
            <div className="grid grid-cols-12 gap-6 w-full items-center">
              <div className="col-span-7 space-y-4">
                <div className="p-4 bg-slate-100/80 rounded-xl border border-slate-200/50">
                  <h3 className="font-bold text-secondary text-sm mb-2">Podcast thảo luận: Vấn đề Hôn nhân của Giới trẻ</h3>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    Tập Podcast xoay quanh phân tích lý do tại sao người trẻ trong xã hội hiện đại có xu hướng trì hoãn hoặc e ngại việc kết hôn. 
                    Nội dung đề cập đến các vấn đề áp lực kinh tế, định hình sự nghiệp cá nhân, biến đổi quan điểm giá trị gia đình truyền thống và sự trỗi dậy của lối sống độc thân tự chủ.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 p-3 bg-red-50 rounded-lg border border-red-100 flex items-center gap-3">
                    <span className="text-2xl text-red-600">🎧</span>
                    <div>
                      <h4 className="text-xs font-bold text-red-900">Âm thanh Podcast</h4>
                      <p className="text-[10px] text-red-700/80">Thời lượng thảo luận đầy đủ</p>
                    </div>
                  </div>
                  <div className="flex-1 p-3 bg-indigo-50 rounded-lg border border-indigo-100 flex items-center gap-3">
                    <span className="text-2xl text-indigo-600">✍️</span>
                    <div>
                      <h4 className="text-xs font-bold text-indigo-900">Câu hỏi Tương tác</h4>
                      <p className="text-[10px] text-indigo-700/80">2 câu hỏi kiểm tra nhanh</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-5">
                {/* Beautiful video mock player */}
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 border border-slate-800 shadow-lg relative flex flex-col justify-center items-center text-white">
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                  
                  {/* Mock Play Button */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all">
                    <span className="text-white text-xl ml-1">▶</span>
                  </div>
                  
                  {/* YouTube style info bar */}
                  <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-center text-[10px] text-slate-300 font-semibold truncate">
                    <span>Tại Sao Người Trẻ Ngại Kết Hôn? | SPST-C7-01 Podcast</span>
                    <span>12:45</span>
                  </div>
                  
                  {/* Bottom mockup controls bar */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 h-1 bg-slate-600 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-red-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] text-muted-foreground w-full">
            <span>V. Phân tích thực tế: Podcast & câu hỏi nhanh tương tác</span>
            <span className="font-bold">Slide 6 / 8</span>
          </div>
        </section>

        {/* Slide 7: VI. Kết luận */}
        <section className="print-slide">
          {/* Slide Header */}
          <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chương 7: Vấn Đề Gia Đình</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold">SPST-C7-01</span>
          </div>

          {/* Slide Body */}
          <div className="print-slide-body">
            <h2 className="text-2xl font-bold text-primary mb-3">VI. TỔNG KẾT & KẾT LUẬN</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm flex flex-col justify-between">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <div className="pl-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary mb-2">
                    Góc nhìn hiện đại
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Quan niệm về Hôn nhân</h3>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    Người trẻ ngày nay không còn xem <span className="font-semibold text-slate-900">kết hôn</span> là đích đến duy nhất hay bắt buộc. 
                    Thay vào đó, nó là một quyết định tự giác và chín chắn, đòi hỏi sự chuẩn bị vững chắc về tài chính, tâm lý vững vàng và trách nhiệm pháp lý - đạo đức rõ ràng.
                  </p>
                </div>
                <div className="text-[9px] text-muted-foreground mt-2 italic pl-2">★ Xu hướng tất yếu của sự phát triển xã hội</div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm flex flex-col justify-between">
                <div className="absolute left-0 top-0 h-full w-1 bg-secondary" />
                <div className="pl-2">
                  <span className="inline-flex items-center rounded-full bg-secondary/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-secondary mb-2">
                    Giá trị cốt lõi
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Giá trị Bền vững của Gia đình</h3>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    Dù các mô hình hay cấu trúc gia đình có biến đổi, <span className="font-semibold text-slate-900">gia đình</span> vẫn giữ nguyên vai trò tối cao trong việc nuôi dưỡng thể chất, giáo dục đạo đức và tạo chỗ dựa tinh thần. 
                    Mấu chốt không phải kết hôn sớm hay muộn, mà là khả năng kiến tạo một <span className="font-semibold text-primary">gia đình hạnh phúc, văn minh</span>.
                  </p>
                </div>
                <div className="text-[9px] text-muted-foreground mt-2 italic pl-2">★ Giá trị cốt lõi duy trì tương lai xã hội</div>
              </div>
            </div>
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] text-muted-foreground w-full">
            <span>VI. Bài học rút ra & thông điệp cốt lõi về giá trị gia đình</span>
            <span className="font-bold">Slide 7 / 8</span>
          </div>
        </section>

        {/* Slide 8: VII. Tài liệu tham khảo */}
        <section className="print-slide">
          {/* Slide Header */}
          <div className="flex justify-between items-center border-b border-border/40 pb-3 mb-4 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chương 7: Vấn Đề Gia Đình</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold">SPST-C7-01</span>
          </div>

          {/* Slide Body */}
          <div className="print-slide-body justify-center">
            <ReferencesPrint />
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] text-muted-foreground w-full">
            <span>VII. Nguồn học liệu & giáo trình tham khảo chuẩn hóa</span>
            <span className="font-bold">Slide 8 / 8</span>
          </div>
        </section>
      </div>

      {/* Floating Action Button for PDF Export (only visible on screen) */}
      <div className="fixed bottom-6 right-6 z-50 no-print">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-2xl hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold cursor-pointer group"
          title="Xuất bài thuyết trình sang PDF"
        >
          <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🖨️</span>
          <span>Tải Slide PDF</span>
        </button>
      </div>
    </main>
  );
}

