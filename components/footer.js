import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => (
    <footer className={styles.footer}>
        Powered by
          <span>
            <a href="https://dfinity.org/" target="_blank" rel="noopener noreferrer">
              <Image src="/dfinity.svg" alt="Dfinity Logo" width={33} height={16} />
            </a>
          </span> 

          <span>
            <a href="https://fleek.co/" target="_blank" rel="noopener noreferrer">
                <Image src="/fleek.svg" alt="Fleek Logo" width={23} height={32} />
            </a>
          </span> 

          <span>
            <a href="https://www.coingecko.com/en/api" target="_blank" rel="noopener noreferrer">
                <Image src="/coingecko.svg" alt="Coingecko Logo" width={32} height={32} />
            </a>
          </span> 

    </footer>
);
  
export default Footer;