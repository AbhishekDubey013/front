
import styles from "./interview.module.css";
import Buy from "../components/Buy";
const currentTimeStamp = Date.now();
const Interview = () => {
  return (
    <div className={styles.interview}>
      <video className={styles.videoBackground} src='/videos/bk.mp4' autoPlay loop muted />
      <section className={styles.bodyMain}>
        <form>
        <div className={styles.section}>
          <div className={styles.divscreencontentwrapperSc}>
            <div className={styles.divscreencontentScSc1ndo}>
                  <div className={styles.gridContainer}>
                      <Buy/>
                  </div>
              <div className={styles.obFormslabel}>
              </div>
            </div>
          </div>
          </div>
      </form>
        
      </section>
    </div>
  );
};

export default Interview;
