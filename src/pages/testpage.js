import { Button } from "@mui/material";
import styles from "./testpage.module.css";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
const Testpage = () => {
  const navigate = useNavigate();
  const handleJoinCommunity = () => {
    // Use the navigate function to navigate when the button is clicked
    navigate('/pde');
  };

  const aiModels = [
    { name: 'AI Model 1', price: '$50', accuracy: '90%', cases: 120 },
    { name: 'AI Model 2', price: '$75', accuracy: '95%', cases: 230 },
    { name: 'AI Model 3', price: '$100', accuracy: '98%', cases: 310 },
  ];
  return (
    <div className={styles.testpage}>
      <section className={styles.bodyMain}>
        <video className={styles.videoBackground} src='/videos/bk.mp4' autoPlay loop muted />
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
          <div>
          <div style={{ textAlign: 'center' }}>
            < div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FormControl required sx={{ m: 1, minWidth: 300 }}>
  <InputLabel id="ai-model-label">Select AI Model</InputLabel>
  <Select
    labelId="ai-model-label"
    id="ai-model-select"
    label="Select AI Model *"
  >
    {aiModels.map((model) => (
      <MenuItem key={model.name} value={model.name}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={5}>
            <Typography variant="body1">{model.name}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" color="textSecondary">{model.price}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" color="textSecondary">{model.accuracy}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary">{model.cases} cases</Typography>
          </Grid>
        </Grid>
      </MenuItem>
    ))}
  </Select>
</FormControl>

  <Button
    variant="text"
    color="primary"
    onClick={handleJoinCommunity}
  >
    Start
  </Button>
  </div>
  </div>

  <div className={styles.divwelcomeScreenStickyfoot}>
    <div className={styles.divwelcomeScreenTimetocomp}>
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
