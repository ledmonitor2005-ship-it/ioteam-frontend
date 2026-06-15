export interface MetricData {
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
  label: string;
}

export interface PillarData {
  eyebrow: string;
  h3: string;
  body: string;
  chip: string;
  type: 'commercial' | 'financial' | 'operational';
}

export interface ProvenImpactData {
  header: {
    h2Prefix: string;
    h2Highlight: string;
    sub: string;
  };
  metrics: MetricData[];
  metricsMicrocopy: string;
  manifesto: string;
  pillars: PillarData[];
  proofStrip: {
    label: string;
    industries: string[];
  };
  bridgeLine: string;
}

export const PROVEN_IMPACT_DATA: ProvenImpactData = {
  header: {
    h2Prefix: 'Từ Dữ Liệu Vận Hành Đến ',
    h2Highlight: 'Giá Trị Bền Vững Được Tạo Ra',
    sub: 'Số liệu ghi nhận trực tiếp từ giải pháp EnMS đã triển khai tại Việt Nam — không phải ước tính.',
  },
  metrics: [
    {
      value: 4.3,
      decimals: 1,
      prefix: '~',
      suffix: ' tỷ VNĐ',
      label: 'Tiết kiệm chi phí điện năng hàng năm',
    },
    {
      value: 729,
      decimals: 0,
      prefix: '',
      suffix: ' triệu VNĐ',
      label: 'Cắt giảm chi phí nhân công hàng năm',
    },
  ],
  metricsMicrocopy: 'Dữ liệu thực tế tại các dự án triển khai',
  manifesto: 'EnMS không chỉ là phần mềm theo dõi năng lượng đây là giải pháp kiểm soát rủi ro và tối ưu chi phí',
  pillars: [
    {
      eyebrow: 'Về thương mại',
      h3: 'Vượt rào cản xuất khẩu',
      body: 'Hệ thống số hóa dữ liệu phát thải để vượt rào cản CBAM và đạt chuẩn ISO 50001, giữ vững vị thế doanh nghiệp xuất khẩu.',
      chip: 'CBAM · ISO 50001 · export-ready',
      type: 'commercial',
    },
    {
      eyebrow: 'Về tài chính',
      h3: 'Cắt giảm chi phí trước khi chốt hóa đơn',
      body: 'EnMS cắt giảm 5-15% OPEX bằng cách loại bỏ lãng phí giờ cao điểm và chặn đứng rủi ro phạt Cos phi từ EVN trước khi chốt hóa đơn.',
      chip: '10–15% OPEX ↓ · 0 phạt Cos phi',
      type: 'financial',
    },
    {
      eyebrow: 'Về vận hành',
      h3: 'Giám sát realtime, không gián đoạn sản xuất',
      body: 'Giải pháp đã xóa bỏ báo cáo Excel thủ công, thiết lập giám sát realtime 24/7 với các chuẩn khoa học (EnB, SEC, CUSUM) để dự báo chính xác. Lắp đặt giải pháp không làm gián đoạn sản xuất.',
      chip: '24/7 realtime · EnB · SEC · CUSUM',
      type: 'operational',
    },
  ],
  proofStrip: {
    label: 'Đã kiểm chứng trong các ngành:',
    industries: [
      'Dệt may',
      'Vật liệu xây dựng',
      'Bao bì nhựa',
      'Chế biến nông sản',
      'Tòa nhà & công trình xanh',
      'Hạ tầng điện',
    ],
  },
  bridgeLine: 'Mỗi cam kết phía trên đều được chứng minh bằng dự án thực tế — xem chi tiết ngay bên dưới.',
};
