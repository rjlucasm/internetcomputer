import styles from '../styles/Home.module.css'

const Sites = () => (
    <div className={styles.grid}>
        <div className={styles.card}>
         <h4>Websites</h4> 
         <p><a href="https://dfinity.org/" target="_blank" rel="noopener noreferrer">Dfinity</a></p>
         <p><a href="https://thereboot.com/" target="_blank" rel="noopener noreferrer">The Reboot</a></p>
         <p><a href="https://medium.com/dfinity" target="_blank" rel="noopener noreferrer">Medium</a></p>
       </div>

       <div className={styles.card}>
         <h4>Services</h4> 
         <p><a href="https://nns.ic0.app/" target="_blank" rel="noopener noreferrer">NNS</a></p>
         <p><a href="https://identity.ic0.app/" target="_blank" rel="noopener noreferrer">Internet Identity</a></p>
       </div>

       <div className={styles.card}>
         <h4>Explorers</h4> 
         <p><a href="https://www.dfinityexplorer.org/#/" target="_blank" rel="noopener noreferrer">Dfinity Explorer</a></p>
         <p><a href="https://ic.rocks/" target="_blank" rel="noopener noreferrer">IC Rocks</a></p>
         <p><a href="https://dashboard.internetcomputer.org/" target="_blank" rel="noopener noreferrer">Network Status</a></p>
       </div>
       
       <div className={styles.card}>
         <h4>Community</h4> 
         <p><a href="https://twitter.com/dfinity" target="_blank" rel="noopener noreferrer">Twitter</a></p>
         <p><a href="https://www.reddit.com/r/dfinity/" target="_blank" rel="noopener noreferrer">Reddit</a></p>
         <p><a href="https://t.me/dfinity/" target="_blank" rel="noopener noreferrer">Telegram</a></p>
         <p><a href="https://www.youtube.com/dfinity" target="_blank" rel="noopener noreferrer">Youtube</a></p>
         <p><a href="https://forum.dfinity.org/" target="_blank" rel="noopener noreferrer">Forum</a></p>
       </div>
      
       <div className={styles.card}>
         <h4>Source Code</h4> 
         <p><a href="https://github.com/dfinity" target="_blank" rel="noopener noreferrer">Github</a></p>
       </div>
     </div>
);
  
export default Sites;