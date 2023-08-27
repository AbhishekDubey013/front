import styles from "./pre-footer.module.css";
const PreFooter = () => {
  return (
    <section className={styles.preFooter}>
      <div className={styles.pparagraph30}>
        <div className={styles.ifYoureExperiencingContainer}>
          <p className={styles.ifYoureExperiencing}>
            If you’re experiencing an
          </p>
          <p className={styles.ifYoureExperiencing}>
            emergency and need immediate
          </p>
          <p className={styles.ifYoureExperiencing}>
            help, call suicide prevention
          </p>
          <p className={styles.ifYoureExperiencing}>
            helplines or go to the nearest
          </p>
          <p className={styles.ifYoureExperiencing}>hospital.</p>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
