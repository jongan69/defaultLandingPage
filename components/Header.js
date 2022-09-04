import styles from '../styles/Header.module.css'
import * as React from "react";
import Link from 'next/link'

export default function Header() {
  return (
    <ul >
    <li>
      <Link href="/Home">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/Profile">
        <a>Profile</a>
      </Link>
    </li>
    <li>
      <Link href="/Settings">
        <a>Settings</a>
      </Link>
    </li>
  </ul>
  );
}