import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import { deleteShop } from "@/lib/api";

interface DeleteModalProps {
  close: () => void;
}

export default function DeleteModal({ close }: DeleteModalProps) {
  const router = useRouter();
  const handleCancel = () => {
    close;
  };
  const handleDelete = async () => {if (!id) return;
    try {
      await deleteShop(String(id));
    } finally {
      router.push("/shops");
    }
  };
  return (
    <div className={styles.modal} onClick={close}>
      <div className={styles.modal_content}>
        <img src="/icons/delete_modal.svg" />
        <div className={styles.modal_text_btn}>
          <h2>このお店の情報を削除しますか？</h2>
          <div className={styles.add_btn}>
            <h3 className={styles.cansel_btn} onClick={handleCancel}>
              キャンセル
            </h3>
            <h3 className={styles.hand_btn} onClick={handleDelete}>
              削除
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
