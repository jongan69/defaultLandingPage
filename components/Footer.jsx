import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Cryptocurrensea"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
