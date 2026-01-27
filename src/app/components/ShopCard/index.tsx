import Image from "next/image";
import { Shops } from "@/lib/api";
import styles from "./index.module.css";

interface ShopCardProps {
  shop: Shops;
  isSelected: boolean;
}

export default function ShopCard({ shop, isSelected }: ShopCardProps) {
  const currentLevel = shop.review !== null ? shop.review : 0;
  const MAX_STARS = 5;
  return (
    <div className={`${styles.shop_card} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.shop_content}>
        {shop.is_ai_generated ? (
          <div className={styles.shop_accent_border}></div>
        ) : (
          <div className={styles.shop_non_accent_border}></div>
        )}
        {shop.is_instagram ? (
          <div className={styles.shop_Instagram_icon}>
            <Image
              src="/icons/shop_Instagram_icon.svg"
              alt="Instagramのアイコン"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        ) : (
          <div className={styles.shop_non_Instagram_icon}>
            <Image
              src="/icons/shop_non_Instagram_icon.svg"
              alt="手動入力のアイコン"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        )}

        <div className={styles.name_train_review}>
          <p className={styles.shop_text}>{shop.name}</p>

          <div className={styles.train_review}>
            <div className={styles.shop_train}>
              <Image
                className={styles.shop_train_icon}
                src="/icons/shop_train_icon.svg"
                alt="電車アイコン"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
              <p className={styles.shop_train_text}>
                {shop.station_name ?? "駅情報未登録"}
              </p>
            </div>

            <div className={styles.review}>
              {[...Array(MAX_STARS)].map((_, index) => {
                const starNumber = index + 1;
                const isFilled = starNumber <= currentLevel;

                return (
                  <Image
                    key={index}
                    className={styles.review_icon}
                    src={
                      isFilled
                        ? "/icons/review_star.svg"
                        : "/icons/review_star_empty.svg"
                    }
                    alt={`評価星 ${starNumber} (${isFilled ? "満点" : "空"})`}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
