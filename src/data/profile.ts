import type { ImageAsset, Profile } from '@/types/profile';
import { typeset } from '@/lib/typography';

/**
 * NỘI DUNG – lấy từ "PHẦN II: NỘI DUNG CHI TIẾT HỒ SƠ NĂNG LỰC" (docs/source/PHẦN II.docx).
 * Ảnh: điền `src` (ví dụ '/images/...webp'); để '' sẽ hiện placeholder.
 */

const ph = (alt: string, label = alt): ImageAsset => ({ src: '', alt, label });

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
    src: '/images/about/dan-le-tot-nghiep.webp',
    alt: 'MC Anh Tâm dẫn Lễ tốt nghiệp Wedding K81 – Event K76 tại Học viện MC Văn Minh',
    position: '55% center',
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
  graduation: {
    src: '/images/events/le-tot-nghiep-hv-mc-van-minh.webp',
    alt: 'MC Anh Tâm trên sân khấu Lễ tốt nghiệp của Học viện MC Văn Minh',
    position: '48% center',
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
    tagline: 'Dẫn bằng tư duy – Chạm bằng cảm xúc.',
  },

  nav: [
    { id: 'about', label: 'Giới thiệu' },
    { id: 'experience', label: 'Kinh nghiệm' },
    { id: 'style', label: 'Phong cách' },
    { id: 'values', label: 'Giá trị' },
    { id: 'events', label: 'Hình ảnh' },
    { id: 'contact', label: 'Đặt lịch' },
  ],

  /* TRANG 1 – BÌA */
  hero: {
    firstName: 'MC Anh',
    highlightName: 'Tâm',
    roles: ['Người dẫn chương trình', 'Biên tập viên', 'Nhà giáo dục'],
    tagline: 'Dẫn bằng tư duy – Chạm bằng cảm xúc.',
    quote:
      'Tôi bước lên sân khấu không phải để tỏa sáng một mình, mà để cùng bạn thắp sáng câu chuyện của chính sự kiện ấy.',
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
    heading: 'Không chỉ là cầm micro, đó là hành trình giữ nhịp cho những cảm xúc.',
    question:
      'Có người từng hỏi tôi: "Điều gì giữ chân một người làm giáo dục và biên tập nội dung đứng dưới ánh đèn sân khấu?"',
    paragraphs: [
      'Câu trả lời nằm ở khoảnh khắc khi tiếng nhạc hiệu vang lên, ánh đèn hội trường dịu xuống và hàng trăm ánh mắt cùng hướng về một điểm. Ở giây phút ấy, tôi nhận ra mình không đơn thuần là người đọc lên những dòng kịch bản đã soạn sẵn. Tôi đang là chiếc cầu nối vô hình giữa ý đồ của người tổ chức và trái tim của người tham dự.',
      'Với tôi, mỗi sự kiện là một sinh thể sống có nhịp đập riêng. Có những sân khấu đòi hỏi sự lắng đọng, trang nghiêm để tôn vinh những giá trị lịch sử trăm năm; có những không gian cần sự bùng nổ, rộn rã để gắn kết những tâm hồn trẻ; và cũng có những khoảnh khắc đời thường mộc mạc, nơi lời nói cần sự chân thành để lan tỏa giá trị của sản vật quê hương.',
      'Nghề dẫn chương trình dạy tôi sự trân trọng: trân trọng từng thanh âm tiếng Việt, trân trọng công sức thầm lặng của ekip phía sau cánh gà, và trân trọng từng phút giây hiện diện của khán giả. Tôi bước lên sân khấu không phải để tỏa sáng một mình, mà để cùng bạn thắp sáng câu chuyện của chính sự kiện ấy.',
    ],
    photo: img.story,
  },

  /* TRANG 3 – GIỚI THIỆU */
  about: {
    heading: 'MC Anh Tâm – Sự giao thoa giữa Chuẩn mực, Tư duy và Cảm xúc',
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
          'Từ những buổi lễ kỷ niệm mang tầm vóc văn hóa – lịch sử đến những hội nghị chuyên đề, từ sân chơi trí tuệ học đường đến các đêm tiệc Gala sôi động hay những phiên Livestream thương mại, MC Anh Tâm luôn biết cách điều chỉnh "tần số" của mình để hòa quyện trọn vẹn với tinh thần của từng chương trình.',
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
          'Với những chương trình mang chiều sâu lịch sử và tinh thần dân tộc, MC Anh Tâm thể hiện phong thái trang trọng, giọng đọc trầm ấm, hào sảng và giàu sức gợi. Từng lời dẫn được trau chuốt như những trang sử sống động, khơi dậy niềm tự hào và sự lắng đọng trong lòng người tham dự.',
        image: ph('Sự kiện Văn hóa – Lịch sử', 'Bổ sung ảnh Kỷ niệm 600 năm Chiến thắng Tốt Động'),
        bookingType: 'culture',
      },
      {
        title: 'Hội nghị – Tọa đàm chuyên đề',
        description:
          'Đề cao sự chuẩn mực, khúc chiết và khả năng điều phối nhịp nhàng. Anh Tâm đóng vai trò là người giữ lửa cho các cuộc đối thoại, kết nối mạch lạc giữa diễn giả, khách mời và khán giả, đảm bảo tính trang trọng nhưng vẫn giữ được sự cởi mở, tương tác cao.',
        image: img.conference,
        bookingType: 'conference',
      },
      {
        title: 'Giáo dục & Sân chơi trí tuệ',
        highlight: 'Chương trình Rung Chuông Vàng và các hoạt động giáo dục học đường',
        description:
          'Tận dụng thế mạnh của một nhà giáo, Anh Tâm dễ dàng thấu hiểu tâm lý học sinh, tạo nên không khí hào hứng, công bằng nhưng không kém phần kịch tính. Lối dẫn dắt gần gũi, truyền cảm hứng giúp các em tự tin tỏa sáng.',
        image: img.graduation,
        bookingType: 'education',
      },
      {
        title: 'Gala Dinner & GEN Party',
        description:
          'Rũ bỏ sự nghiêm nghị của hội trường, MC Anh Tâm mang đến nguồn năng lượng trẻ trung, hiện đại và tinh tế. Khả năng hoạt náo văn minh, hài hước có chừng mực giúp khuấy động không khí, gắn kết tập thể và tạo nên những đêm tiệc bùng nổ cảm xúc.',
        image: img.gala,
        bookingType: 'gala',
      },
      {
        title: 'Livestream & Quảng bá thương mại',
        highlight: 'Các phiên Livestream quảng bá nông sản địa phương',
        description:
          'Không sử dụng lối bán hàng ồn ào, Anh Tâm chọn cách kể câu chuyện phía sau mỗi sản phẩm – từ mồ hôi của người nông dân đến giá trị văn hóa của đặc sản quê hương. Sự chân thành và am hiểu nội dung giúp tạo dựng niềm tin bền vững giữa người sản xuất và khách hàng.',
        image: ph('Livestream quảng bá nông sản', 'Bổ sung ảnh phiên Livestream nông sản'),
        bookingType: 'livestream',
      },
      {
        title: 'Sự kiện Cưới hỏi & Dấu mốc gia đình',
        description:
          'Nhẹ nhàng, ấm áp và tinh tế. Anh Tâm nâng niu từng khoảnh khắc thiêng liêng, kết nối nhịp cầu tình thân giữa hai gia đình bằng những lời chúc phúc chân thành, giàu chất thơ.',
        image: ph('Sự kiện cưới hỏi', 'Bổ sung ảnh dẫn tiệc cưới'),
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
      'Sự linh hoạt của MC Anh Tâm không đến từ việc thay đổi bản chất, mà đến từ khả năng thấu hiểu không gian để lựa chọn sắc thái phù hợp nhất.',
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

  /* TRANG 7 – GIÁ TRỊ */
  values: {
    heading: '6 Điểm tựa làm nên sự tin cậy',
    items: [
      {
        title: 'Ngôn ngữ chuẩn xác & Giàu tính thẩm mỹ',
        description:
          'Vốn từ phong phú, phát âm chuẩn mực, biết cách nhấn nhá và sử dụng ngôn từ phù hợp với từng đối tượng khán giả.',
      },
      {
        title: 'Tư duy biên tập & Xây dựng kịch bản',
        description:
          'Khả năng đọc hiểu sâu sắc mục tiêu chương trình, chủ động phối hợp cùng Ban tổ chức để hoàn thiện kịch bản lời dẫn mạch lạc, có điểm nhấn.',
      },
      {
        title: 'Bản lĩnh ứng biến sân khấu',
        description:
          'Sự bình tĩnh được rèn giũa qua môi trường giáo dục và sự kiện thực tế giúp xử lý khéo léo các tình huống phát sinh ngoài kịch bản.',
      },
      {
        title: 'Tư duy điều phối & Kiểm soát thời lượng',
        description:
          'Luôn nắm rõ tổng thể chương trình, giữ nhịp độ diễn ra đúng tiến độ, phối hợp ăn ý với bộ phận âm thanh, ánh sáng và đạo diễn sân khấu.',
      },
      {
        title: 'Khả năng kết nối & Truyền tải cảm xúc',
        description:
          'Không chỉ "nói" cho khán giả nghe, mà biết "lắng nghe" phản ứng của khán phòng để điều chỉnh cảm xúc kịp thời.',
      },
      {
        title: 'Tác phong chuyên nghiệp & Tinh thần trách nhiệm',
        description:
          'Luôn có mặt sớm trước giờ diễn, nghiên cứu kỹ lưỡng thông tin khách hàng/sản phẩm và đặt sự thành công chung của sự kiện lên hàng đầu.',
      },
    ],
  },

  /* TRANG 8 & 9 – TRIẾT LÝ & THƠ */
  philosophy: {
    heading: 'Khi chiếc micro trở thành nhịp cầu của những ký ức',
    paragraphs: [
      'Mỗi chương trình đều mang trong mình một câu chuyện riêng. Mỗi sân khấu đều cất giữ một tần số cảm xúc riêng. Ánh đèn rồi sẽ tắt, âm thanh rồi sẽ lắng xuống, nhưng dư âm của một sự kiện thành công sẽ ở lại rất lâu trong lòng người tham dự.',
      'Với tôi, người dẫn chương trình không phải là nhân vật chính của bữa tiệc, mà là người giữ lửa thầm lặng – người dùng ngôn từ để kết nối những mảnh ghép rời rạc thành một bức tranh trọn vẹn, để mỗi khoảnh khắc trôi qua đều trở thành một ký ức đáng nhớ.',
    ],
    poemTitle: 'Thanh âm từ trái tim người giữ nhịp',
    poem: [
      [
        'Mượn thanh âm dệt nhịp cầu cảm xúc,',
        'Gom yêu thương thành câu chuyện trên đài.',
        'Không phô trương giữa muôn vàn ánh sáng,',
        'Chỉ lặng thầm giữ lửa suốt đêm dài.',
      ],
      [
        'Mỗi lời trao là một lần trân trọng,',
        'Chạm tim người bằng sự thật chân thành.',
        'Để khoảnh khắc hóa thành miền ký ức,',
        'Trong dư âm còn đọng mãi an lành.',
      ],
    ],
  },

  /* HÌNH ẢNH SỰ KIỆN (ảnh thật) */
  events: [
    { caption: 'Gala Dinner – Học viện MC Văn Minh', category: 'Gala Dinner', image: img.gala },
    { caption: 'Hội nghị chuyên đề', category: 'Hội nghị', image: img.hero },
    { caption: 'Ngày hội Đại đoàn kết toàn dân tộc', category: 'Cộng đồng', image: img.community },
    { caption: 'Lễ tổng kết năm 2026 – Công ty Sách và Giáo dục Phụng Hiếu', category: 'Hội nghị', image: img.conference },
    { caption: 'Hậu trường – chuẩn bị kịch bản lời dẫn', category: 'Hậu trường', image: img.story },
    { caption: 'Lễ tốt nghiệp Wedding K81 – Event K76, Học viện MC Văn Minh', category: 'Giáo dục', image: img.about },
    { caption: 'Lễ tốt nghiệp – Học viện MC Văn Minh', category: 'Giáo dục', image: img.graduation },
  ],

  contact: {
    phone: '0973 125 895',
    zalo: '0973125895',
    email: 'tamnguyenthi28022003@gmail.com',
    area: 'Hà Nội',
    promises: [
      'Nghiên cứu kỹ lưỡng thông tin chương trình, khách hàng và sản phẩm',
      'Phối hợp cùng Ban tổ chức hoàn thiện kịch bản lời dẫn',
      'Có mặt sớm trước giờ diễn',
      'Giữ nhịp chương trình đúng tiến độ',
    ],
  },

  socials: [{ label: 'Facebook', url: 'https://www.facebook.com/Tam.nguyen28.02.2003' }],
};

/** Nội dung đã xử lý ngắt dòng tiếng Việt (giữ từ ghép trên cùng một dòng) – xem src/lib/typography.ts. */
export const profile: Profile = typeset(content);
