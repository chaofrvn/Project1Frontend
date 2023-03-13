import react from "react";
import "../assets/css/style4.css";
const introdution = () => {
  return (
    <div>
      <h1>Bùi Huy Thái K65 SOICT</h1>

      <h2>Giới thiệu</h2>
      <p>
        Chào các bạn, mình là <strong>Bùi Huy Thái</strong> đến từ khóa 65 của
        trường Đại học Bách Khoa Hà Nội.
      </p>
      <p>
        Đây là dự án đầu tiên của mình - một website nơi mình chia sẻ đến với
        mọi người các tài liệu mà mình có được trong quá trình học tập tại
        trường.
      </p>
      <p>
        {" "}
        Mục tiêu của mình là chia sẻ những kiến thức bổ ích cho cộng đồng học
        tập và phát triển một môi trường học tập tích cực.
      </p>

      <h2>Liên hệ</h2>
      <ul>
        <li>
          Số điện thoại: <a href="tel:0397036329">0397036329</a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:thai.bh204688@sis.hust.edu.vn">
            thai.bh204688@sis.hust.edu.vn
          </a>
        </li>
        <li>
          Facebook:{" "}
          <a href="https://www.facebook.com/huythai.bui.161/">
            https://www.facebook.com/huythai.bui.161/
          </a>
        </li>
      </ul>
    </div>
  );
};
export default introdution;
