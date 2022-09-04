import styles from '../styles/Header.module.css'
import * as React from "react";
import Link from 'next/link'

export default function Header() {
  return (
    <ul className={styles.container}>
    <h3>App Name / Logo</h3>
    <li className={styles.items}>
      <Link href="/Home">
        <a>Home</a>
      </Link>
    </li>
    <li  className={styles.items}>
      <Link href="/Profile">
        <a>Profile</a>
      </Link>
    </li>
    <li  className={styles.items}>
      <Link href="/Settings">
        <a>Settings</a>
      </Link>
    </li>
  </ul>
  );
}