import Image from "next/image";
import styles from "./index.module.css";
import { deleteShop } from "@/lib/api";

interface DeleteModalProps {
  id: number;
  close: () => void;
}

export default function DeleteModal({ id, close }: DeleteModalProps) {
  const handleCancel = () => {
    close();
  };
  const handleDelete = async () => {
    if (!id) return;
    try {
      await deleteShop(String(id));
    } finally {
      window.location.href = "/shops";
    }
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <Image
          src="/icons/delete_modal.svg"
          alt="削除確認"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
        <div className={styles.modal_text_area}>
          <h2>このお店の情報を削除しますか？<br />この操作は取り消せません。</h2>
        </div>
        <div className={styles.btn_area}>
          <h3 className={styles.cansel_btn} onClick={handleCancel}>
            キャンセル
          </h3>
          <h3 className={styles.submit_btn} onClick={handleDelete}>
            削除
          </h3>
        </div>
      </div>
    </div>
  );
}
