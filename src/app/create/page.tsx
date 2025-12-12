"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function Create() {
  return (
    <div className={styles.new_shop_page_container}>
      <div className={styles.header}>
        <h1>Gooty</h1>
      </div>
      <form className={styles.form_container} action="#" method="post">
        <div className={styles.tag}>
          <div className={styles.label_group}>
            <label htmlFor="shop-name">お店の名前</label>
            <img src="../icons/required.svg" alt="必須" />
          </div>
          <input
            type="text"
            id="shop-name"
            name="shop_name"
            placeholder="例）お店の名前"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-url">店舗URL</label>
          <input
            type="url"
            id="shop-url"
            name="shop_url"
            placeholder="例）https://www.instagram.com/"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-train">最寄駅</label>
          <input
            type="text"
            id="shop-train"
            name="shop-train"
            placeholder="例）武蔵小金井駅"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-address">住所</label>
          <input
            type="text"
            id="shop-address"
            name="shop-address"
            placeholder="例）東京都小金井市本町5-18-15"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-phone">電話番号</label>
          <input
            type="tel"
            id="shop-phone"
            name="shop-phone"
            placeholder="例）090-5309-0441"
          />
        </div>

        <div className={styles.tag}>
          <label htmlFor="shop-memo">メモ</label>
          <textarea
            id="shop-memo"
            name="shop-memo"
            rows={5}
            placeholder="自由にメモを記入できます"
          ></textarea>
        </div>

        <div className={styles.shop_review}>
          <div className={styles.tag}>
            <label htmlFor="shop-review">評価</label>
            <div className={styles.stars}>
              <img src="../icons/star-icon-none.svg" alt="/" />
              <img src="../icons/star-icon-none.svg" alt="/" />
              <img src="../icons/star-icon-none.svg" alt="/" />
              <img src="../icons/star-icon-none.svg" alt="/" />
              <img src="../icons/star-icon-none.svg" alt="/" />
            </div>
          </div>
        </div>

        <div className={styles.input_btn}>
          <input type="submit" value="保存" />
        </div>
      </form>
    </div>
  );
}
