import Image from 'next/image';
import styles from './index.module.css';

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>Skills・gaols</h1>
        <p className={styles.sub}>スキル・目標</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/images/colorful.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}