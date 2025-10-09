'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { fetchDemoShop, DemoShop } from '@/lib/api';
import styles from './page.module.css';

export default function DemoShopDetailPage() {
  const [shop, setShop] = useState<DemoShop | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const id = params?.id ? Number(params.id) : null;

  useEffect(() => {
    if (!id) {
      setError('Invalid shop ID');
      setLoading(false);
      return;
    }

    const loadShop = async () => {
      try {
        const response = await fetchDemoShop(id);
        setShop(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load shop');
      } finally {
        setLoading(false);
      }
    };

    loadShop();
  }, [id]);

  const handleBackToList = () => {
    router.push('/demo_shops');
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>店舗詳細</h1>
          <p className={styles.description}>読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error || !shop) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>店舗詳細</h1>
          <div className={styles.errorContainer}>
            <p className={styles.errorText}>エラー: {error || 'Shop not found'}</p>
          </div>
          <div className={styles.buttonGroup}>
            <button onClick={handleBackToList} className={styles.button}>
              一覧に戻る
            </button>
            <button onClick={handleBackToHome} className={styles.button}>
              ホームに戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>店舗詳細</h1>
        
        <div className={styles.shopDetail}>
          <div className={styles.shopHeader}>
            <h2 className={styles.shopName}>{shop.name}</h2>
            <span className={styles.shopType}>Type {shop.type}</span>
          </div>
          
          <div className={styles.shopInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>最寄り駅:</span>
              <span className={styles.infoValue}>📍 {shop.station}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>レビューレベル:</span>
              <span className={styles.infoValue}>⭐ {shop.review_level.toFixed(1)}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>作成日時:</span>
              <span className={styles.infoValue}>
                {new Date(shop.created_at).toLocaleString('ja-JP')}
              </span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>更新日時:</span>
              <span className={styles.infoValue}>
                {new Date(shop.updated_at).toLocaleString('ja-JP')}
              </span>
            </div>
          </div>
        </div>
        
        <div className={styles.buttonGroup}>
          <button onClick={handleBackToList} className={styles.button}>
            一覧に戻る
          </button>
          <button onClick={handleBackToHome} className={styles.button}>
            ホームに戻る
          </button>
        </div>
      </div>
    </div>
  );
}
