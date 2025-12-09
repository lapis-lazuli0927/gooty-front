"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchShops, Shops } from "@/lib/api";
import ShopCard from "@/app/components/ShopCard";
import styles from "./page.module.css";

export default function ShopsPage() {
  const [shops, setShops] = useState<Shops[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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



  return (
    <div>
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
          
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className={styles.shop_card}>
          <div className={styles.shop_accent_border}></div>
          <div className={styles.shop_content}>
            <div className={styles.shop_Instagram_icon}>
              <img
                src="/icons/shop_Instagram_icon.svg"
                alt="Instagramのアイコン"
              />
            </div>
            <div className={styles.shop_name}>
              <p className={styles.shop_text}>switch</p>
              <div className={styles.shop_train}>
                <img
                  className={styles.shop_train_icon}
                  src="/icons/shop_train_icon.svg"
                  alt="/"
                />
                <p className={styles.shop_train_text}>武蔵小金井駅</p>
              </div>
            </div>
            <div className={styles.review}>
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
              <img
                className={styles.review_icon}
                src="/icons/review_star.svg"
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.add_shop_btn}>
          <img
            className={styles.add_shop_btn_icon}
            src="/icons/add_shop_btn.svg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
