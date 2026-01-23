"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/shops");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header_logo} onClick={handleClick}>
        Gooty
      </h1>
    </header>
  );
}
