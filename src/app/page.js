import Image from "next/image";
import styles from "./page.module.css";
import Product from "./components/product";

export default function Home() {
  return (
   
      <main className={styles.main}>
      <div className={styles.item2}>
        <div className={styles.mainContent}>

        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>

        </div>
        </div>
        
      </main>
   
  

  );
}

