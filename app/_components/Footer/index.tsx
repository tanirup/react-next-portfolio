import Link from 'next/link';
import styles from "./index.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                     <Link href="/news">スキル・目標</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/menbers">制作作品</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©️my introduction 2024</p>
        </footer>
    );
}