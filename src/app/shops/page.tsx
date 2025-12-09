"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchShops, Shops } from "@/lib/api";
import ShopCard from "@/app/components/ShopCard";
import InputModal from "@/app/components/inputmodal";
import styles from "./page.module.css";

export default function ShopsPage() {
  const [shops, setShops] = useState<Shops[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadShops = async () => {
      try {
        const response = await fetchShops();
        setShops(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load shops");
      } finally {
        setLoading(false);
      }
    };

    loadShops();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={styles.shop_index_page_container}>
      {isModalOpen && <InputModal close={closeModal} />}
      <div className={styles.header_container}>
        <div className={styles.header}>
          <h1 className={styles.header_logo}>Gooty</h1>
        </div>
        <div className={styles.sort}>
          <p className={styles.sort_text}>登録</p>
          <img
            className={styles.sort_image}
            src="/icons/sort_solid_full.svg"
            alt="/"
          />
        </div>
      </div>
      <div className={styles.shop_card_container}>
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.add_shop_btn}>
          <img
            className={styles.add_shop_btn_icon}
            src="/icons/add_shop_btn.svg"
            alt="/"
            onClick={openModal}
          />
        </div>
      </div>
    </div>
  );
}
