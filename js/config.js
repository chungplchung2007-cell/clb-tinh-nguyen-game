/**
 * ============================================================================
 * KHỐI CẤU HÌNH TẬP TRUNG CHO TOÀN BỘ WEB MINI-GAME
 * ============================================================================
 */

// Thông tin Câu Lạc Bộ
const CLUB_CONFIG = {
  name: "CLB TÌNH NGUYỆN TRƯỜNG Y",
  slogan: "Tuổi trẻ dấn thân • Sẻ chia yêu thương",
  primaryColor: "#e63946",
  accentColor: "#ff8c38",
  bannerTitle: "KHOÁC ÁO ĐỎ - NỐI VÒNG TAY LỚN",
  bannerDesc: "Chào mừng bạn đến với đợt tuyển thành viên của CLB Tình Nguyện Trường Y! Hãy tham gia chuỗi mini-game trải nghiệm để khám phá ban chuyên môn phù hợp nhất với đam mê của bạn."
};

// ============================================================================
// >>> CHÈN ẢNH CỦA BẠN TẠI ĐÂY <<<
// Toàn bộ đường dẫn asset hình ảnh tập trung tại đây để dễ dàng thay thế
// ============================================================================
const IMAGE_CONFIG = {
  heroBanner: "assets/hero-banner.jpg",    // Banner Trang chủ Màn 1
  deptIcons: "assets/dept-icons.jpg",      // Bộ 4 biểu tượng ban Màn 2
  
  // 4 ban chuyên môn (ảnh gốc và ảnh artwork)
  deptIT: "assets/dept-it.png",
  deptContent: "assets/dept-noidung.png",
  deptFinance: "assets/dept-taichinh.png",
  deptHR: "assets/dept-nhansu.png",

  deptITArt: "assets/dept-it-art.png",
  deptContentArt: "assets/dept-noidung-art.png",
  deptFinanceArt: "assets/dept-taichinh-art.png",
  deptHRArt: "assets/dept-nhansu-art.png",

  volunteer: "assets/volunteer.jpg",      // Nhân vật Áo đỏ Tình nguyện viên
  candidate: "assets/candidate.jpg",      // Ứng viên / người qua đường
  miner: "assets/miner.jpg",              // Thợ mỏ gây quỹ Ban Tài chính
  
  // Tương thích với các mã ảnh theo yêu cầu đề bài
  anh1: "assets/hero-banner.jpg",
  anh2: "assets/dept-it-art.png",
  anh3: "assets/dept-noidung-art.png",
  anh4: "assets/dept-it-art.png",
  anh5: "assets/dept-noidung-art.png",
  anh6: "assets/dept-taichinh-art.png",
  anh7: "assets/dept-nhansu-art.png",
};

// ============================================================================
// >>> CHÈN ẢNH BẠN MUỐN GHÉP VÀO MẢNG NÀY <<<
// Danh sách ảnh cho Game 1 (Ban Truyền thông - IT - Ghép hình Jigsaw)
// Tự động chuyển sang ảnh tiếp theo khi hoàn thành ảnh trước đó!
// ============================================================================
const PUZZLE_IMAGES = [
  "assets/puzzle/puzzle1.jpg",
  "assets/puzzle/puzzle2.jpg"
];

// ============================================================================
// >>> CẤU HÌNH CÁC MÀN CHƠI GAME ĐÀO VÀNG (BAN TÀI CHÍNH) <<<
// level: Màn chơi; target: Số tiền/vàng cần đạt; time: Giới hạn thời gian (giây)
// ============================================================================
const GOLD_LEVELS = [
  { level: 1, target: 650, time: 60 },
  { level: 2, target: 1350, time: 60 },
  { level: 3, target: 2200, time: 55 },
  { level: 4, target: 3200, time: 50 }
];

// Dữ liệu chi tiết về 4 ban chuyên môn
const DEPARTMENTS_DATA = {
  1: {
    id: 1,
    name: "Ban Truyền thông - IT",
    badge: "CÔNG NGHỆ & HÌNH ẢNH",
    icon: "💻",
    file: "game1.html",
    gameName: "Ghép hình Jigsaw",
    btnLabel: "Chơi ngay",
    mission: "🎙 Là tiếng nói và hình ảnh của CLB, biến những câu chuyện ý nghĩa thành những thước phim, bài viết, ấn phẩm 'chạm' đến trái tim cộng đồng.",
    skills: "Thiết kế đồ họa, edit video, quản trị website & mạng xã hội, tư duy truyền thông.",
    guide: "Kéo thả hoặc chạm vào mảnh ghép ở khay rồi chạm vào đúng ô trên lưới 3x3 để hoàn thiện bức tranh.",
    image: "assets/dept-it-art.png",
    imageKey: "anh4"
  },
  2: {
    id: 2,
    name: "Ban Nội dung",
    badge: "NGÒI BÚT & Ý TƯỞNG",
    icon: "✍️",
    file: "game2.html",
    gameName: "Endless Runner Vượt Chướng Ngại",
    btnLabel: "Bắt đầu chạy",
    mission: "🏍 Là người tiên phong, đi đến những vùng đất mới, tìm hiểu, khảo sát và xây dựng nên 'linh hồn' cho mỗi chương trình.",
    skills: "Kỹ năng viết lách giàu cảm xúc, sáng tạo nội dung, lên kế hoạch hoạt động thiện nguyện.",
    guide: "Nhấn phím Space / Mũi tên Lên hoặc chạm màn hình để nhảy qua chướng ngại vật. Chạy càng xa km càng cao!",
    image: "assets/dept-noidung-art.png",
    imageKey: "anh5"
  },
  3: {
    id: 3,
    name: "Ban Tài chính",
    badge: "GÂY QUỸ & HẬU CẦN",
    icon: "💰",
    file: "game3.html",
    gameName: "Đào Vàng Gây Quỹ Tình Nguyện",
    btnLabel: "Chơi ngay",
    mission: "🪙 Là người đảm bảo sự bền vững cho mọi hoạt động, từ việc quản lý quỹ, gây quỹ đến việc đề xuất các giải pháp chi tiêu tối ưu.",
    skills: "Kỹ năng đối ngoại, thương thuyết tài trợ, quản trị tài chính và dự trù ngân sách.",
    guide: "Canh móc câu dao động trúng vàng rồi bấm Space hoặc chạm màn hình để phóng móc câu gom kinh phí về kho.",
    image: "assets/dept-taichinh-art.png",
    imageKey: "anh6"
  },
  4: {
    id: 4,
    name: "Ban Hành chính - Nhân sự",
    badge: "GẮN KẾT ĐẠI GIA ĐÌNH",
    icon: "🤝",
    file: "game4.html",
    gameName: "Chiêu Mộ Đội Ngũ Áo Đỏ",
    btnLabel: "Chơi ngay",
    mission: "💻 Là 'xương sống' của CLB, đảm bảo mọi quy trình vận hành trơn tru, quản lý thông tin nhân sự trong câu lạc bộ.",
    skills: "Quản trị nhân sự, lắng nghe, kết nối con người, sắp xếp công việc khoa học.",
    guide: "Dùng phím Mũi tên Lên/Xuống hoặc nút cảm ứng để chuyển làn thu nhận tân binh áo đỏ và né vật cản.",
    image: "assets/dept-nhansu-art.png",
    imageKey: "anh7"
  }
};

// Xuất ra window toàn cục
window.CLUB_CONFIG = CLUB_CONFIG;
window.IMAGE_CONFIG = IMAGE_CONFIG;
window.PUZZLE_IMAGES = PUZZLE_IMAGES;
window.GOLD_LEVELS = GOLD_LEVELS;
window.DEPARTMENTS_DATA = DEPARTMENTS_DATA;
