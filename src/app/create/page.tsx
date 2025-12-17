"use client";

import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const MAX_STARS = 5;

interface ShopData {
  name: string;
  url: string;
  station_name: string;
  address: string;
  tel: string;
  memo: string;
  review: number;
  is_instagram: boolean;
  is_ai_generated: boolean;
}

export default function Create() {
  const router = useRouter();
  const [shopData, setShopData] = useState<ShopData>({
    name: "",
    url: "",
    station_name: "",
    address: "",
    tel: "",
    memo: "",
    review: 0,
    is_instagram: false,
    is_ai_generated: false,
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setShopData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const handleStarClick = (reviewValue: number) => {
    setShopData((prevData) => ({
      ...prevData,
      review: prevData.review === reviewValue ? 0 : reviewValue,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const apiEndpoint = "http://localhost:3002/shops";

    const dataToSend: ShopData = shopData;
    console.log("送信データ:", dataToSend);
  };

  const shopNameError = useState(false);

  return (
    <div className={styles.new_shop_page_container}>
      <div className={styles.header}>
        <h1>Gooty</h1>
      </div>

      <form
        className={styles.form_container}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className={styles.tag}>
          <div className={styles.label_group}>
            <label htmlFor="shop-name">お店の名前</label>
            <img src="../icons/required.svg" alt="必須" />
          </div>
          <input
            type="text"
            id="shop-name"
            name="name"
            value={shopData.name}
            onChange={handleChange}
            placeholder="例）お店の名前"
          />
          {shopNameError && (
            <p className={styles.contact_message_error}>
              お店の名前は必須項目です。
            </p>
          )}
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-url">店舗URL</label>
          <input
            type="url"
            id="shop-url"
            name="url"
            value={shopData.url}
            onChange={handleChange}
            placeholder="例）https://www.instagram.com/"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-train">最寄駅</label>
          <input
            type="text"
            id="shop-train"
            name="station_name"
            value={shopData.station_name}
            onChange={handleChange}
            placeholder="例）武蔵小金井駅"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-address">住所</label>
          <input
            type="text"
            id="shop-address"
            name="address"
            value={shopData.address}
            onChange={handleChange}
            placeholder="例）東京都小金井市本町5-18-15"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-phone">電話番号</label>
          <input
            type="tel"
            id="shop-phone"
            name="tel"
            value={shopData.tel}
            onChange={handleChange}
            placeholder="例）090-5309-0441"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-memo">メモ</label>
          <textarea
            id="shop-memo"
            name="memo"
            rows={5}
            value={shopData.memo}
            onChange={handleChange}
            placeholder="自由にメモを記入できます"
          />
        </div>

        <div className={styles.shop_review}>
          <div className={styles.tag}>
            <label htmlFor="shop-review">評価</label>
            <div className={styles.stars}>
              {[...Array(MAX_STARS)].map((_, index) => {
                const starValue = index + 1;
                const icon =
                  starValue <= shopData.review
                    ? "../icons/star_icon_full.svg" // 評価済み
                    : "../icons/star_icon_none.svg"; // 未評価
                return (
                  <img
                    key={index}
                    src={icon}
                    alt={`${starValue}星`}
                    onClick={() => handleStarClick(starValue)}
                    style={{ cursor: "pointer" }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.input_btn}>
          <input className={styles.submit_button} type="submit" value="保存" />
        </div>
      </form>
    </div>
  );
}
