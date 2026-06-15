const fs = require('fs');
const path = require('path');

const dictionary = [
    ["năng lượng", "năng\u00a0lượng"],
    ["Năng lượng", "Năng\u00a0lượng"],
    ["NĂNG LƯỢNG", "NĂNG\u00a0LƯỢNG"],
    
    ["doanh nghiệp", "doanh\u00a0nghiệp"],
    ["Doanh nghiệp", "Doanh\u00a0nghiệp"],
    ["DOANH NGHIỆP", "DOANH\u00a0NGHIỆP"],
    
    ["vận hành", "vận\u00a0hành"],
    ["Vận hành", "Vận\u00a0hành"],
    ["VẬN HÀNH", "VẬN\u00a0HÀNH"],
    
    ["nhà máy", "nhà\u00a0máy"],
    ["Nhà máy", "Nhà\u00a0máy"],
    ["NHÀ MÁY", "NHÀ\u00a0MÁY"],
    
    ["công nghiệp", "công\u00a0nghiệp"],
    ["Công nghiệp", "Công\u00a0nghiệp"],
    ["CÔNG NGHIỆP", "CÔNG\u00a0NGHIỆP"],
    
    ["hiệu suất", "hiệu\u00a0suất"],
    ["Hiệu suất", "Hiệu\u00a0suất"],
    ["HIỆU SUẤT", "HIỆU\u00a0SUẤT"],
    
    ["phát thải", "phát\u00a0thải"],
    ["Phát thải", "Phát\u00a0thải"],
    ["PHÁT THẢI", "PHÁT\u00a0THẢI"],
    
    ["tiết kiệm", "tiết\u00a0kiệm"],
    ["Tiết kiệm", "Tiết\u00a0kiệm"],
    ["TIẾT KIỆM", "TIẾT\u00a0KIỆM"],
    
    ["chi phí", "chi\u00a0phí"],
    ["Chi phí", "Chi\u00a0phí"],
    ["CHI PHÍ", "CHI\u00a0PHÍ"],
    
    ["quản lý", "quản\u00a0lý"],
    ["Quản lý", "Quản\u00a0lý"],
    ["QUẢN LÝ", "QUẢN\u00a0LÝ"],
    
    ["giám sát", "giám\u00a0sát"],
    ["Giám sát", "Giám\u00a0sát"],
    ["GIÁM SÁT", "GIÁM\u00a0SÁT"],
    
    ["thời gian", "thời\u00a0gian"],
    ["Thời gian", "Thời\u00a0gian"],
    ["THỜI GIAN", "THỜI\u00a0GIAN"],
    
    ["thực tế", "thực\u00a0tế"],
    ["Thực tế", "Thực\u00a0tế"],
    ["THỰC TẾ", "THỰC\u00a0TẾ"],
    
    ["sản xuất", "sản\u00a0xuất"],
    ["Sản xuất", "Sản\u00a0xuất"],
    ["SẢN XUẤT", "SẢN\u00a0XUẤT"],
    
    ["báo cáo", "báo\u00a0cáo"],
    ["Báo cáo", "Báo\u00a0cáo"],
    ["BÁO CÁO", "BÁO\u00a0CÁO"],
    
    ["thủ công", "thủ\u00a0công"],
    ["Thủ công", "Thủ\u00a0công"],
    ["THỦ CÔNG", "THỦ\u00a0CÔNG"],
    
    ["sự cố", "sự\u00a0cố"],
    ["Sự cố", "Sự\u00a0cố"],
    ["SỰ CỐ", "SỰ\u00a0CỐ"],
    
    ["thấp điểm", "thấp\u00a0điểm"],
    ["Thấp điểm", "Thấp\u00a0điểm"],
    ["THẤP ĐIỂM", "THẤP\u00a0ĐIỂM"],
    
    ["cao điểm", "cao\u00a0điểm"],
    ["Cao điểm", "Cao\u00a0điểm"],
    ["CAO ĐIỂM", "CAO\u00a0ĐIỂM"],
    
    ["phản kháng", "phản\u00a0kháng"],
    ["Phản kháng", "Phản\u00a0kháng"],
    ["PHẢN KHÁNG", "PHẢN\u00a0KHÁNG"],
    
    ["cảnh báo", "cảnh\u00a0báo"],
    ["Cảnh báo", "Cảnh\u00a0báo"],
    ["CẢNH BÁO", "CẢNH\u00a0BÁO"],
    
    ["kiểm chứng", "kiểm\u00a0chứng"],
    ["Kiểm chứng", "Kiểm\u00a0chứng"],
    ["KIỂM CHỨNG", "KIỂM\u00a0CHỨNG"],
    
    ["quốc tế", "quốc\u00a0tế"],
    ["Quốc tế", "Quốc\u00a0tế"],
    ["QUỐC TẾ", "QUỐC\u00a0TẾ"],
    
    ["cạnh tranh", "cạnh\u00a0tranh"],
    ["Cạnh tranh", "Cạnh\u00a0tranh"],
    ["CẠNH TRANH", "CẠNH\u00a0TRANH"],
    
    ["lãng phí", "lãng\u00a0phí"],
    ["Lãng phí", "Lãng\u00a0phí"],
    ["LÃNG PHÍ", "LÃNG\u00a0PHÍ"],
    
    ["công suất", "công\u00a0suất"],
    ["Công suất", "Công\u00a0suất"],
    ["CÔNG SUẤT", "CÔNG\u00a0SUẤT"],
    
    ["hệ số", "hệ\u00a0số"],
    ["Hệ số", "Hệ\u00a0số"],
    ["HỆ SỐ", "HỆ\u00a0SỐ"],
    
    ["tối thiểu", "tối\u00a0thiểu"],
    ["Tối thiểu", "Tối\u00a0thiểu"],
    ["TỐI THIỂU", "TỐI\u00a0THIỂU"],
    
    ["yêu cầu", "yêu\u00a0cầu"],
    ["Yêu cầu", "Yêu\u00a0cầu"],
    ["YÊU CẦU", "YÊU\u00a0CẦU"],
    
    ["dữ liệu", "dữ\u00a0liệu"],
    ["Dữ liệu", "Dữ\u00a0liệu"],
    ["DỮ LIỆU", "DỮ\u00a0LIỆU"],
    
    ["phân tán", "phân\u00a0tán"],
    ["Phân tán", "Phân\u00a0tán"],
    ["PHÂN TÁN", "PHÂN\u00a0TÁN"],
    
    ["quản trị", "quản\u00a0trị"],
    ["Quản trị", "Quản\u00a0trị"],
    ["QUẢN TRỊ", "QUẢN\u00a0TRỊ"],
    
    ["thu thập", "thu\u00a0thập"],
    ["Thu thập", "Thu\u00a0thập"],
    ["THU THẬP", "THU\u00a0THẬP"],
    
    ["tiêu tốn", "tiêu\u00a0tốn"],
    ["Tiêu tốn", "Tiêu\u00a0tốn"],
    ["TIÊU TỐN", "TIÊU\u00a0TỐN"],
    
    ["nhân lực", "nhân\u00a0lực"],
    ["Nhân lực", "Nhân\u00a0lực"],
    ["NHÂN LỰC", "NHÂN\u00a0LỰC"],
    
    ["sai số", "sai\u00a0số"],
    ["Sai số", "Sai\u00a0số"],
    ["SAI SỐ", "SAI\u00a0SỐ"],
    
    ["khoa học", "khoa\u00a0học"],
    ["Khoa học", "Khoa\u00a0học"],
    ["KHOA HỌC", "KHOA\u00a0HỌC"],
    
    ["đánh giá", "đánh\u00a0giá"],
    ["Đánh giá", "Đánh\u00a0giá"],
    ["ĐÁNH GIÁ", "ĐÁNH\u00a0GIÁ"],
    
    ["hiệu quả", "hiệu\u00a0quả"],
    ["Hiệu quả", "Hiệu\u00a0quả"],
    ["HIỆU QUẢ", "HIỆU\u00a0QUẢ"],
    
    ["sử dụng", "sử\u00a0dụng"],
    ["Sử dụng", "Sử\u00a0dụng"],
    ["SỬ DỤNG", "SỬ\u00a0DỤNG"],
    
    ["thương mại", "thương\u00a0mại"],
    ["Thương mại", "Thương\u00a0mại"],
    ["THƯƠNG MẠI", "THƯƠNG\u00a0MẠI"],
    
    ["tài chính", "tài\u00a0chính"],
    ["Tài chính", "Tài\u00a0chính"],
    ["TÀI CHÍNH", "TÀI\u00a0CHÍNH"],
    
    ["số hóa", "số\u00a0hóa"],
    ["Số hóa", "Số\u00a0hóa"],
    ["SỐ HÓA", "SỐ\u00a0HÓA"],
    
    ["đạt chuẩn", "đạt\u00a0chuẩn"],
    ["Đạt chuẩn", "Đạt\u00a0chuẩn"],
    ["ĐẠT CHUẨN", "ĐẠT\u00a0CHUẨN"],
    
    ["hoạt động", "hoạt\u00a0động"],
    ["Hoạt động", "Hoạt\u00a0động"],
    ["HOẠT ĐỘNG", "HOẠT\u00a0ĐỘNG"],
    
    ["giải pháp", "giải\u00a0pháp"],
    ["Giải pháp", "Giải\u00a0pháp"],
    ["GIẢI PHÁP", "GIẢI\u00a0PHÁP"],
    
    ["tối ưu", "tối\u00a0ưu"],
    ["Tối ưu", "Tối\u00a0ưu"],
    ["TỐI ƯU", "TỐI\u00a0ƯU"],
    
    ["miễn phí", "miễn\u00a0phí"],
    ["Miễn phí", "Miễn\u00a0phí"],
    ["MIỄN PHÍ", "MIỄN\u00a0PHÍ"],
    
    ["tự động", "tự\u00a0động"],
    ["Tự động", "Tự\u00a0động"],
    ["TỰ ĐỘNG", "TỰ\u00a0ĐỘNG"],
    
    ["khách hàng", "khách\u00a0hàng"],
    ["Khách hàng", "Khách\u00a0hàng"],
    ["KHÁCH HÀNG", "KHÁCH\u00a0HÀNG"],
    
    ["thông tin", "thông\u00a0tin"],
    ["Thông tin", "Thông\u00a0tin"],
    ["THÔNG TIN", "THÔNG\u00a0TIN"],
    
    ["đầu tư", "đầu\u00a0tư"],
    ["Đầu tư", "Đầu\u00a0tư"],
    ["ĐẦU TƯ", "ĐẦU\u00a0TƯ"],
    
    ["hệ thống", "hệ\u00a0thống"],
    ["Hệ thống", "Hệ\u00a0thống"],
    ["HỆ THỐNG", "HỆ\u00a0THỐNG"],
    
    ["chính xác", "chính\u00a0xác"],
    ["Chính xác", "Chính\u00a0xác"],
    ["CHÍNH XÁC", "CHÍNH\u00a0XÁC"],
    
    ["thực hiện", "thực\u00a0hiện"],
    ["Thực hiện", "Thực\u00a0hiện"],
    ["THỰC HIỆN", "THỰC\u00a0HIỆN"],
    
    ["xuất khẩu", "xuất\u00a0khẩu"],
    ["Xuất khẩu", "Xuất\u00a0khẩu"],
    ["XUẤT KHẨU", "XUẤT\u00a0KHẨU"],
    
    ["phản ứng", "phản\u00a0ứng"],
    ["Phản ứng", "Phản\u00a0ứng"],
    ["PHẢN ỨNG", "PHẢN\u00a0ỨNG"],
];

const sortedDict = [...dictionary].sort((a, b) => b[0].length - a[0].length);

const componentsDir = "c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/components";
const appFile = "c:/Users/DELL/Desktop/ktnl/22526 - Copy/src/app/App.tsx";

const filesToProcess = [];

function getFilesRecursively(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFilesRecursively(fullPath);
        } else if (file.endsWith('.tsx')) {
            filesToProcess.push(fullPath);
        }
    }
}

getFilesRecursively(componentsDir);
filesToProcess.push(appFile);

for (const filePath of filesToProcess) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = content;
    let changesCount = 0;

    for (const [target, replacement] of sortedDict) {
        if (modified.includes(target)) {
            // Use split/join to replace all occurrences
            const count = modified.split(target).length - 1;
            modified = modified.split(target).join(replacement);
            changesCount += count;
        }
    }

    if (changesCount > 0) {
        console.log(`File ${path.basename(filePath)}: replaced ${changesCount} occurrences.`);
        fs.writeFileSync(filePath, modified, 'utf8');
    }
}
