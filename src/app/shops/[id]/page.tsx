"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchShop } from "@/lib/api";
import styles from "./page.module.css";
import GlobalError from "@/app/components/GlobalError";
import ShopDetail from "@/app/components/ShopDetail";

export default function ShopsPage() {
  const [shop, setShop] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const id = params?.id ? Number(params.id) : null;

  useEffect(() => {
    const loadShop = async () => {
      try {
        const response = await fetchShop(String(id));
        setShop(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load shop");
      } finally {
        setLoading(false);
      }
    };
    loadShop();
  }, [id]);

  if (loading) {
    return;
  }
  if (!shop || error) {
    return <GlobalError message={error} />;
  }

  return (
    <div className={styles.show_body}>
      <div className={styles.header_container}>
        <div className={styles.header}>
          <h1 className={styles.header_logo}>Gooty</h1>
        </div>
      </div>
      <ShopDetail shop={shop} />
    </div>
  );
}
