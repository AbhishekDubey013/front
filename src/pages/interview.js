import { TextField, Button, Icon } from "@mui/material";
import styles from "./interview.module.css";
import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import questionsData from '../components/personal.json';
import { add_r } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const questions = questionsData.questions;
const Interview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inputText, setInputText] = useState('');
  let data1 = useSelector(state => state.reducera.questionResponses);
  const handleRatingChange = (event, newValue) => {
    console.log(newValue);
    if (currentQuestion === 0) {
      localStorage.setItem('mobile', newValue)
    }
    setRatings((prevRatings) => ({
        ...prevRatings,
        [questions[currentQuestion]]: newValue,
    }));
    setInputText(" ");
    if (currentQuestion < questions.length - 1)
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }


  const handleSubmit = async(e) => {
    e.preventDefault();
    Object.entries(ratings).forEach(([question, rating]) => {
      dispatch(add_r(question, rating));
    });
    const dataArray = Object.values(ratings); 
    if (currentQuestion === questions.length - 1) {
      navigate('/mcq');
      setRatings({});
      const mobileNumber = localStorage.getItem('mobile');
    // Construct the data object
    try {
      console.log(mobileNumber)
     console.log(dataArray)
      const response = await fetch('https://gt-7tqn.onrender.com/api/auth/pd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber, dataArray }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to store data in the server');
      }
    }
    catch (error) {
      throw new Error('Error storing data in the server: ' + error.message);
    }
    }
  };
  return (
    <div className={styles.interview}>
      <section className={styles.bodyMain}>
        <img
          className={styles.divbackgroundScSc1x0n4hqIcon}
          alt="img"
          src="/divbackgroundsc--sc1x0n4hq1@2x.png"
        />
        <form onSubmit={handleSubmit}>
          {currentQuestion < questions.length - 1 ? (
        <div className={styles.section}>
          <div className={styles.divscreencontentwrapperSc}>
            <div className={styles.divscreencontentScSc1ndo}>
              <div className={styles.pseudo} />
              <div className={styles.divcontentwrapperinnerScS}>
                <div className={styles.divanimatestyledScScNw4u}>
                  <div className={styles.heading2}>
                    <h3 className={styles.pleaseAnswerAContainer}>
                      <p className={styles.pleaseAnswerA}>
                      {[questions[currentQuestion]]}
                      </p>
                    </h3>
                  </div>
                </div>
              </div>
              <div className={styles.pseudo} />
              <div className={styles.obFormslabel}>
                <TextField
                  sx={{ width: 300 }}
                  color="primary"
                  variant="outlined"
                  multiline
                  label="Please enter"
                  placeholder="Please enter"
                  margin="none"
                  value={inputText}
                  onChange={(event) => setInputText(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.divwelcomeScreenStickyfoot}>
            <div className={styles.divwelcomeScreenTimetocomp}>
              <div className={styles.button}>
                <Button
                  variant="text"
                  color="primary"
                  endIcon={<Icon>done_sharp</Icon>}
                  onClick={(event) => handleRatingChange(event, inputText)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <>
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
            <p>All questions answered. Thank you!</p>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={styles.itemmargin}
            >
              Submit
            </Button>
          </>
        )}
      </form>
        
      </section>
    </div>
  );
};

export default Interview;
