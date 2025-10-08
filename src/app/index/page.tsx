'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function IndexPage() {
  const [message, setMessage] = useState<string>('');

  const handleButtonClick = () => {
    setMessage('Hello from /index page!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Index Page
        </h1>
        
        <div className="space-y-6">
          <p className={styles.description}>
            Welcome to the Index page at <code className={styles.code}>/index</code>
          </p>
          
          <button
            onClick={handleButtonClick}
            className={styles.button}
          >
            Click Me!
          </button>
          
          {message && (
            <div className={styles.messageContainer}>
              <p className={styles.messageText}>{message}</p>
            </div>
          )}
        </div>
        
        <div className={styles.footer}>
          <p>Next.js App Router</p>
          <p>Route: <code className={styles.footerCode}>/index</code></p>
        </div>
      </div>
    </div>
  );
}
