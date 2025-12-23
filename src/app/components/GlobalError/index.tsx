import React from "react";
import styles from "./index.module.css";

interface GlobalErrorProps {
  message: string | null;
}

const GlobalError = ({ message }: GlobalErrorProps) => {
  if (!message) return null;

  return <div className={styles.global_error_container}>{message}</div>;
};

export default GlobalError;
