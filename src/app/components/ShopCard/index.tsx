import { Shops } from "@/lib/api";
import styles from "./index.module.css";

interface ShopCardProps {
  shop: Shops;
}

export default function ShopCard({ shop }: ShopCardProps) {
  const currentLevel = shop.review !== null ? shop.review : 0;
  const MAX_STARS = 5;
  return (
    <div>
      <div className={styles.shop_card}>
        <div className={styles.shop_content}>
          {shop.is_ai_generated ? (
            <div className={styles.shop_accent_border}></div>
          ) : (
            <div className={styles.shop_non_accent_border}></div>
          )}
          {shop.is_instagram ? (
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
          ) : (
            <div className={styles.shop_non_Instagram_icon}>
              <img
                src="/icons/shop_non_Instagram_icon.svg"
                alt="手動入力のアイコン"
              />
            </div>
          )}
          <div className={styles.shop_name}>
            <p className={styles.shop_text}>{shop.name}</p>
            <div className={styles.shop_train}>
              <img
                className={styles.shop_train_icon}
                src="/icons/shop_train_icon.svg"
                alt="/"
              />
              <p className={styles.shop_train_text}>
                {shop.station_name ?? "駅情報未登録"}
              </p>
            </div>
          </div>
          <div className={styles.review}>
            {[...Array(MAX_STARS)].map((_, index) => {
              // 星の番号 (1, 2, 3, 4, 5)
              const starNumber = index + 1;

              // 塗りつぶすかどうかの判定: starNumberが currentLevel以下なら true
              const isFilled = starNumber <= currentLevel;

              return (
                <img
                  key={index}
                  className={styles.review_icon}
                  src={
                    isFilled
                      ? "/icons/review_star.svg" // 黄色い星 (塗りつぶし)
                      : "/icons/review_star_empty.svg" // 無色の星 (空)
                  }
                  alt={`評価星 ${starNumber} (${isFilled ? "満点" : "空"})`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
