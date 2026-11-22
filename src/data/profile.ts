import type { ImageAsset, Profile } from '@/types/profile';
import { typeset } from '@/lib/typography';

/**
 * NỘI DUNG – lấy từ "PHẦN II: NỘI DUNG CHI TIẾT HỒ SƠ NĂNG LỰC" (docs/source/PHẦN II.docx).
 * Ảnh: điền `src` (ví dụ '/images/...webp'); để '' sẽ hiện placeholder.
 */


const img = {
  hero: {
    src: '/images/hero/vest-den-hoi-nghi.webp',
    alt: 'MC Anh Tâm trong bộ vest đen, cầm micro và kịch bản trên sân khấu hội nghị',
    position: 'center 18%',
  },
  story: {
    src: '/images/story/chan-dung-hau-truong.webp',
    alt: 'MC Anh Tâm mỉm cười bên bàn kịch bản trước giờ dẫn chương trình',
    position: 'center 28%',
  },
  about: {
    src: '/images/about/chan-dung-ngoai-troi.webp',
    alt: 'Chân dung MC Anh Tâm mỉm cười cầm micro và kịch bản tại một sự kiện ngoài trời',
    position: 'center 20%',
  },
  gala: {
    src: '/images/events/gala-dinner-hv-mc-van-minh.webp',
    alt: 'MC Anh Tâm dẫn Gala Dinner "Kết nối – Tri ân – Bứt phá" của Học viện MC Văn Minh',
    position: '48% center',
  },
  conference: {
    src: '/images/events/le-tong-ket-phung-hieu-2026.webp',
    alt: 'MC Anh Tâm dẫn Lễ tổng kết năm 2026 của Công ty Sách và Giáo dục Phụng Hiếu',
    position: '50% center',
  },
  totDongStage: {
    src: '/images/events/vang-mai-hao-khi-tot-dong.webp',
    alt: 'MC Anh Tâm trong tà áo dài vàng cùng bạn dẫn trên sân khấu chương trình nghệ thuật "Vang mãi hào khí Tốt Động – Chúc Động"',
    position: '52% center',
  },
  totDongArtist: {
    src: '/images/experience/tot-dong-cung-nghe-si.webp',
    alt: 'MC Anh Tâm trong tà áo dài vàng bên một nghệ sĩ biểu diễn tại Lễ kỷ niệm 600 năm Chiến thắng Tốt Động – Chúc Động',
    position: 'center 62%',
  },
  freshmen: {
    src: '/images/experience/chao-don-tan-sinh-vien-khoa-lich-su.webp',
    alt: 'MC Anh Tâm dẫn chương trình Chào đón tân sinh viên Khoa Lịch sử, Trường Đại học Sư phạm Hà Nội',
    position: 'center 40%',
  },
  graduation: {
    src: '/images/events/le-tot-nghiep-hv-mc-van-minh.webp',
    alt: 'MC Anh Tâm trong chiếc váy trắng ngà dẫn Lễ tốt nghiệp Wedding K81 – Event K76 của Học viện MC Văn Minh',
    position: '47% center',
  },
  opening: {
    src: '/images/events/le-khai-truong-anh-thao-group.webp',
    alt: 'MC Anh Tâm trong chiếc váy hồng phấn dẫn Lễ khai trương Anh Thảo Group tại Hà Nội',
    position: '46% center',
  },
  talkshow: {
    src: '/images/events/toa-dam-phu-nu-viet-nam.webp',
    alt: 'MC Anh Tâm dẫn Tọa đàm "Phụ nữ Việt Nam – Khát vọng và hành trình tỏa sáng" tại xã Quảng Bị',
    position: '62% center',
  },
  openingTrade: {
    src: '/images/events/le-khai-truong-ket-noi-thinh-vuong.webp',
    alt: 'MC Anh Tâm trong tà áo dài hồng nhạt dẫn Lễ khai trương "Kết nối thịnh vượng – Vững bước tương lai" tại Hà Nội',
    position: 'center 40%',
  },
  midAutumn: {
    src: '/images/events/dem-hoi-trang-ram-quang-bi.webp',
    alt: 'MC Anh Tâm trong trang phục trắng tại Đêm hội Trăng rằm xã Quảng Bị',
    position: 'center 55%',
  },
  readingAmbassador: {
    src: '/images/events/le-phat-dong-dai-su-van-hoa-doc.webp',
    alt: 'MC Anh Tâm trong tà áo dài hồng tại Lễ phát động Cuộc thi Đại sứ Văn hóa đọc năm 2026',
    position: '55% center',
  },
  bonsaiPortrait: {
    src: '/images/events/quang-ba-cay-canh-chan-dung.webp',
    alt: 'MC Anh Tâm mỉm cười bên cây cảnh nghệ thuật trong chương trình quảng bá cây cảnh Quảng Bị',
    position: 'center 30%',
  },
  wedding: {
    src: '/images/experience/le-thanh-hon.webp',
    alt: 'MC Anh Tâm trong tà áo dài hồng dẫn Lễ thành hôn bên tháp bánh cưới và tường hoa',
    position: 'center 40%',
  },
  launch: {
    src: '/images/events/le-ra-mat-trung-tam-van-hoa-quang-bi.webp',
    alt: 'MC Anh Tâm trong tà áo dài hồng tại Lễ ra mắt Trung tâm Văn hóa – Thể thao và Học tập cộng đồng xã Quảng Bị',
    position: 'center 45%',
  },
  promo: {
    src: '/images/experience/quang-ba-cay-canh-quang-bi.webp',
    alt: 'MC Anh Tâm giới thiệu cây cảnh nghệ thuật Quảng Bị trong chương trình quảng bá trên không gian số',
    position: '40% center',
  },
  community: {
    src: '/images/events/ngay-hoi-dai-doan-ket.webp',
    alt: 'MC Anh Tâm trong tà áo dài hồng tại Ngày hội Đại đoàn kết toàn dân tộc',
    position: 'center 40%',
  },
} satisfies Record<string, ImageAsset>;

const content: Profile = {
  brand: {
    monogram: 'AT',
    name: 'MC Anh Tâm',
    tagline: 'Sự đồng hành trọn vẹn.',
  },

  nav: [
    { id: 'about', label: 'Giới thiệu' },
    { id: 'experience', label: 'Kinh nghiệm' },
    { id: 'style', label: 'Phong cách' },
    { id: 'video', label: 'Video' },
    { id: 'events', label: 'Hình ảnh' },
    { id: 'contact', label: 'Đặt lịch' },
  ],

  /* TRANG 1 – BÌA */
  hero: {
    firstName: 'MC Anh',
    highlightName: 'Tâm',
    roles: ['Người dẫn chương trình', 'Biên tập viên', 'Nhà giáo dục'],
    tagline: 'Sự đồng hành trọn vẹn.',
    portrait: img.hero,
    primaryCta: { label: 'Đặt lịch ngay', href: '#contact' },
    secondaryCta: { label: 'Xem hình ảnh', href: '#events' },
  },

  highlights: {
    label: 'Dấu ấn tiêu biểu',
    items: [
      'Kỷ niệm 600 năm Chiến thắng Tốt Động',
      'Rung Chuông Vàng',
      'Voi Land',
      'Học viện MC Văn Minh',
      'Công ty Sách và Giáo dục Phụng Hiếu',
      'Ngày hội Đại đoàn kết toàn dân tộc',
      'Livestream nông sản địa phương',
    ],
  },

  /* TRANG 2 – LỜI NGỎ */
  story: {
    heading:
      'Người ta có thể quên một câu dẫn hay, nhưng sẽ nhớ mãi cảm giác được kết nối và trân trọng trên sân khấu',
    paragraphs: [
      'Tôi thích cảm giác đứng trên sân khấu. Thích cái khoảnh khắc bước ra ánh đèn, cầm micro và thấy hàng trăm đôi mắt đang cùng chia sẻ một không gian, một cảm xúc.',
      'Với tôi lúc mình đứng giữa sân khấu và khán giả, dùng sự chân thành, một chút duyên dáng, một chút tinh ý để kéo mọi người xích lại gần nhau hơn. Có những chương trình cần sự trang nghiêm, sâu lắng; có những buổi tiệc cần sự rộn ràng, quậy hết mình; cũng có những dấu ấn mộc. Ở đâu có người nghe, ở đó tôi muốn mang đến sự trọn vẹn.',
      'Tôi làm giáo dục, làm biên tập nội dung và làm MC. Ba công việc tưởng khác nhau nhưng lại gặp nhau ở một điểm: hiểu người nghe cần gì, biết chọn đúng lời để nói và luôn giữ sự tử tế với từng khoảnh khắc mình xuất hiện.',
    ],
    photo: img.story,
  },

  /* TRANG 3 – GIỚI THIỆU */
  about: {
    heading: 'Vì sao giữa hàng vạn profile, bạn có thể chọn MC Anh Tâm?',
    intro:
      'Được biết đến trong vai trò là một nhà giáo, một biên tập viên tại Voi Land và một người dẫn chương trình tâm huyết, MC Anh Tâm mang đến một màu sắc riêng biệt trên sân khấu: sự chỉn chu trong ngôn từ, sắc sảo trong tư duy nội dung và ấm áp trong phong thái giao tiếp.',
    photo: img.about,
    fields: ['Người dẫn chương trình', 'Biên tập viên tại Voi Land', 'Nhà giáo dục'],
    pillars: [
      {
        title: 'Tư duy của người làm nội dung',
        role: 'Biên tập viên',
        description:
          'Không dừng lại ở việc dẫn dắt theo lối mòn, Anh Tâm có khả năng phân tích cấu trúc chương trình, biên tập lời dẫn linh hoạt và chắt lọc thông điệp đắt giá để tôn vinh đúng trọng tâm của từng sự kiện.',
      },
      {
        title: 'Phong thái của người làm giáo dục',
        role: 'Nhà giáo',
        description:
          'Tạo dựng niềm tin tuyệt đối với khách hàng và khán giả nhờ sự điềm đạm, chuẩn xác về kiến thức nền tảng, khả năng làm chủ không gian và xử lý tình huống văn minh, tinh tế.',
      },
      {
        title: 'Bản lĩnh của người cầm micro đa sắc màu',
        role: 'Người dẫn chương trình',
        description:
          'Với mọi sự kiện, MC Anh Tâm luôn biết cách điều chỉnh "tần số" của mình để hòa quyện trọn vẹn với tinh thần của từng chương trình.',
      },
    ],
  },

  /* TRANG 4 & 5 – HÀNH TRÌNH VÀ KINH NGHIỆM */
  experience: {
    heading: 'Dấu ấn qua từng không gian sự kiện',
    subtitle: 'Hành trình và kinh nghiệm sân khấu',
    areas: [
      {
        title: 'Sự kiện Văn hóa – Lịch sử',
        highlight: 'Chương trình Kỷ niệm 600 năm Chiến thắng Tốt Động',
        description:
          'Với những chương trình mang chiều sâu lịch sử và tinh thần dân tộc, MC Anh Tâm thể hiện phong thái trang trọng, giọng đọc trầm ấm, hào sảng và giàu sức gợi.',
        image: img.totDongArtist,
        bookingType: 'culture',
      },
      {
        title: 'Hội nghị – Tọa đàm chuyên đề',
        description:
          'Đề cao sự chuẩn mực, khúc chiết và khả năng điều phối nhịp nhàng. Anh Tâm đóng vai trò là người giữ lửa cho các cuộc đối thoại, kết nối mạch lạc giữa diễn giả.',
        image: img.talkshow,
        bookingType: 'conference',
      },
      {
        title: 'Chương trình Giáo dục & Sân chơi trí tuệ',
        highlight: 'Chương trình Rung Chuông Vàng và các hoạt động giáo dục học đường',
        description:
          'Anh Tâm tạo nên không khí hào hứng, công bằng truyền cảm hứng giúp các em tự tin tỏa sáng.',
        image: img.freshmen,
        bookingType: 'education',
      },
      {
        title: 'Gala Dinner & GEN Party',
        description:
          'Khả năng hoạt náo văn minh, hài hước có chừng mực giúp khuấy động không khí, gắn kết tập thể và tạo nên những đêm tiệc bùng nổ cảm xúc.',
        image: img.gala,
        bookingType: 'gala',
      },
      {
        title: 'Livestream & Quảng bá thương mại',
        highlight: 'Các phiên Livestream quảng bá nông sản địa phương',
        description:
          'Anh Tâm chọn cách kể câu chuyện phía sau mỗi sản phẩm. Sự chân thành và am hiểu nội dung giúp tạo dựng niềm tin bền vững giữa người sản xuất và khách hàng.',
        image: img.promo,
        bookingType: 'livestream',
      },
      {
        title: 'Sự kiện Cưới hỏi & Dấu mốc gia đình',
        description:
          'Nhẹ nhàng, ấm áp và tinh tế. Anh Tâm nâng niu từng khoảnh khắc thiêng liêng, kết nối nhịp cầu tình thân giữa hai gia đình.',
        image: img.wedding,
        bookingType: 'wedding',
      },
      {
        title: 'Hoạt động Cộng đồng',
        description:
          'Gần gũi, nhiệt huyết và giàu tính lan tỏa, góp phần kết nối những tấm lòng nhân ái và nhân rộng các giá trị tích cực trong xã hội.',
        image: img.community,
        bookingType: 'community',
      },
    ],
  },

  /* TRANG 6 – PHONG CÁCH DẪN CHƯƠNG TRÌNH */
  styles: {
    heading: 'Đa sắc màu trong một bản sắc nhất quán',
    intro:
      'Mỗi sân khấu là một cuộc gặp gỡ ngắn ngủi, Anh Tâm sẽ dẫn bằng cả trái tim, để từng phút giây trôi qua đều trở thành ký ức đẹp.',
    items: [
      {
        title: 'Trang trọng & Lịch lãm',
        description: 'Chuẩn mực trong từng câu chữ, điềm đạm trong phong thái.',
        suitableFor: 'Sự kiện chính thống, hội nghị, lễ kỷ niệm',
      },
      {
        title: 'Cảm xúc & Truyền cảm hứng',
        description: 'Chạm đến chiều sâu tâm hồn bằng giọng nói ấm áp và ngôn từ giàu hình ảnh.',
        suitableFor: 'Chương trình nghệ thuật, tri ân, sự kiện gia đình',
      },
      {
        title: 'Trẻ trung & Năng động',
        description: 'Nhịp dẫn nhanh, hiện đại, bắt kịp xu hướng.',
        suitableFor: 'Sân chơi học đường, GEN Party, sự kiện ra mắt',
      },
      {
        title: 'Hoạt náo & Kết nối tập thể',
        description:
          'Khuấy động không khí bằng sự dí dỏm tinh tế, tạo sự gắn kết tự nhiên mà không gây cảm giác gượng gạo hay ồn ào.',
      },
      {
        title: 'Gần gũi & Chân thành',
        description: 'Mộc mạc, thuyết phục và giàu sức lan tỏa.',
        suitableFor: 'Hoạt động cộng đồng, quảng bá thương mại',
      },
    ],
  },

  /* TRIẾT LÝ LÀM NGHỀ */
  philosophy: {
    heading: 'Kết nối từ sự hiện diện trọn vẹn',
    paragraphs: [
      'Anh Tâm tin rằng điều làm nên linh hồn của một sự kiện không nằm ở kịch bản dài bao nhiêu trang, mà nằm ở việc người đứng trên sân khấu có thật sự đặt trái tim mình vào đó hay không.',
      'Sân khấu có thể rực rỡ hoặc mộc mạc, khán giả có thể hàng trăm người hay chỉ một góc nhỏ thân tình – nhưng chỉ cần mình đứng đó với sự trân trọng, nói bằng sự thật lòng và bắt đúng nhịp cảm xúc của người nghe, thì từng khoảnh khắc trôi qua đều trở nên đáng giá.',
    ],
  },

  /* HÌNH ẢNH SỰ KIỆN (ảnh thật) */
  events: [
    {
      caption: 'Chương trình nghệ thuật "Vang mãi hào khí Tốt Động – Chúc Động"',
      category: 'Văn hóa – Lịch sử',
      image: img.totDongStage,
    },
    { caption: 'Lễ khai trương Anh Thảo Group', category: 'Khai trương', image: img.opening },
    {
      caption: 'Lễ ra mắt Trung tâm Văn hóa – Thể thao xã Quảng Bị',
      category: 'Cộng đồng',
      image: img.launch,
    },
    {
      caption: 'Lễ tốt nghiệp Wedding K81 – Event K76, Học viện MC Văn Minh',
      category: 'Giáo dục',
      image: img.graduation,
    },
    { caption: 'Gala Dinner – Học viện MC Văn Minh', category: 'Gala Dinner', image: img.gala },
    {
      caption: 'Tọa đàm "Phụ nữ Việt Nam – Khát vọng và hành trình tỏa sáng"',
      category: 'Tọa đàm',
      image: img.talkshow,
    },
    { caption: 'Lễ khai trương "Kết nối thịnh vượng – Vững bước tương lai"', category: 'Khai trương', image: img.openingTrade },
    { caption: 'Đêm hội Trăng rằm – xã Quảng Bị', category: 'Cộng đồng', image: img.midAutumn },
    { caption: 'Lễ phát động Cuộc thi Đại sứ Văn hóa đọc năm 2026', category: 'Giáo dục', image: img.readingAmbassador },
    { caption: 'Quảng bá cây cảnh nghệ thuật Quảng Bị', category: 'Quảng bá', image: img.bonsaiPortrait },
  ],

  /*
   * VIDEO – file MP4 đã nén trong public/videos (+ ảnh bìa trong public/images/videos), hoặc link YouTube.
   * Video gốc nằm trong raw-videos/ (không đưa lên web). Video quay dọc đặt orientation: 'portrait'.
   */
  videos: {
    heading: 'Khoảnh khắc qua ống kính',
    intro: 'Bấm vào video để xem phong thái dẫn chương trình của MC Anh Tâm trên sân khấu.',
    featured: {
      src: '/videos/ky-niem-600-nam-tot-dong.mp4',
      poster: '/images/videos/ky-niem-600-nam-tot-dong.webp',
      title: 'Lễ kỷ niệm 600 năm Chiến thắng Tốt Động – Chúc Động (1426 – 2026)',
      category: 'Văn hóa – Lịch sử',
      duration: '1:20',
    },
    clips: [
      {
        src: '/videos/le-thanh-hon-20-09.mp4',
        poster: '/images/videos/le-thanh-hon-20-09.webp',
        position: 'center 41%',
        title: 'Lễ thành hôn',
        category: 'Cưới hỏi',
        orientation: 'portrait',
        duration: '1:23',
      },
      {
        src: '/videos/ngay-hoi-dai-doan-ket.mp4',
        poster: '/images/videos/ngay-hoi-dai-doan-ket.webp',
        title: 'Ngày hội Đại đoàn kết toàn dân tộc – Thôn 5, xã Quảng Bị',
        category: 'Cộng đồng',
        duration: '1:54',
      },
      {
        src: '/videos/trang-ram-quang-bi-2026.mp4',
        poster: '/images/videos/trang-ram-quang-bi-2026.webp',
        title: 'Đêm hội Trăng rằm – xã Quảng Bị',
        category: 'Trung thu',
        duration: '2:44',
      },
      {
        src: '/videos/hoi-thi-thcs-phu-la.mp4',
        poster: '/images/videos/hoi-thi-thcs-phu-la.webp',
        position: 'center 68%',
        title: 'Hội thi chào mừng ngày Nhà giáo Việt Nam – Trường THCS Phú La',
        category: 'Giáo dục',
        orientation: 'portrait',
        duration: '1:40',
      },
      {
        src: '/videos/cay-canh-nghe-thuat-quang-bi.mp4',
        poster: '/images/videos/cay-canh-nghe-thuat-quang-bi.webp',
        title: 'Đưa cây cảnh nghệ thuật Quảng Bị lên không gian số',
        category: 'Quảng bá địa phương',
        duration: '0:33',
      },
      {
        src: '/videos/hau-truong-ghi-hinh-nha-xuong.mp4',
        poster: '/images/videos/hau-truong-ghi-hinh-nha-xuong.webp',
        position: 'center 40%',
        title: 'Hậu trường ghi hình tại nhà xưởng',
        category: 'Hậu trường',
        orientation: 'portrait',
        duration: '0:11',
      },
    ],
  },

  contact: {
    phone: '0973 125 895',
    zalo: '0973125895',
    email: 'tamhnue2003@gmail.com',
    area: 'Hà Nội',
    /* TRANG 8 – LỜI HẸN VỚI ĐỐI TÁC */
    invitation: {
      label: 'Lời hẹn với đối tác',
      lead: 'Một chương trình thành công không chỉ nằm ở kịch bản hay sân khấu đẹp, mà nằm ở cảm giác người tham dự mang về sau khi ra về.',
      message:
        'Nếu bạn đang tìm một người dẫn chương trình có lửa nghề, bắt nhịp nhanh, xử lý sân khấu linh hoạt, nói chuyện có duyên và làm việc hết mình, tôi rất vui được đồng hành cùng bạn. Tôi không hứa những lời hoa mỹ – tôi cam kết sự nghiêm túc, sự chuẩn bị kỹ và nỗ lực để bạn không phải thất vọng khi chọn mình.',
    },
  },

  socials: [{ label: 'Facebook', url: 'https://www.facebook.com/Tam.nguyen28.02.2003' }],
};

/** Nội dung đã xử lý ngắt dòng tiếng Việt (giữ từ ghép trên cùng một dòng) – xem src/lib/typography.ts. */
export const profile: Profile = typeset(content);
