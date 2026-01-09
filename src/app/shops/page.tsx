"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchShops, Shops, fetchShop, Shop } from "@/lib/api";
import ShopCard from "@/app/components/ShopCard";
import ShopDetail from "@/app/components/ShopDetail";
import InputModal from "@/app/components/inputmodal";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";

export default function ShopsPage() {
  const searchParams = useSearchParams();
  const selectedParam = searchParams.get("selected");
  const [shops, setShops] = useState<Shops[]>([]);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [selectedShopId, setSelectedShopId] = useState<number | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isMobile && selectedParam) {
      setSelectedShopId(Number(selectedParam));
    }
  }, [selectedParam, isMobile]);

  useEffect(() => {
    // 画面サイズの判定
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const loadShops = async () => {
      try {
        const response = await fetchShops();
        setShops(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load shops");
      }
    };

    loadShops();
  }, []);

  useEffect(() => {
    const loadSelectedShop = async () => {
      if (selectedShopId) {
        setDetailLoading(true);
        try {
          const response = await fetchShop(String(selectedShopId));
          setSelectedShop(response.data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to load shop");
        } finally {
          setDetailLoading(false);
        }
      } else {
        setSelectedShop(null);
      }
    };

    loadSelectedShop();
  }, [selectedShopId]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleCardClick = (id: number) => {
    if (isMobile) {
      // スマホの場合は別ページに遷移
      router.push(`/shops/${id}`);
    } else {
      // PCの場合はstateで詳細を表示（URLは変更しない）
      setSelectedShopId(id);
    }
  };

  return (
    <div className={styles.shop_index_page_container}>
      {error && <div className={styles.error_message}>{error}</div>}
      {isModalOpen && <InputModal close={closeModal} />}
      <div className={styles.header_container}>
        <div className={styles.header}>
          <h1 className={styles.header_logo}>Gooty</h1>
        </div>
        <div className={styles.sort}>
          <p className={styles.sort_text}>登録</p>
          <Image
            className={styles.sort_image}
            src="/icons/sort_solid_full.svg"
            alt="ソートアイコン"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.shop_card_container}>
          {shops.map((shop) => (
            <div key={shop.id} onClick={() => handleCardClick(shop.id)}>
              <ShopCard shop={shop} />
            </div>
          ))}
        </div>
        <div className={styles.shop_detail_container}>
          {detailLoading ? (
            <div className={styles.loading}>読み込み中...</div>
          ) : selectedShop ? (
            <ShopDetail shop={selectedShop} />
          ) : (
            <div className={styles.empty_detail}>
              ショップを選択してください
            </div>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.add_shop_btn}>
          <Image
            className={styles.add_shop_btn_icon}
            src="/icons/add_shop_btn.svg"
            alt="店舗追加ボタン"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            onClick={openModal}
          />
        </div>
      </div>
    </div>
  );
}
