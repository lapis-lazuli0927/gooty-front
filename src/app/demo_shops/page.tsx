'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchDemoShops, DemoShop } from '@/lib/api';
import styles from './page.module.css';

export default function DemoShopsPage() {
  const [shops, setShops] = useState<DemoShop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadShops = async () => {
      try {
        const response = await fetchDemoShops();
        setShops(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load shops');
      } finally {
        setLoading(false);
      }
    };

    loadShops();
  }, []);

  const handleShopClick = (id: number) => {
    router.push(`/demo_shops/${id}`);
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>店舗一覧</h1>
          <p className={styles.description}>読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>店舗一覧</h1>
          <div className={styles.errorContainer}>
            <p className={styles.errorText}>エラー: {error}</p>
          </div>
          <button onClick={handleBackToHome} className={styles.button}>
            ホームに戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>店舗一覧</h1>
        <p className={styles.description}>
          {shops.length}件の店舗が見つかりました
        </p>
        
        <div className={styles.shopsList}>
          {shops.map((shop) => (
            <div
              key={shop.id}
              className={styles.shopCard}
              onClick={() => handleShopClick(shop.id)}
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
            </div>
          ))}
        </div>
        
        <button onClick={handleBackToHome} className={styles.button}>
          ホームに戻る
        </button>
      </div>
    </div>
  );
}
