"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";

interface AIProps {
  onBack: () => void;
}

export default function AI({ onBack }: AIProps) {
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleRegister = () => {
    setErrorMessage("");

    if (!url.includes("instagram.com")) {
      setErrorMessage("InstagramのURLを入力してください。");
      return;
    }

    if (url.includes("ai")) {
      setErrorMessage(
        "AI自動抽出に失敗しました。別のURLを入力もしくは手動入力をしてください。"
      );
      return;
    }
  };

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
            placeholder="ここにInstagramのURLをペースト(https://www.instagram.com/...)"
            className={styles.url_input}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={
              errorMessage
                ? { border: "2px solid #D61313", backgroundColor: "#FCDADA" }
                : {}
            }
          />
          {errorMessage && (
            <div className={styles.contact_message_error}>{errorMessage}</div>
          )}
        </div>
        <div className={styles.add_btn}>
          <h3 className={styles.hand_btn} onClick={onBack}>
            戻る
          </h3>
          <h3 className={styles.AI_btn} onClick={handleRegister}>
            登録
          </h3>
        </div>
      </div>
    </>
  );
}
