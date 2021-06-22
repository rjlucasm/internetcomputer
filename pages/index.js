import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import logo from '../public/icp.png'
import styles from '../styles/Home.module.css'
import useSWR, { SWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Internet Computer Today</title>
        <meta name="description" content="Internet Computer Today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className={styles.main}>
        <h2>Internet Computer Today</h2>
        
        <Image src={logo} alt="icp" width={119} height={58} />
        
        <><SWRConfig value = {{ fetcher }}>
          <Icp />
        </SWRConfig></>
      </main>

      <Footer/>
      
    </div>
  )
}

function Icp(){
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=internet-computer&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true";

  const { data, error } = useSWR(url, { refreshInterval: 5000 });

  if (error) return <div className={styles.item}>failed to load</div>
  if (!data) return <div className={styles.item}>loading...</div>

  return (
    <div className={styles.datas}>
      <div className={styles.item}>
        <div className={styles.item}>Price</div><p>${data["internet-computer"].usd}</p>
      </div> 

      <div className={styles.item}>
        <div className={styles.item}>Market Cap</div><p>${data["internet-computer"].usd_market_cap.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
      </div> 

      <div className={styles.item}>
        <div className={styles.item}>24h Volume</div><p>${data["internet-computer"].usd_24h_vol.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
      </div> 
    </div>
  )
}
