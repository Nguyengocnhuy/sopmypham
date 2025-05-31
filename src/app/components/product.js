import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css"


export default function Product() {

    return (
        <div className={styles.product}>
            <Link href="/chitietsanpham">
            <div className={styles.mainProduct}>
          <div className={styles.productImg}>
          <Image src="/sp1.jpg" alt="product 1" width={180} height={180} />
          </div>
          <div className={styles.productName}>
            <h5> Strawberry Cupid Perfume </h5>
          </div>
          <div className={styles.productPrice}>
            <strong className={styles.price}>500.000đ</strong>
            <span className={styles.discount}>
              <label className={styles.oldPrice}>650.000đ</label>
              <small className={styles.percent}>-10%</small>
            </span>
          </div>
        </div>
</Link>
            <div className={styles.buyButton}>
            <Link href="/">buy now 𓍯𓂃</Link>
            </div>
            
    </div>
    )
}