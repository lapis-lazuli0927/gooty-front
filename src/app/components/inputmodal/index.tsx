"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import AI from "./AI";

interface InputModalProps {
  close: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function InputModal({ close }: InputModalProps) {
  const router = useRouter();
  const [isAiView, setIsAiView] = useState(false);
  const handleManualRegister = () => {
    router.push("/shops/create");
  };
  return (
    <div className={styles.modal} onClick={close}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        {isAiView ? (
          <AI
            onBack={() => setIsAiView(false)}
            onClose={() => close({} as React.MouseEvent<HTMLDivElement>)}
          />
        ) : (
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
                <p>
                  <span>AI登録</span>なら、Instagramから自動取得できます
                </p>
                <p>※店名 最寄駅 住所 電話番号</p>
                <p>
                  <span>手動入力</span>なら、手動で記録できます
                </p>
              </div>
              <div className={styles.add_btn}>
                <h3 className={styles.AI_btn} onClick={() => setIsAiView(true)}>
                  AI登録
                </h3>
                <h3 className={styles.hand_btn} onClick={handleManualRegister}>
                  手動登録
                </h3>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
