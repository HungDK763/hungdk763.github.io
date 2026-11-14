/**
 * =========================================================================
 * PROFILE CONFIGURATION (HỒ SƠ CÁ NHÂN & DỰ ÁN KỸ THUẬT)
 * =========================================================================
 * Hồ sơ của: ĐOÀN KHẮC HÙNG - Kỹ Sư Hệ Thống Nhúng (Embedded Systems Engineer)
 * Dữ liệu đồng bộ trực tiếp từ CV chính thức 2025.
 */

const PROFILE_CONFIG = {
  // 1. THÔNG TIN CÁ NHÂN (PERSONAL INFO)
  personal: {
    name: "Đoàn Khắc Hùng",
    role: "Kỹ Sư Hệ Thống Nhúng @ VinDynamics",
    company: "VinDynamics",
    birthYear: "2003",
    status: "Đang công tác tại VinDynamics",
    statusColor: "#22c55e",
    location: "Hà Nội, Việt Nam",
    phone: "0386618771",
    email: "tolahungstm@gmail.com",
    education: "Kỹ sư Kỹ thuật Điện - Điện tử, Đại học Công nghiệp Hà Nội (HaUI)",
    bio: "Kỹ sư hệ thống nhúng đam mê nghiên cứu và chế tạo phần cứng, thiết kế mạch PCB nhiều lớp và lập trình firmware điều khiển robot. Hiện đang công tác tại VinDynamics. Cựu Đội trưởng vô địch Robocon HaUI.",
    avatar: "assets/images/avatar.jpg", // Ảnh chân dung chính thức trích xuất từ CV
    resumeUrl: "data/CV_HungDK_2025_ENG.pdf", // Tệp CV PDF gốc
    socials: {
      github: "https://github.com/HungDK763",
      email: "mailto:tolahungstm@gmail.com",
      phone: "tel:0386618771"
    }
  },

  // 2. KỸ NĂNG CỐT LÕI (CORE SKILLS & TECHNOLOGIES)
  skills: [
    { name: "C / C++ (Embedded)", category: "Firmware" },
    { name: "Python (Automation & Data)", category: "Software" },
    { name: "Microcontrollers (STM32, ATmega, ESP32)", category: "Hardware" },
    { name: "Altium Designer & EasyEDA", category: "EDA / PCB" },
    { name: "PCB Layout (1 - 4 Layers)", category: "EDA / PCB" },
    { name: "SolidWorks & Onshape (3D CAD)", category: "Mechanical" },
    { name: "Control Algorithms (PID, Fuzzy PID, Kalman)", category: "Control" },
    { name: "Robot Kinematics & Inverse Kinematics", category: "Robotics" },
    { name: "Omni & Mecanum Motion Control", category: "Robotics" },
    { name: "Automotive: CAN 2.0 / CAN FD / LIN / CAPL", category: "Automotive" },
    { name: "Protocols: UART, I2C, SPI, 1-Wire, Modbus", category: "Protocols" },
    { name: "PLC Programming (Siemens S7-1200, S7-300)", category: "Industrial" }
  ],

  // 3. THÀNH TÍCH & GIẢI THƯỞNG TIÊU BIỂU (AWARDS & HONORS)
  awards: [
    {
      year: "2024",
      title: "Vô Địch Robocon ĐH Công nghiệp Hà Nội",
      team: "Đội DCN-LOE",
      desc: "Đội trưởng chỉ huy thiết kế toàn diện robot tự hành, hoàn thành bài thi trong 70 giây; Vòng 1/8 Chung kết Robocon Toàn quốc."
    },
    {
      year: "2024",
      title: "Giải Ba & Giải Sáng Tạo EC CHALLENGE",
      team: "Học viện CNBCVT PTIT",
      desc: "Giải thưởng sáng tạo trong thiết kế hệ thống phần cứng và thuật toán điều khiển nhúng thông minh."
    },
    {
      year: "2023",
      title: "Giải Nhì Robocon ĐH Công nghiệp Hà Nội",
      team: "Đội DCN-UBKM",
      desc: "Đội trưởng thiết kế hệ thống robot cơ sở và robot bắn vòng tự động; Vòng 1/8 Chung kết Toàn quốc."
    },
    {
      year: "2023",
      title: "Giải Ba Cuộc Thi SUMO ROBOT ĐH Bách Khoa Hà Nội",
      team: "HUST - Đội H2O",
      desc: "Thiết kế mạch công suất cao và thuật toán tác chiến đối kháng tự động."
    },
    {
      year: "2023",
      title: "Giải Nhất Cuộc Thi Mini ROBOCON",
      team: "Khoa Điện Tử - Đội DCN-NRR",
      desc: "Robot tự hành tốc độ cao đạt giải cao nhất cấp khoa."
    },
    {
      year: "2023 - 2024",
      title: "Vòng Chung Kết Quốc Gia Cuộc Thi Sáng Tạo Chie-Tech",
      team: "Đội DCN-URKCM",
      desc: "Đội trưởng 2 năm liên tiếp dẫn dắt đội thiết kế máy và cơ cấu cơ điện tử tự động hóa."
    }
  ],

  // 3.5 QUÁ TRÌNH HOẠT ĐỘNG & KINH NGHIỆM (CAREER TIMELINE)
  timeline: [
    {
      period: "03/2026 – Hiện tại",
      role: "Kỹ Sư Hệ Thống Nhúng",
      company: "VinDynamics",
      location: "Hà Nội",
      isCurrent: true,
      desc: "Nghiên cứu và phát triển phần cứng, thiết kế mạch PCB nhiều lớp và lập trình firmware điều khiển cho các hệ thống robot thông minh."
    },
    {
      period: "03/2025 – 03/2026",
      role: "Kỹ Sư Hệ Thống Ô Tô",
      company: "VinFast Việt Nam",
      location: "Hải Phòng / Hà Nội",
      isCurrent: false,
      desc: "Mô phỏng các hộp điều khiển ECU và phát triển công cụ điều khiển xe tự động; kiểm thử xác thực logic trên mạng truyền thông CAN 2.0 / CAN FD / LIN."
    },
    {
      period: "2023 – 03/2025",
      role: "Kỹ Sư Nhúng & Phần Cứng",
      company: "Freelance Engineer",
      location: "Dự án độc lập",
      isCurrent: false,
      desc: "Thiết kế phần cứng và lập trình bộ điều khiển máy uốn BMD 6 trục tự động, hệ thống điều khiển giường y tế và phần mềm dẫn đường xe tự hành AGV."
    },
    {
      period: "09/2022 – 03/2024",
      role: "Kỹ Sư R&D Sản Phẩm",
      company: "QT Vietnam Technology",
      location: "Hà Nội",
      isCurrent: false,
      desc: "Nghiên cứu, thiết kế phần cứng và phát triển firmware cho bộ kit học tập robot STEM và bộ nguồn AC đa năng."
    },
    {
      period: "2021 – 2024",
      role: "Đội Trưởng Robocon",
      company: "Đại học Công nghiệp Hà Nội",
      location: "Hà Nội",
      isCurrent: false,
      desc: "Tốt nghiệp chuyên ngành Kỹ thuật Điện - Điện tử. 3 năm liên tiếp tham gia Robocon Vietnam (2 năm Đội trưởng vô địch trường 2024, giải Nhì 2023, Vòng 1/8 Quốc gia)."
    }
  ],

  // 4. BỘ LỌC DANH MỤC DỰ ÁN (PROJECT CATEGORIES)
  categories: [
    { id: "all", label: "Tất cả dự án & Sản phẩm" },
    { id: "robotics", label: "Robot thi đấu & Chế tạo máy" },
    { id: "automotive", label: "Hệ thống ô tô & ECU" },
    { id: "pcb", label: "Thiết kế mạch & PCB" },
    { id: "industrial", label: "Tự động hóa & Thiết bị y tế" }
  ],

  // 5. DANH SÁCH DỰ ÁN THỰC CHIẾN (CASE STUDIES CHUẨN LOWINERTIA)
  projects: [
    {
      id: "robocon-2024-golden-season",
      category: "robotics",
      title: "ROBOCON 2024 – Robot Tự Hành 'Mùa Vàng' (Champion HaUI)",
      role: "Team Leader & Lead Embedded Engineer",
      timeline: "2023 - 2024",
      featured: true,
      tagline: "Thiết kế toàn diện robot tự hành vô địch Robocon Đại học Công nghiệp Hà Nội, hoàn thành bài thi tuyệt đối trong 70 giây.",
      heroImage: "assets/images/robocon_2024_robot1.jpg",
      skills: ["STM32", "C/C++", "Fuzzy PID", "State Machine", "SolidWorks", "Altium Designer", "Omni / Mecanum Drive"],
      overview: "Đảm nhiệm vai trò Đội trưởng kiêm Kỹ sư trưởng chịu trách nhiệm quy hoạch giải pháp kỹ thuật, tài chính, thiết kế cơ cấu cơ khí trên SolidWorks, thiết kế hệ thống mạch điện tử và lập trình thuật toán tự hành cho robot tranh tài tại đấu trường Robocon toàn quốc.",
      challenge: "Bài toán bám bóng và định vị tự động tốc độ cao trong môi trường thi đấu cạnh tranh khốc liệt; robot phải tăng tốc và đổi hướng liên tục nhưng không được trượt bánh hay gây lật quán tính.",
      solution: [
        "Lập trình kiến trúc máy trạng thái (State Machine) đa tầng kết hợp thuật toán điều khiển PID góc - vị trí và Fuzzy PID bám bóng theo thời gian thực.",
        "Thiết kế thuật toán làm mịn gia tốc (S-Curve Acceleration Control), giúp robot vận hành tốc độ tối đa mà vẫn giữ độ ổn định trọng tâm tuyệt đối.",
        "Thiết kế và gia công toàn bộ hệ thống bo mạch điều khiển nguồn và bo mạch chia tín hiệu modular chống nhiễu EMF giữa mạch lực và MCU."
      ],
      metrics: [
        { label: "Thành tích", value: "Vô Địch HaUI" },
        { label: "Thời gian hoàn thành", value: "70 Giây" },
        { label: "Đấu trường Quốc gia", value: "Vòng 1/8 Toàn quốc" }
      ],
      gallery: [
        "assets/images/robocon_2024_robot1.jpg",
        "assets/images/robocon_2024_robot2.jpg",
        "assets/images/pcb_modular_control_red.jpg"
      ],
      links: {
        demo: "https://www.youtube.com/results?search_query=ABU+Robocon+2024+DCN-LOE",
        github: "https://github.com/HungDK763"
      }
    },
    {
      id: "robocon-2023-ancient-temple",
      category: "robotics",
      title: "ROBOCON 2023 – Hệ Thống Robot Kép 'Khám Phá Ngôi Đền Cổ'",
      role: "Team Leader (Đội DCN-UBKM)",
      timeline: "2022 - 2023",
      featured: true,
      tagline: "Chỉ huy kỹ thuật chế tạo cặp robot phối hợp tự động và bán tự động, đạt Giải Nhì Robocon HaUI và lọt vào Vòng 1/8 Chung kết Quốc gia.",
      heroImage: "assets/images/robocon_2023_robot1.jpg",
      skills: ["STM32", "C/C++", "Omni-Wheel Drive", "PID Control", "SolidWorks", "Sensor Fusion", "Pneumatics"],
      overview: "Lãnh đạo đội ngũ kỹ sư cơ điện tử thiết kế hệ thống robot kép: một robot cơ sở đa hướng dẫn đường kết hợp cơ cấu ném vòng tự động của robot thỏ (bunny robot).",
      challenge: "Yêu cầu bắn vòng chuẩn xác vào các cột trụ xa ở các góc độ thay đổi liên tục; sai số tích lũy của cụm 4 bánh xe Omni khi nền sân trơn trượt.",
      solution: [
        "Xây dựng thuật toán điều khiển truyền động Omni-wheel 4 bánh với vòng kín PID kép kiểm soát đồng thời khoảng cách và góc quay.",
        "Thiết kế thuật toán ngắm bắn tự động: tính toán góc nâng cơ khí và lực bắn khí nén bù trừ sai số khoảng cách theo thời gian thực.",
        "Thiết kế phân tầng hệ thống điện: khối MCU điều khiển và khối van khí nén / động cơ DC công suất lớn được cách ly an toàn."
      ],
      metrics: [
        { label: "Thành tích", value: "Giải Nhì HaUI" },
        { label: "Đấu trường Quốc gia", value: "Vòng 1/8 Toàn quốc" },
        { label: "Độ chính xác ngắm", value: "95%+" }
      ],
      gallery: [
        "assets/images/robocon_2023_robot1.jpg",
        "assets/images/robocon_2023_robot2.jpg",
        "assets/images/pcb_stm32_main_blue.jpg"
      ],
      links: {
        demo: "https://www.youtube.com/results?search_query=ROBOCON+2023+DCN-UBKM",
        github: "https://github.com/HungDK763"
      }
    },
    {
      id: "vinfast-ecu-simulation",
      category: "automotive",
      title: "Hệ Thống Mô Phỏng ECU & Điều Khiển Xe Tự Động (VinFast)",
      role: "Automotive Systems Engineer @ VinFast",
      timeline: "03/2025 - 03/2026",
      featured: true,
      tagline: "Mô phỏng các hộp điều khiển ECU và phát triển công cụ điều khiển tự động phục vụ kiểm thử và xác thực hệ thống xe điện.",
      heroImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      skills: ["CAPL", "CAN 2.0 / CAN FD", "LIN", "ECU Simulation", "Low-Voltage Power Simulation", "Logic Validation"],
      overview: "Tại VinFast, trực tiếp tham gia mô phỏng các khối ECU và phát triển hệ thống điều khiển xe tự động: từ thiết kế hệ thống, lập trình, nghiệm thu (commissioning) đến kiểm tra hiệu năng và xác thực logic điều khiển.",
      challenge: "Đảm bảo tính toàn vẹn của dữ liệu trên bus CAN/LIN trong mọi kịch bản sụt áp nguồn thấp (low-voltage transient) và kiểm thử an toàn các tính năng xe tự động trước khi triển khai trên xe thử nghiệm.",
      solution: [
        "Phát triển hệ thống mô phỏng nguồn điện áp thấp chuyên dụng cho môi trường kiểm thử automotive.",
        "Lập trình kịch bản tự động hóa bằng CAPL và Python, giả lập tín hiệu cảm biến và gửi khung tin CAN/CAN FD xác thực phản hồi của ECU.",
        "Phát hiện sớm các trường hợp xung đột bus và lỗi logic điều khiển ngoài biên, giảm thiểu rủi ro khi thử nghiệm trên xe thật."
      ],
      metrics: [
        { label: "Độ tin cậy giao tiếp", value: "99.99% CAN Bus" },
        { label: "Thời gian phản hồi ECU", value: "Chuẩn Automotive" },
        { label: "Dự án tiêu biểu", value: "Low-voltage Power Sim" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80"
      ],
      links: {
        github: "https://github.com/HungDK763"
      }
    },
    {
      id: "modular-embedded-pcb-collection",
      category: "pcb",
      title: "Hệ Thống Bo Mạch Nhúng Modular & Mạch Điều Khiển Động Cơ",
      role: "Hardware & PCB Design Engineer",
      timeline: "2023 - 2025",
      featured: true,
      tagline: "Bộ sưu tập các bo mạch vi điều khiển modular và bo mạch công suất điều khiển động cơ DC/BLDC có phản hồi vòng kín PID.",
      heroImage: "assets/images/pcb_modular_control_red.jpg",
      skills: ["Altium Designer", "EasyEDA", "STM32", "Multi-layer PCB", "Power Electronics", "SolidWorks"],
      overview: "Thiết kế toàn diện từ sơ đồ nguyên lý (Schematic), layout mạch in (PCB từ 1 đến 4 lớp) cho đến xuất file Gerber gia công SMT và hàn lắp thử nghiệm cho các dự án robot và máy công nghiệp.",
      challenge: "Bố trí linh kiện mật độ cao trên bo mạch kích thước nhỏ; xử lý triệt để nhiễu cao tần từ cầu H công suất lớn sang khối MCU và các đường truyền tín hiệu analog ADC.",
      solution: [
        "Phân vùng mạch điện (Circuit Partitioning) rõ ràng giữa khối điều khiển 3.3V/5V và khối công suất lên đến 48V/30A.",
        "Sử dụng optocoupler cách ly quang, diode TVS triệt tiêu quá áp đột biến và cuộn lọc ferrite bead trên các đường nguồn MCU.",
        "Mô hình hóa 3D trên SolidWorks để kiểm tra độ khớp cơ khí với khung máy trước khi gửi xưởng sản xuất mạch."
      ],
      metrics: [
        { label: "Thiết kế PCB", value: "1 - 4 Lớp Mạch In" },
        { label: "Khả năng bảo vệ", value: "Cách ly quang & TVS" },
        { label: "Tỉ lệ thành công", value: "100% Hoạt động ngay" }
      ],
      gallery: [
        "assets/images/pcb_modular_control_red.jpg",
        "assets/images/pcb_stm32_main_blue.jpg",
        "assets/images/pcb_motor_driver_purple.jpg"
      ],
      links: {
        github: "https://github.com/HungDK763"
      }
    },
    {
      id: "freelance-industrial-controller",
      category: "industrial",
      title: "Bộ Điều Khiển Máy BMD 6 Trục & Thiết Bị Y Tế Thông Minh",
      role: "Freelance Embedded Engineer",
      timeline: "2023 - Mar 2025",
      featured: false,
      tagline: "Thiết kế mạch và lập trình bộ điều khiển máy uốn BMD 6 trục tự động & bộ điều khiển giường y tế thông minh.",
      heroImage: "assets/images/pcb_stm32_main_blue.jpg",
      skills: ["C/C++", "Kinematics", "Motion Control", "EasyEDA", "Stepper / Servo", "Medical Bed Controller", "AGV Guidance"],
      overview: "Cung cấp giải pháp phần cứng và nhúng theo đơn đặt hàng doanh nghiệp: từ máy gia công uốn uốn dây BMD 6 trục, bộ điều khiển giường bệnh y tế tự động đến phần mềm dẫn đường cho xe tự hành AGV nhà xưởng.",
      challenge: "Đồng bộ chuyển động 6 trục tọa độ với độ mịn cao không giật; thiết kế cơ chế bảo vệ an toàn y tế tuyệt đối chống kẹt cơ và quá tải.",
      solution: [
        "Lập trình thuật toán nội suy chuyển động đa trục (Multi-axis Motion Interpolation) trên vi điều khiển STM32.",
        "Thiết kế mạch điều khiển giường y tế với cảm biến bảo vệ quá dòng tự động ngắt khi phát hiện chướng ngại vật.",
        "Lập trình phần mềm dẫn đường cho xe tự hành AGV công nghiệp bám vạch quang/từ ổn định."
      ],
      metrics: [
        { label: "Số trục điều khiển", value: "6 Trục Đồng Bộ" },
        { label: "An toàn y tế", value: "Tự ngắt tức thì" },
        { label: "Ứng dụng", value: "Vận hành thực tế" }
      ],
      gallery: [
        "assets/images/pcb_stm32_main_blue.jpg",
        "assets/images/pcb_motor_driver_purple.jpg"
      ],
      links: {
        github: "https://github.com/HungDK763"
      }
    },
    {
      id: "qt-stem-robot-power-supply",
      category: "industrial",
      title: "Bộ Kit Robot STEM Cho Học Sinh & Bộ Nguồn AC Đa Năng",
      role: "R&D Embedded Engineer (QT Vietnam Tech)",
      timeline: "Sep 2022 - Mar 2024",
      featured: false,
      tagline: "Nghiên cứu, thiết kế phần cứng và phát triển firmware cho bộ kit học tập robot STEM và bộ nguồn AC đa chức năng.",
      heroImage: "assets/images/pcb_motor_driver_purple.jpg",
      skills: ["C/C++", "EasyEDA", "STEM Education", "Power Electronics", "Hardware Testing"],
      overview: "Tham gia R&D các dòng sản phẩm giáo dục và thiết bị điện tử thương mại cho công ty QT Vietnam Technology: thiết kế bo mạch, viết firmware và hướng dẫn sử dụng sản phẩm.",
      challenge: "Tối ưu hóa chi phí sản xuất bo mạch linh kiện để giá thành phù hợp học sinh nhưng vẫn đảm bảo độ bền cơ học và tính an toàn điện cao.",
      solution: [
        "Thiết kế bo mạch giáo dục với layout trực quan, bảo vệ chống cắm ngược cực và chống ngắn mạch.",
        "Viết thư viện lập trình C/C++ dễ tiếp cận cho học sinh và tài liệu hướng dẫn lắp ráp trực quan.",
        "Nghiên cứu bộ nguồn AC đa năng với các chế độ bảo vệ quá tải và hiển thị thông số điện áp."
      ],
      metrics: [
        { label: "Ứng dụng", value: "Sản phẩm thương mại" },
        { label: "Bảo vệ mạch", value: "Chống cắm ngược cực" },
        { label: "Đối tượng", value: "Giáo dục STEM" }
      ],
      gallery: [
        "assets/images/pcb_motor_driver_purple.jpg"
      ],
      links: {
        github: "https://github.com/HungDK763"
      }
    }
  ]
};

// Đảm bảo biến có thể truy cập toàn cục trong trình duyệt
if (typeof window !== 'undefined') {
  window.PROFILE_CONFIG = PROFILE_CONFIG;
}
