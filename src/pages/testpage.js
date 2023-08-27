import { Button } from "@mui/material";
import styles from "./testpage.module.css";
import { useNavigate } from "react-router-dom";
const Testpage = () => {
  const navigate = useNavigate();
  const handleJoinCommunity = () => {
    // Use the navigate function to navigate when the button is clicked
    navigate('/interview');
  };
  return (
    <div className={styles.testpage}>
      <section className={styles.bodyMain}>
        <img
          className={styles.divbackgroundScSc1x0n4hqIcon}
          alt=""
          src="/divbackgroundsc--sc1x0n4hq1@2x.png"
        />
        <div className={styles.section}>
          <div className={styles.divscreencontentwrapperSc}>
            <div className={styles.divscreencontentScSc1ndo}>
              <div className={styles.pseudo} />
              <div className={styles.divcontentwrapperinnerScS}>
                <div className={styles.divanimatestyledScScNw4u}>
                  <div className={styles.heading2}>
                    <div className={styles.pleaseAnswerAContainer}>
                      <p className={styles.pleaseAnswerA}>
                        Please answer a few questions
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        for your psychologist.
                      </p>
                    </div>
                    <div className={styles.pleaseAnswerAContainer}>
                      <p className={styles.pleaseAnswerA}>
                        Your answers will be kept
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        confidential, and only used to
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        make sure we provide the
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        right care for you.
                      </p>
                    </div>
                  </div>
                  <div className={styles.ptextwrapperScSc1f8vz90}>
                    <div className={styles.byStartingThis}>
                      By starting this survey, you consent to
                    </div>
                    <div className={styles.byStartingThis}>
                      {`our `}
                      <span className={styles.terms}>Terms</span>
                      {` and `}
                      <span className={styles.terms}>Privacy Policy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pseudo} />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
  <Button
    variant="text"
    color="primary"
    onClick={handleJoinCommunity}
  >
    Start
  </Button>

  <div className={styles.divwelcomeScreenStickyfoot}>
    <div className={styles.divwelcomeScreenTimetocomp}>
      <img className={styles.svgIcon} alt="" src="/svg.svg" />
      <div className={styles.takes4Minutes}>Takes 4 minutes</div>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default Testpage;
