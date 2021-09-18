import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Services() {
    return (
    <div className={styles.container}>
        <Head>
        <title>Internet Computer Services</title>
        </Head>
        
        <main className={styles.main}>
            <h2 className={styles.title}>Internet Computer Services</h2>

            <>&#128295;</>

            <Link href="/"><a style={{ color: 'inherit' }}>Home</a></Link> 

            <div className={styles.gamegrid}>
            <div className={styles.gcard}>
                <a href="https://axon.ooo/" target="_blank" rel="noopener noreferrer">Axon</a> - Multi-user, multi-neuron management canister
            </div>
            <div className={styles.gcard}>
                <a href="https://k7gat-daaaa-aaaae-qaahq-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Canlista</a> - The Internet Computer community canister registry
            </div>
            <div className={styles.gcard}>
                <a href="https://faucet.dfinity.org/auth" target="_blank" rel="noopener noreferrer">Cycles Faucet</a> - Get free cycles to power your dapp
            </div>
            <div className={styles.gcard}>
                <a href="https://dab.ooo/" target="_blank" rel="noopener noreferrer">DAB</a> - An open internet service for NFT, Token, Canister, and Dapp registries
            </div>
            <div className={styles.gcard}>
                <a href="https://dank.ooo/" target="_blank" rel="noopener noreferrer">Dank</a> - Dank is a collection of Open Internet Services on the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://k6exx-uqaaa-aaaah-qadba-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">EXT Token Tool</a> - Create your own Tokens
            </div>
            <div className={styles.gcard}>
                <a href="https://fleek.co/" target="_blank" rel="noopener noreferrer">Fleek</a> - Decentralized web-hosting to the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://xe5ii-jiaaa-aaaaf-qaaya-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">IC Picture Thing</a> - Upload and Share Images on the IC
            </div>
            <div className={styles.gcard}>
                <a href="https://dfinityapps.co/" target="_blank" rel="noopener noreferrer">IcApps</a> - A list of apps powered by Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://icp123.org/" target="_blank" rel="noopener noreferrer">ICP123</a> - Ecosystem page built on the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://icp.guide/" target="_blank" rel="noopener noreferrer">ICP Guide</a> - The definitive guide to the Internet Computer Protocol (ICP)
            </div>
            <div className={styles.gcard}>
                <a href="https://identity.ic0.app/" target="_blank" rel="noopener noreferrer">Internet Identity</a> - Sign in to dapps on the IC and sites across the web anonymously and securely
            </div>
            <div className={styles.gcard}>
                <a href="https://m7sm4-2iaaa-aaaab-qabra-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Motoko Playground</a> - Web IDE for developers to learn Motoko
            </div>
            <div className={styles.gcard}>
                <a href="https://networknervoussystem.com/" target="_blank" rel="noopener noreferrer">Neuron Calculator</a> - Calculate your voting rewards in the Network Nervous System (NNS)
            </div>
            <div className={styles.gcard}>
                <a href="https://i67uk-hiaaa-aaaae-qaaka-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Sudograph</a> - A GraphQL database for the Internet Computer
            </div>    
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}