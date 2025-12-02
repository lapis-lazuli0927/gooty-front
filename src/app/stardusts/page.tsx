'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchStardusts, Stardust } from '@/lib/api';
import styles from './page.module.css';

export default function StardustsPage() {
  const [stardusts, setStardusts] = useState<Stardust[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadStardusts = async () => {
      try {
        const response = await fetchStardusts();
        setStardusts(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load stardusts');
      } finally {
        setLoading(false);
      }
    };

    loadStardusts();
  }, []);

  const handleBackToHome = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Stardust一覧</h1>
          <p className={styles.description}>読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Stardust一覧</h1>
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
        <h1 className={styles.title}>Stardust一覧</h1>
        <p className={styles.description}>
          {stardusts.length}件のStardustが見つかりました
        </p>
        
        <div className={styles.stardustsList}>
          {stardusts.map((stardust) => (
            <div key={stardust.id} className={styles.stardustCard}>
              <div className={styles.stardustHeader}>
                <h3 className={styles.stardustId}>ID: {stardust.id}</h3>
                <span className={styles.stardustValue}>Value: {stardust.value}</span>
              </div>
              {stardust.memo && (
                <div className={styles.stardustMemo}>
                  <p className={styles.memoText}>📝 {stardust.memo}</p>
                </div>
              )}
              <div className={styles.stardustDetails}>
                <p className={styles.createdAt}>
                  作成日: {new Date(stardust.created_at).toLocaleDateString('ja-JP')}
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

