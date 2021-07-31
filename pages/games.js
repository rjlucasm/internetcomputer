import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/icp.png'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Games() {
    return (
    <div className={styles.container}>
        <Head>
        <title>Internet Computer Games</title>
        </Head>
        
        <main className={styles.main}>
            <h2 className={styles.title}>Internet Computer Games</h2>
            <div><Link href="/"><a><Image src={logo} alt="icp" width={119} height={58} /></a></Link></div>

            {/* <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div> */}


            <div className={styles.gamegrid}>
            <div className={styles.gcard}>
                <a href="https://qwsdo-xaaaa-aaaah-aaa3a-cai.ic0.app/" target="_blank" rel="noopener noreferrer">2048</a> - Sliding addition game
            </div>
            <div className={styles.gcard}>
                <a href="https://hwma2-hyaaa-aaaah-aaixa-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Block Paper Scissors!</a> - A blockchain powered roshambo experience
            </div>
            <div className={styles.gcard}>
                <a href="https://fcsfo-cyaaa-aaaah-aaiza-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Clandestine</a> - Gaming hub
            </div>
            <div className={styles.gcard}>
                <a href="https://cycles.bet/" target="_blank" rel="noopener noreferrer">Cycles Bet</a> - Bet cycles play dices
            </div>
            <div className={styles.gcard}>
                <a href="https://bjv3y-niaaa-aaaah-aadsq-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Fly Aves</a> - Flappy Bird style game
            </div>
            <div className={styles.gcard}>
                <a href="https://zxkrk-xyaaa-aaaad-qad5q-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Fudbuster</a> - Platform game created using Unity’s game engine
            </div>
            <div className={styles.gcard}>
                <a href="https://makqn-piaaa-aaaah-qadvq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Mareo</a> - Clone of the classic Mario platformer
            </div>
            <div className={styles.gcard}>
                <a href="https://cieun-eiaaa-aaaad-qak6a-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Motoko Runner</a> - Endless runner game
            </div>
            <div className={styles.gcard}>
                <a href="https://bgvbu-biaaa-aaaae-aaava-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Netwalk</a> - Addictive puzzle game
            </div>
            <div className={styles.gcard}>
                <a href="https://y5ftq-viaaa-aaaad-qad2q-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Pacman</a> - HTML5 Pacman
            </div>
            <div className={styles.gcard}>
                <a href="https://ouuvz-kiaaa-aaaah-qad3q-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Plants vs. Zombies</a> - Classic strategy game ported to IC
            </div>
            <div className={styles.gcard}>
                <a href="https://riseofthemagni.com/" target="_blank" rel="noopener noreferrer">Rise of the Magni</a> - Tactical unit deployment game
            </div>
            <div className={styles.gcard}>
                <a href="https://ivg37-qiaaa-aaaab-aaaga-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Reversi</a> - Multiplayer game on Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://5nl7c-zqaaa-aaaah-qaa7a-cai.raw.ic0.app/draw-selection" target="_blank" rel="noopener noreferrer">Saga Tarot</a> - Saga Tarot gives you a tarot reading in one click
            </div>
            <div className={styles.gcard}>
                <a href="https://l2jyf-nqaaa-aaaah-qadha-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Saga Tarot - Hackathon Edition</a> - Claim a digital tarot deck
            </div>
            <div className={styles.gcard}>
                <a href="https://omro3-5yaaa-aaaad-qalta-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Sodoku</a> - A Sudoku web app
            </div>
            <div className={styles.gcard}>
                <a href="https://dqnbo-kiaaa-aaaad-qak2a-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Super ICP Party</a> - Multiplayer game made with Unity
            </div>
            <div className={styles.gcard}>
                <a href="https://ez7ch-viaaa-aaaad-qab2q-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">T-Rex Runner</a> - The T-Rex runner game extracted from chrome offline page
            </div>
            <div className={styles.gcard}>
                <a href="https://o2wyr-ryaaa-aaaah-qad2q-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Tetris</a> - Play the classic Tetris game on Internet Computer
            </div>
            <div className={styles.gcard}>
                <a href="https://lc7ip-3iaaa-aaaah-aafva-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Welcome into the Metaverse!</a> - Explore the Internet Computer and its community
            </div>
            
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}