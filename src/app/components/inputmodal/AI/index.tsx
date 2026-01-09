"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";

interface AIProps {
  onBack: () => void;
}

export default function AI({ onBack }: AIProps) {
  const [nameError] = useState(false);
  return (
    <>
      <Image
        src="/icons/input_modal.svg"
        alt="新規登録"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
      />
      <div className={styles.modal_text_btn}>
        <h2>お店の新規登録</h2>
        <div className={styles.modal_text}>
          <p>InstagramのURLを入力してください</p>
          <input
            type="text"
            placeholder="https://www.instagram.com/..."
            className={styles.url_input}
            style={
              nameError
                ? { border: "2px solid #D61313", backgroundColor: "#FCDADA" }
                : {}
            }
          />
           {nameError && (
            <p className={styles.contact_message_error}>
              InstagramのURLを入力してください
            </p>
          )}
        </div>
        <div className={styles.add_btn}>
          <h3 className={styles.hand_btn} onClick={onBack}>
            戻る
          </h3>
          <h3 className={styles.AI_btn}>登録</h3>
        </div>
      </div>
    </>
  );
}
