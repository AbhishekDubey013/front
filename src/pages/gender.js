import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Button,
} from "@mui/material";
import styles from "./gender.module.css";
import { useNavigate } from 'react-router-dom';
const Gender = () => {
  const navigate = useNavigate();
  const handleRatingChange = (event, newValue) => {
    console.log(newValue);
    navigate('/interview');
    }
  return (
    <div className={styles.gender}>
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
                    <h3 className={styles.pleaseAnswerAContainer}>
                      <p className={styles.pleaseAnswerA}>
                        Please answer a few questions
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        for your psychologist.
                      </p>
                    </h3>
                    <h3 className={styles.pleaseAnswerAContainer}>
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
                    </h3>
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
              <FormControl sx={{ width: 274 }} variant="outlined">
                <InputLabel color="primary">Gender</InputLabel>
                <Select
                  color="primary"
                  defaultValue="label"
                  size="medium"
                  label="Gender"
                >
                  <MenuItem value="label">label</MenuItem>
                  <MenuItem value="label">label</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className={styles.pseudo} />
            </div>
          </div>
          <div className={styles.divwelcomeScreenStickyfoot}>
            <div className={styles.divwelcomeScreenTimetocomp}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.button}>
                <Button className={styles.start} variant="text" color="primary" onClick={(event) => handleRatingChange(event, 'Rarely')}>
                  Start
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gender;
