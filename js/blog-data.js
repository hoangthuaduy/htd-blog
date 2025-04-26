// Danh sách các bài viết blog
const blogPosts = {
    "1": {
        title: "Giới thiệu cơ bản về SAP ABAP",
        date: "27/04/2025",
        content: `
            <h2>Giới thiệu</h2>
            <p>ABAP là ngôn ngữ lập trình cốt lõi trong hệ sinh thái SAP ERP...</p>
            <h2>Nội dung chính</h2>
            <p>1. ABAP và vai trò trong SAP ERP...</p>
            <p>ABAP (Advanced Business Application Programming) là ngôn ngữ lập trình cốt lõi trong hệ sinh thái SAP ERP. Được phát triển vào những năm 1980, ABAP cho phép lập trình viên tùy chỉnh và phát triển thêm các chức năng cho hệ thống SAP theo yêu cầu kinh doanh.</p>
            <p>2. Cấu trúc cơ bản của một chương trình ABAP...</p>
            <p>Với cú pháp tương tự như Pascal và các ngôn ngữ procedural khác, ABAP được thiết kế để hỗ trợ lập trình hướng đối tượng, truy vấn cơ sở dữ liệu và xây dựng các ứng dụng mạnh mẽ trong môi trường doanh nghiệp.</p>
            <h2>Kết luận</h2>
            <p>ABAP là nền tảng vững chắc cho mọi lập trình viên SAP.</p>
        `
    },
    "2": {
        title: "5 Tips để viết code ABAP sạch và hiệu quả",
        date: "28/04/2025",
        content: `
            <h2>Giới thiệu</h2>
            <p>Viết code sạch giúp chương trình dễ bảo trì...</p>
            <h2>Các mẹo</h2>
            <p>1. Đặt tên biến rõ nghĩa...</p>
            <p>2. Viết chương trình ngắn gọn...</p>
            <h2>Kết luận</h2>
            <p>Code sạch là vũ khí bí mật của lập trình viên thành công.</p>
        `
    },
    "3": {
        title: "5 Tips để viết code ABAP sạch và hiệu quả",
        date: "28/04/2025",
        content: `
            <h2>Giới thiệu</h2>
            <p>Viết code sạch giúp chương trình dễ bảo trì...</p>
            <h2>Các mẹo</h2>
            <p>1. Đặt tên biến rõ nghĩa...</p>
            <p>2. Viết chương trình ngắn gọn...</p>
            <h2>Kết luận</h2>
            <p>Code sạch là vũ khí bí mật của lập trình viên thành công.</p>
        `
    },
    "4": {
        title: "Hiểu về HTML Viewer trong SAP ABAP - Các cách triển khai hiệu quả",
        date: "28/04/2025",
        content: `
        <h2>Giới thiệu</h2>
        <p>Trong SAP ABAP, <strong>HTML Viewer</strong> là công cụ cho phép chúng ta nhúng, hiển thị các nội dung HTML trong giao diện chương trình SAP. Nó giúp làm phong phú hơn trải nghiệm người dùng (UI/UX), tạo ra giao diện trực quan hơn so với ALV truyền thống.</p>

        <h2>Các cách sử dụng HTML Viewer trong SAP</h2>

        <h3>1. Build HTML trực tiếp trong code</h3>
        <p><strong>Ưu điểm:</strong> Nhanh gọn, không cần file ngoài.</p>
        <p><strong>Nhược điểm:</strong> Khó bảo trì nếu HTML lớn.</p>
        <pre><code>DATA(lv_html) = '&lt;html&gt;&lt;body&gt;&lt;h1&gt;Hello SAP!&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;'.
cl_gui_html_viewer-&gt;load_html_document( lv_html ).</code></pre>

        <h3>2. Sử dụng SMW0 để lưu file HTML</h3>
        <p><strong>Ưu điểm:</strong> Quản lý dễ, tách biệt nội dung.</p>
        <p><strong>Nhược điểm:</strong> Phải quản lý nội bộ SAP.</p>
        <pre><code>CALL FUNCTION 'SAP_WAPI_CREATE_HTML_CONTAINER'
  EXPORTING
    html_content = 'MY_HTML_FILE.html'
  IMPORTING
    url = lv_url.
cl_gui_html_viewer-&gt;show_url( lv_url ).</code></pre>

        <h3>3. Đọc file HTML từ Application Server</h3>
        <p><strong>Ưu điểm:</strong> Nội dung cập nhật ngoài SAP dễ dàng.</p>
        <p><strong>Nhược điểm:</strong> Phụ thuộc server access.</p>
        <pre><code>OPEN DATASET '/usr/sap/HTML/intro.html' FOR INPUT IN TEXT MODE ENCODING DEFAULT.
READ DATASET '/usr/sap/HTML/intro.html' INTO lv_html_content.
CLOSE DATASET.
cl_gui_html_viewer-&gt;load_html_document( lv_html_content ).</code></pre>

        <h2>Khi nào chọn cách nào?</h2>
        <ul>
            <li><strong>Giao diện nhỏ:</strong> Viết trực tiếp trong code.</li>
            <li><strong>Giao diện vừa, ít thay đổi:</strong> Sử dụng SMW0.</li>
            <li><strong>Giao diện lớn, thường xuyên thay đổi:</strong> Đọc file từ server.</li>
        </ul>

        <h2>Kết luận</h2>
        <p>HTML Viewer là công cụ mạnh trong SAP ABAP nếu chọn đúng cách sử dụng. Nắm rõ ba phương pháp trên sẽ giúp bạn phát triển giao diện SAP trực quan, hiện đại, dễ bảo trì.</p>
    `
    }

};
