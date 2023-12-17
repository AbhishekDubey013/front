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
                        Thats it, we have your responses
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        after thorough review we will share reults with you
                      </p>
                    </div>
                    <div className={styles.pleaseAnswerAContainer}>
                      <p className={styles.pleaseAnswerA}>
                        You can get your results on Whatsapp 
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        Text "0798" through your registered number
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        to 9016315937 
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        You can avail free consultation through same
                      </p>
                    </div>
                  </div>
                  <div className={styles.ptextwrapperScSc1f8vz90}>
                  </div>
                </div>
              </div>
              <div className={styles.pseudo} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testpage;
