import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3>Tổng đài hỗ trợ</h3>
            <p>Gọi mua: <a href="tel:1900232461">1900 232 461</a> (8:00 - 21:30)</p>
            <p>Khiếu nại: <a href="tel:18001063">1800 1063</a> (8:00 - 21:30)</p>
            <p>Bảo hành: <a href="tel:1900232465">1900 232 465</a> (8:00 - 21:00)</p>
          </div>

          <div className={styles.footerColumn}>
            <h3>Về công ty</h3>
            <a href="#">Giới thiệu công ty</a>
            <a href="#">Tuyển dụng</a>
            <a href="#">Gửi góp ý, khiếu nại</a>
            <a href="#">Tìm siêu thị (2961 shop)</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>Thông tin khác</h3>
            <a href="#">Tích điểm Quà tặng VIP</a>
            <a href="#">Lịch sử mua hàng</a>
            <a href="#">Đăng ký bán hàng CTV</a>
            <a href="#">Tìm hiểu về mua trả chậm</a>
            <a href="#">Xem thêm</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>Website cùng tập đoàn</h3>
            <div className={styles.socialIcons}>
              
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          &copy; 2025. Công ty cổ phần Thế Giới Di Động. Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh.
          Email: cskh@thegioididong.com
        </div>
      </footer>
    )
};