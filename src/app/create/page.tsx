"use client";

import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createShop } from "@/lib/api";
import styles from "./page.module.css";
import GlobalError from "@/app/components/GlobalError";

const MAX_STARS = 5;

// nullを空文字列に変換するヘルパー関数
const nullToEmpty = (value: string | null): string => value ?? "";

interface ShopData {
  name: string | null;
  url: string | null;
  station_name: string | null;
  address: string | null;
  tel: string | null;
  memo: string | null;
  review: number;
  is_instagram: boolean;
  is_ai_generated: boolean;
}

export default function Create() {
  const router = useRouter();
  const [shopData, setShopData] = useState<ShopData>({
    name: null,
    url: null,
    station_name: null,
    address: null,
    tel: null,
    memo: null,
    review: 0,
    is_instagram: false,
    is_ai_generated: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [nameError, setNameError] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setShopData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      if (name === "name" && value.trim()) setNameError(false);
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
    if (!shopData.name || !shopData.name.trim()) {
      setNameError(true);
      return;
    }
    setError(null);

    try {
      const response = await createShop(shopData);
      if (response.success) {
        router.push("/shops");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load shops");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.new_shop_page_container}>
      <GlobalError message={error} />
      <div className={styles.header}>
        <h1>Gooty</h1>
      </div>
      <form
        className={styles.form_container}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      >
        <div className={styles.tag}>
          <div className={styles.label_group}>
            <label htmlFor="shop-name">お店の名前</label>
            <Image
              src="/icons/required.svg"
              alt="必須"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
              className={styles.required_mobile}
            />
          </div>
          <div className={styles.input_wrapper}>
            <Image
              src="/icons/required.svg"
              alt="必須"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
              className={styles.required_pc}
            />
            <input
              type="text"
              id="shop-name"
              name="name"
              value={nullToEmpty(shopData.name)}
              onChange={handleChange}
              style={
                nameError
                  ? { border: "2px solid #D61313", backgroundColor: "#FCDADA" }
                  : {}
              }
              placeholder="例）お店の名前"
            />
            {nameError && (
              <p className={styles.contact_message_error}>
                お店の名前は必須項目です。
              </p>
            )}
          </div>
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-url">店舗URL</label>
          <input
            type="url"
            id="shop-url"
            name="url"
            value={nullToEmpty(shopData.url)}
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
            value={nullToEmpty(shopData.station_name)}
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
            value={nullToEmpty(shopData.address)}
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
            value={nullToEmpty(shopData.tel)}
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
            value={nullToEmpty(shopData.memo)}
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
                    ? "/icons/star_icon_full.svg"
                    : "/icons/star_icon_none.svg";
                return (
                  <Image
                    key={index}
                    src={icon}
                    alt={`${starValue}星`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    onClick={() => handleStarClick(starValue)}
                    style={{ width: "auto", height: "auto", cursor: "pointer" }}
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
