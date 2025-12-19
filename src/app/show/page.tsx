"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchShops, Shops } from "@/lib/api";
import styles from "./page.module.css";

export default function ShopsPage() {
  return (
    <div className={styles.show_body}>
      <div className={styles.header_container}>
        <div className={styles.header}>
          <h1 className={styles.header_logo}>Gooty</h1>
        </div>
      </div>
      <div className={styles.shop_title}>
        <div className={styles.shop_name}>
          <p>switch</p>
        </div>
        <div className={styles.shop_line}></div>
        <div className={styles.shop_Instagram_icon}>
          <img
            src="/icons/shop_Instagram_icon_show.svg"
            alt="Instagramのアイコン"
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
          <p>武蔵小金井駅</p>
        </div>
        <div className={styles.map}>
          <img
            className={styles.map_icon}
            src="/icons/map_icon.svg"
            alt="マップのアイコン"
          />
          <p>東京都小金井市本町5-18-15</p>
        </div>
        <div className={styles.phone}>
          <img
            className={styles.phone_icon}
            src="/icons/phone_icon.svg"
            alt="電話のアイコン"
          />
          <p>042-201-1478</p>
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
        <p>
          ワインに精通したソムリエがいて、好みに合わせてワインを選んでくれます。日替わりで20種類のグラスワインが用意されており、気軽に色々な種類を楽しめます。
        </p>
      </div>
      <div className={styles.review}>
        <p className={styles.review_title}>review</p>
        <div className={styles.review_star}>
          <img
            className={styles.review_star_icon}
            src="/icons/review_star_show.svg"
            alt="/"
          />
          <img
            className={styles.review_star_icon}
            src="/icons/review_star_show.svg"
            alt="/"
          />
          <img
            className={styles.review_star_icon}
            src="/icons/review_star_show.svg"
            alt="/"
          />
          <img
            className={styles.review_star_icon}
            src="/icons/review_star_show.svg"
            alt="/"
          />
          <img
            className={styles.review_star_icon}
            src="/icons/review_star_show.svg"
            alt="/"
          />
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
        />
      </div>
    </div>
  );
}
