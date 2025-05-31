import styles from './lienhe.module.css';

export default function LienHePage() {
  return (
    <div className={styles.container}>
      <h1>Liên Hệ Với Chúng Tôi</h1>
      <form className={styles.form}>
        <label className={styles.label}>
          Họ và Tên:
          <input type="text" name="name" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Email:
          <input type="email" name="email" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Nội dung:
          <textarea name="message" rows="5" className={styles.textarea} required></textarea>
        </label>
        <button type="submit" className={styles.button}>Gửi</button>
      </form>
    </div>
  );
}
