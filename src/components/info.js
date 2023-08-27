import styles from "./info.module.css";
const Info = () => {
  return (
    <section className={styles.frame}>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.heading3}>Already a patient?</div>
          <div className={styles.linkSign}>Sign in to manage your care</div>
        </div>
        <div className={styles.item1}>
          <div className={styles.heading3}>Careers</div>
          <div className={styles.linkSign}>Learn more and see openings</div>
        </div>
        <div className={styles.item2}>
          <div className={styles.heading3}>Work with us as a clinician?</div>
          <div className={styles.linkSign}>
            Sign in to your clinician portal
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
