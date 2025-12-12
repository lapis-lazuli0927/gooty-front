import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";

interface InputModalProps {
  close: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function InputModal({ close }: InputModalProps) {
  const router = useRouter();
  const handleManualRegister = () => {
    // 新規登録ページへ遷移する
    router.push("/create");
  };
  return (
    <div className={styles.modal} onClick={close}>
      <div className={styles.modal_content}>
        <img src="/icons/input-modal.svg" />
        <div className={styles.modal_text_btn}>
          <h2>お店の新規登録</h2>
          <div className={styles.modal_text}>
            <p>
              <span>AI登録</span>
              なら、InstagramのURLから詳細情報を自動取得できます
            </p>
            <p>※店名 最寄駅 住所 電話番号</p>
            <p>
              <span>手動入力</span>なら、お店の情報を手動で記録できます
            </p>
          </div>
          <div className={styles.add_btn}>
            <h3
              className={styles.AI_btn}
              onClick={() => {
                alert("AI登録");
              }}
            >
              AI登録
            </h3>
            <h3 className={styles.hand_btn} onClick={handleManualRegister}>
              手動登録
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
