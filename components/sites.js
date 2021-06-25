import styles from '../styles/Home.module.css'

const Sites = () => (   
    <div className={styles.grid}>
        <div className={styles.card}>
         <h4>Websites</h4> 
         <p><a href="https://dfinity.org/">Dfinity</a></p>
         <p><a href="https://thereboot.com/">The Reboot</a></p>
         <p><a href="https://medium.com/dfinity">Medium</a></p>
       </div>

       <div className={styles.card}>
         <h4>Services</h4> 
         <p><a href="https://nns.ic0.app/">NNS</a></p>
         <p><a href="https://identity.ic0.app/">Internet Identity</a></p>
       </div>

       <div className={styles.card}>
         <h4>Explorers</h4> 
         <p><a href="https://www.dfinityexplorer.org/#/">Dfinity Explorer</a></p>
         <p><a href="https://ic.rocks/">IC Rocks</a></p>
         <p><a href="https://dashboard.internetcomputer.org/">Network Status</a></p>
       </div>
       
       <div className={styles.card}>
         <h4>Community</h4> 
         <p><a href="https://twitter.com/dfinity">Twitter</a></p>
         <p><a href="https://www.reddit.com/r/dfinity/">Reddit</a></p>
         <p><a href="https://t.me/dfinity/">Telegram</a></p>
         <p><a href="https://www.youtube.com/dfinity">Youtube</a></p>
         <p><a href="https://forum.dfinity.org/">Forum</a></p>
       </div>
     </div>
);
  
  export default Sites;