import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/icp.png'
import Sites from '../components/sites'
import Footer from '../components/footer'
import useSWR, { SWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Internet Computer Today</title>
        <meta name="google-site-verification" content="3fDCrJUUQIo7GSYLlE-KnTSiesID0eUY3QJo0tys0wI" />
        <meta name="description" content="Internet Computer Today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Internet Computer Today</h2>

        <Image src={logo} alt="icp" width={119} height={58} />

        <><SWRConfig value = {{ fetcher }}>
          <Icp />
        </SWRConfig></>

        <Sites/>
      </main>

      <Footer/>

    </div>
  )
}

function Icp(){
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=internet-computer&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const { data, error } = useSWR(url, { refreshInterval: 10000 });

  if (error) return <div className={styles.grid}>failed to load</div>
  if (!data) return <div className={styles.grid}>loading...</div>

  return (
     <div className={styles.grid}>
       <div className={styles.card}>
         <h4>Price</h4> 
         <p>${data[0].current_price}</p>
       </div>

       <div className={styles.card}>
         <h4>24h Low / High</h4> 
         <p>${data[0].low_24h} / ${data[0].high_24h}</p>
       </div>
 
       <div className={styles.card}>
         <h4>24h Volume</h4> 
         <p>${data[0].total_volume.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className={styles.card}>
         <h4>Market Cap</h4> 
         <p>${data[0].market_cap.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className={styles.card}>
         <h4>Fully Diluted Valuation</h4> 
         <p>${data[0].fully_diluted_valuation.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className={styles.card}>
         <h4>Circulating Supply</h4> 
         <p>{data[0].circulating_supply.toLocaleString()}</p>
       </div>
     </div>
  )
}