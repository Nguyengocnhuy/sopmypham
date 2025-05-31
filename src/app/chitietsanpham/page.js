import SimpleSlider from "../components/slider/slider";
import styles from "./chitietsanpham.module.css";
import Link from "next/link";
export default function ChiTietSanPham() {
    const htmlContent = `
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
    `;
    return (
        <div className={styles.chitietsanpham}>
            <div className={styles.mainContent}>
                <div className={styles.hinhanh}>
                    <SimpleSlider/>
                </div>
                <div className={styles.gioithieu}>
                </div>
                <div className={styles.muangay}>
                <Link href="/giohang">Mua ngay</Link>
            </div>
            <div className={styles.mota}>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
            </div>
        </div>
    );
}