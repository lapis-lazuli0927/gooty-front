import Link from 'next/link';
import { fetchDemoShops } from '@/lib/api';
import styles from './page.module.css';

export default async function DemoShopsPage() {
  const response = await fetchDemoShops();
  const shops = response.data;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>店舗一覧</h1>
        <p className={styles.description}>
          {shops.length}件の店舗が見つかりました
        </p>
        
        <div className={styles.shopsList}>
          {shops.map((shop) => (
            <Link
              key={shop.id}
              href={`/demo_shops/${shop.id}`}
              className={styles.shopCard}
            >
              <div className={styles.shopHeader}>
                <h3 className={styles.shopName}>{shop.name}</h3>
                <span className={styles.shopType}>Type {shop.type}</span>
              </div>
              <div className={styles.shopDetails}>
                <p className={styles.station}>📍 {shop.station}</p>
                <p className={styles.review}>
                  ⭐ {shop.review_level.toFixed(1)}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <Link href="/" className={styles.button}>
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
