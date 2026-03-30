const destinationsData = [
  {
    title: "Vịnh Hạ Long",
    desc: "Kỳ quan thiên nhiên nổi tiếng với hàng nghìn đảo đá vôi giữa biển xanh.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/V%E1%BB%8Bnh_H%E1%BA%A1_Long"
  },
  {
    title: "Hội An",
    desc: "Phố cổ lung linh với đèn lồng và kiến trúc cổ kính.",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/H%E1%BB%99i_An"
  },
  {
    title: "Sa Pa",
    desc: "Núi rừng Tây Bắc nổi bật với khí hậu mát mẻ và ruộng bậc thang tuyệt đẹp.",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Sa_Pa"
  },
  {
    title: "Phú Quốc",
    desc: "Đảo ngọc với biển xanh, cát trắng và vẻ đẹp nghỉ dưỡng sang trọng.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Ph%C3%BA_Qu%E1%BB%91c"
  },
  {
    title: "Huế",
    desc: "Vùng đất cố đô mang vẻ đẹp cổ kính và chiều sâu văn hóa.",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Hu%E1%BA%BF"
  },
  {
    title: "An Giang",
    desc: "Miền đất tâm linh với núi non, đồng quê và vẻ đẹp miền Tây đặc trưng.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/An_Giang"
  }
];

const foodsData = [
  {
    title: "Phở",
    desc: "Món ăn biểu tượng của Việt Nam với nước dùng đậm đà và hương vị tinh tế.",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Ph%E1%BB%9F"
  },
  {
    title: "Bún bò Huế",
    desc: "Món ăn nổi tiếng với vị cay nhẹ, thơm sả và nước dùng đậm vị.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/B%C3%BAn_b%C3%B2_Hu%E1%BA%BF"
  },
  {
    title: "Bánh mì",
    desc: "Món ăn đường phố nổi tiếng thế giới với lớp vỏ giòn và nhân đa dạng.",
    image: "https://images.unsplash.com/photo-1600628422019-1dc2d2f3d27b?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/B%C3%A1nh_m%C3%AC"
  },
  {
    title: "Gỏi cuốn",
    desc: "Món ăn thanh mát và tươi ngon, rất được yêu thích.",
    image: "https://images.unsplash.com/photo-1625938145744-57c1d2a5d4b4?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/G%E1%BB%8Fi_cu%E1%BB%91n"
  },
  {
    title: "Cơm tấm",
    desc: "Món ăn quen thuộc miền Nam với sườn nướng thơm ngon đặc trưng.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/C%C6%A1m_t%E1%BA%A5m"
  },
  {
    title: "Cao lầu",
    desc: "Đặc sản Hội An với sợi mì dai, thịt đậm vị và rau sống tươi ngon.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Cao_l%E1%BA%A7u"
  }
];

const cultureData = [
  {
    icon: "👘",
    title: "Áo dài",
    desc: "Trang phục truyền thống thể hiện vẻ đẹp thanh lịch và duyên dáng của người Việt."
  },
  {
    icon: "🏮",
    title: "Tết Nguyên Đán",
    desc: "Lễ hội lớn nhất trong năm, là dịp đoàn tụ gia đình và gìn giữ truyền thống."
  },
  {
    icon: "🏛",
    title: "Giỗ Tổ Hùng Vương",
    desc: "Ngày lễ quan trọng thể hiện đạo lý uống nước nhớ nguồn của dân tộc."
  },
  {
    icon: "🎶",
    title: "Nghệ thuật dân gian",
    desc: "Quan họ, ca trù, cải lương và đờn ca tài tử là những giá trị nghệ thuật quý báu."
  },
  {
    icon: "🧧",
    title: "Phong tục truyền thống",
    desc: "Thờ cúng tổ tiên, lì xì đầu năm và nhiều nghi lễ mang đậm bản sắc Việt."
  },
  {
    icon: "🏯",
    title: "Di sản Việt Nam",
    desc: "Các di tích lịch sử, phố cổ và cố đô góp phần lưu giữ hồn dân tộc."
  }
];

const sliderData = [
  {
    title: "Vẻ đẹp biển đảo Việt Nam",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Ẩm thực tinh hoa",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Văn hoá truyền thống",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Thiên nhiên hùng vĩ",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop"
  }
];

const galleryData = [
  {
    title: "Hội An",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/H%E1%BB%99i_An"
  },
  {
    title: "Vịnh Hạ Long",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/V%E1%BB%8Bnh_H%E1%BA%A1_Long"
  },
  {
    title: "Phở Việt Nam",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Ph%E1%BB%9F"
  },
  {
    title: "Biển Việt Nam",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Nam"
  },
  {
    title: "Sa Pa",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Sa_Pa"
  },
  {
    title: "Huế",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop",
    link: "https://vi.wikipedia.org/wiki/Hu%E1%BA%BF"
  }
];
