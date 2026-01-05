import { useState } from "react";
import { Shop } from "@/lib/api";
import styles from "./index.module.css";
import DeleteModal from "../deletemodal";

interface ShopDetailProps {
  shop: Shop;
}

export default function ShopDetail({ shop }: ShopDetailProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const MAX_STARS = 5;
  const currentLevel = shop.review !== null ? shop.review : 0;

  return (
    <div className={styles.show_body}>
      <div className={styles.shop_title}>
        <div className={styles.shop_name}>
          <p>{shop.name}</p>
        </div>
        <div className={styles.shop_line}></div>
        <div className={styles.shop_Instagram_icon}>
          <img
            src={
              shop.is_instagram
                ? "/icons/shop_Instagram_icon_show.svg"
                : "/icons/shop_non_Instagram_icon.svg"
            }
            alt={shop.is_instagram ? "Instagramあり" : "Instagramなし"}
          />
        </div>
      </div>
      <div className={styles.shop_info}>
        <div className={styles.train}>
          <img
            className={styles.train_icon}
            src="/icons/train_icon.svg"
            alt="駅のアイコン"
          />
          <p>{shop.station_name || "駅情報未登録"}</p>
        </div>
        <div className={styles.map}>
          <img
            className={styles.map_icon}
            src="/icons/map_icon.svg"
            alt="マップのアイコン"
          />
          <p>{shop.address || "住所情報未登録"}</p>
        </div>
        <div className={styles.phone}>
          <img
            className={styles.phone_icon}
            src="/icons/phone_icon.svg"
            alt="電話のアイコン"
          />
          <p>{shop.tel || "電話情報未登録"}</p>
        </div>
      </div>
      <div className={styles.memo}>
        <div className={styles.memo_border_left}>
          <img
            className={styles.memo_border_left_icon}
            src="/icons/memo_border_left.svg"
            alt="/"
          />
        </div>
        <p className={styles.memo_title}>memo</p>
        <div className={styles.memo_border_right}>
          <img
            className={styles.memo_border_right_icon}
            src="/icons/memo_border_right.svg"
            alt="/"
          />
        </div>
      </div>
      <div className={styles.memo_text}>
        <p>{shop.memo || "メモ情報未入力"}</p>
      </div>
      <div className={styles.review}>
        <p className={styles.review_title}>review</p>
        <div className={styles.review_star}>
          {[...Array(MAX_STARS)].map((_, index) => {
            const starNumber = index + 1;
            // 塗りつぶすかどうかの判定: starNumberが currentLevel以下なら true
            const isFilled = starNumber <= currentLevel;
            return (
              <img
                key={index}
                className={styles.review_star_icon}
                src={
                  isFilled
                    ? "/icons/review_star_show.svg" // 黄色い星 (塗りつぶし)
                    : "/icons/review_star_show_empty.svg" // 無色の星 (空)
                }
                alt={`評価星 ${starNumber} (${isFilled ? "満点" : "空"})`}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.edit_trash_btn}>
        <img
          className={styles.edit_btn_icon}
          src="/icons/show_edit_icon.svg"
          alt="編集ボタン"
        />
        <img
          className={styles.trash_btn_icon}
          src="/icons/show_trash_icon.svg"
          alt="削除ボタン"
          onClick={() => setIsDeleteModalOpen(true)}
        />
      </div>
      {isDeleteModalOpen && (
        <DeleteModal id={shop.id} close={() => setIsDeleteModalOpen(false)} />
      )}
    </div>
  );
}
