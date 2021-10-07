import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Services() {
    return (
    <div className={styles.container}>
        <Head>
        <title>Internet Computer NFTs</title>
        </Head>
        
        <main className={styles.main}>
            <h2 className={styles.title}>Internet Computer NFTs</h2>

            <>&#127917;</>

            <Link href="/"><a style={{ color: 'inherit' }}>Home</a></Link> 

            <div className={styles.gamegrid}>
            <div className={styles.gcard}>
                <a href="https://cronic.toniqlabs.com/" target="_blank" rel="noopener noreferrer">Cronic</a> - A Play-to-earn NFT game being developed by ToniqLabs
            </div>
            <div className={styles.gcard}>
                <a href="https://entrepot.app/" target="_blank" rel="noopener noreferrer">Entrepot</a> - The most trusted NFT marketplace on the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://twitter.com/IC3DNFT" target="_blank" rel="noopener noreferrer">IC3D</a> - Cool 3D NFTs on the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://dvr6e-lqaaa-aaaai-qam5a-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">IC Drip</a> - Randomly generated meta-commerce shopping carts for outfits and personas stored on chain
            </div>
            <div className={styles.gcard}>
                <a href="https://zfjzz-4aaaa-aaaah-aasbq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">IC Gallery</a> - A creative metaverse to gather all NFT enthusiasts and enjoy arts on the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://icmojis.com/" target="_blank" rel="noopener noreferrer">ICMojis</a> - NFT collection and strategy game
            </div>
            <div className={styles.gcard}>
                <a href="https://icpunks.com/" target="_blank" rel="noopener noreferrer">ICPunks</a> - 10K randomly generated clowns
            </div>
            <div className={styles.gcard}>
                <a href="https://icpuppies.io/" target="_blank" rel="noopener noreferrer">ICPuppies</a> - The first animal NFT collection deployed on the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://twitter.com/ICTuTs" target="_blank" rel="noopener noreferrer">ICTuts</a> - 1st pharaohs NFTs in the world. 10,000 randomly generated TuTs ( king TuT )
            </div>
            <div className={styles.gcard}>
                <a href="https://www.icproject.org/" target="_blank" rel="noopener noreferrer">Infinite Charity Project</a> - A nonprofit charitable org conducting $ICP NFT fundraisers to benefit 501(c)3 charities
            </div>
            <div className={styles.gcard}>
                <a href="https://infinityfrogs.com/" target="_blank" rel="noopener noreferrer">Infinity Frogs</a> - First NFT to bridge ETH and ICP
            </div>
            <div className={styles.gcard}>
                <a href="https://interastrosc.com/" target="_blank" rel="noopener noreferrer">Internet Astronauts</a> - A collection of 10,000 unique digital NFT collectibles only found on the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://kqre2-2qaaa-aaaad-qamxa-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">NFT Studio</a> - Mint, buy and sell 3DWASM NFTs
            </div>
            <div className={styles.gcard}>
                <a href="https://dfinityapps.co/" target="_blank" rel="noopener noreferrer">NFT Village</a> - A friendly place for all of your favorite NFTs on the Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://www.origyn.ch/" target="_blank" rel="noopener noreferrer">Origyn</a> - Blending luxury goods, with NFTs by providing digital verifications for physical objects
            </div>
            <div className={styles.gcard}>
                <a href="https://www.pokedstudiobotsnft.co.uk/" target="_blank" rel="noopener noreferrer">Pokedstudio BOTS</a> - A collection of 10,000 individual ROBOTS
            </div>
            <div className={styles.gcard}>
                <a href="https://memecake.io/" target="_blank" rel="noopener noreferrer">The Cake Club</a> - A collection of 7,777 Dick NFTs unique digital collectible
            </div>
            <div className={styles.gcard}>
                <a href="https://theswordnft.com/" target="_blank" rel="noopener noreferrer">The Sword</a> - 10K Unique Ninjas NFTs
            </div> 
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}