"use client";

import { useState } from "react";
import Image from "next/image";
import { Shop } from "@/lib/api";
import styles from "./index.module.css";
import DeleteModal from "../deletemodal";
import { useRouter } from "next/navigation";

interface ShopDetailProps {
  shop: Shop;
}

export default function ShopDetail({ shop }: ShopDetailProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const MAX_STARS = 5;
  const currentLevel = shop.review !== null ? shop.review : 0;
  const router = useRouter();
  const handleEditClick = () => {
    router.push(`/shops/${shop.id}/edit`);
  };
  const truncateText = (text: string, maxWeight: number) => {
  if (!text) return "";

  let currentWeight = 0;
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // 半角（ASCII文字など）なら1、それ以外（全角）なら2を加算
    // ※正規表現で半角文字を判定
    const isHalfWidth = char.match(/[ -~]/); 
    currentWeight += isHalfWidth ? 1 : 2;

    if (currentWeight <= maxWeight) {
      result += char;
    } else {
      return result + "...";
    }
  }

  return result;
};

  return (
    <div className={styles.show_body}>
      <div className={styles.shop_title}>
        <div className={styles.shop_name}>
          <p>{truncateText(shop.name, 18)}</p>
        </div>
        <div className={styles.shop_line}></div>
        <div className={styles.shop_Instagram_icon}>
          {shop.url ? (
            <a
              href={shop.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram_link}
            >
              <Image
                src={
                  shop.is_instagram
                    ? "/icons/shop_Instagram_icon_show.svg"
                    : "/icons/shop_non_Instagram_icon.svg"
                }
                alt={shop.is_instagram ? "Instagramあり" : "Instagramなし"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
            </a>
          ) : (
            <Image
              src="/icons/shop_non_Instagram_icon.svg"
              alt="Instagramなし"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </div>
      </div>
      <div className={styles.shop_info}>
        <div className={styles.train}>
          <Image
            className={styles.train_icon}
            src="/icons/train_icon.svg"
            alt="駅のアイコン"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
          <p>{shop.station_name || "駅情報未登録"}</p>
        </div>
        <div className={styles.map}>
          <Image
            className={styles.map_icon}
            src="/icons/map_icon.svg"
            alt="マップのアイコン"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
          <p>{shop.address || "住所未登録"}</p>
        </div>
        <div className={styles.phone}>
          <Image
            className={styles.phone_icon}
            src="/icons/phone_icon.svg"
            alt="電話のアイコン"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
          <p>{shop.tel || "電話番号未登録"}</p>
        </div>
      </div>
      <div className={styles.memo}>
        <div className={styles.memo_border_left}>
          <Image
            className={styles.memo_border_left_icon}
            src="/icons/memo_border_left.svg"
            alt="メモ左装飾"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <p className={styles.memo_title}>memo</p>
        <div className={styles.memo_border_right}>
          <Image
            className={styles.memo_border_right_icon}
            src="/icons/memo_border_right.svg"
            alt="メモ右装飾"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className={styles.memo_text}>
        <p>{shop.memo || "メモ未入力"}</p>
      </div>
      <div className={styles.review}>
        <p className={styles.review_title}>review</p>
        <div className={styles.review_star}>
          {[...Array(MAX_STARS)].map((_, index) => {
            const starNumber = index + 1;
            const isFilled = starNumber <= currentLevel;
            return (
              <Image
                key={index}
                className={styles.review_star_icon}
                src={
                  isFilled
                    ? "/icons/review_star_show.svg"
                    : "/icons/review_star_show_empty.svg"
                }
                alt={`評価星 ${starNumber} (${isFilled ? "満点" : "空"})`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.edit_trash_btn}>
        <Image
          className={styles.edit_btn_icon}
          src="/icons/show_edit_icon.svg"
          alt="編集ボタン"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
          onClick={handleEditClick}
        />
        <Image
          className={styles.trash_btn_icon}
          src="/icons/show_trash_icon.svg"
          alt="削除ボタン"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
          onClick={() => setIsDeleteModalOpen(true)}
        />
      </div>
      {isDeleteModalOpen && (
        <DeleteModal id={shop.id} close={() => setIsDeleteModalOpen(false)} />
      )}
    </div>
  );
}
