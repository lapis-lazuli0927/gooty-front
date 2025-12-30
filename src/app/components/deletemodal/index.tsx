import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";
import { deleteShop } from "@/lib/api";

interface DeleteModalProps {
  id: number;
  close: () => void;
}

export default function DeleteModal({ id, close }: DeleteModalProps) {
  const router = useRouter();
  const handleCancel = () => {
    close();
  };
  const handleDelete = async () => {
    if (!id) return;
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
