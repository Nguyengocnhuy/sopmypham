import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header () {
  return (
      <><header className={styles.header}>
          <h1>htran  𐙚</h1>
          <div className={styles.logo}>
              <Image src="./next.svg" width={150} height={25} alt="logo"></Image>
          </div>
      </header>
      <nav className={styles.navbarContainer}>
              <div className={styles.navbar}>
                  <li>
                    <Link href="/">Home</Link>
                     </li>
                  <li href="#">Sản Phẩm</li>
                  <a href="#">Lựa chọn</a>
                  <a href="#">Địa Chỉ</a>
              </div>
          </nav></>
  )
};