import styles from "./index.module.css";
import Image from "next/image";

interface AIProps {
  onBack: () => void;
}

export default function AI({ onBack }: AIProps) {
  return (
    <div className={styles.modal_text_btn}>
      <Image
        src="/icons/input_modal.svg"
        alt="新規登録"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
      />
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

      <h3 className={styles.hand_btn} onClick={onBack}>
        戻る
      </h3>
    </div>
  );
}
