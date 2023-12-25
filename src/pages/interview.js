import { TextField, Icon } from "@mui/material";
import styles from "./interview.module.css";
import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import questionsData from '../components/Subjective.json';
import { add_r } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Button} from '../components/Button';
const currentTimeStamp = Date.now();
const Interview = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    // Fetch moduleName each time the component mounts or updates
    const moduleName = localStorage.getItem('moduleName');
    const moduleQuestions = questionsData[moduleName] || [];
    setQuestions(moduleQuestions);
  }, []);
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
      localStorage.setItem('PK', currentTimeStamp.toString());
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
      const PK = localStorage.getItem('PK');
    // Construct the data object
    try {
      console.log(mobileNumber)
     console.log(dataArray)
      const response = await fetch('https://gt-7tqn.onrender.com/api/auth/pd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber, dataArray,PK }),
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
      <video src='/videos/bw.mp4' autoPlay loop muted />
      <section className={styles.bodyMain}>
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
                  type='text'
                  onChange={(event) => setInputText(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault(); // Prevent form submission on enter key
                      handleRatingChange(event, inputText);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.divwelcomeScreenStickyfoot}>
            <div className={styles.divwelcomeScreenTimetocomp}>
              <div>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={(event) => handleRatingChange(event, inputText)}
                type = 'text'
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
                        Please answer a few questions for your psychologist.
                      </p>
                    </div>
                    <div className={styles.pleaseAnswerAContainer}>
                      <p className={styles.pleaseAnswerA}>
                        Your answers will be kept confidential, and only used to
                      </p>
                      <p className={styles.pleaseAnswerA}>
                        make sure we provide the right care for you.
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
            <div className={styles.divwelcomeScreenStickyfoot}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={styles.divwelcomeScreenTimetocomp}
            >
              Submit
            </Button>
            </div>
          </>
        )}
      </form>
        
      </section>
    </div>
  );
};

export default Interview;
