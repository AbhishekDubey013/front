import { Button } from "@mui/material";
import styles from "./m-c-q.module.css";
import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import questionsData from '../components/Objective.json';
import { add_r } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MCQ = () => {
  const [questions, setQuestions] = useState([]);
  const [moduleTestName, setmt] = useState([]);
  useEffect(() => {
    // Fetch moduleName each time the component mounts or updates
    const moduleName = localStorage.getItem('moduleName');
    const moduleTestName = localStorage.getItem('moduleTestName');
    const moduleQuestions = questionsData[moduleName] || [];
    setQuestions(moduleQuestions);
    setmt(moduleTestName);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let data1 = useSelector(state => state.reducera.questionResponses);
  console.log(data1)
  console.log(4)
  const handleRatingChange = (event, newValue) => {
    console.log(newValue);
    setRatings((prevRatings) => ({
        ...prevRatings,
        [questions[currentQuestion]]: newValue,
    }));
    if (currentQuestion < questions.length - 1)
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }


  const handleSubmit = async(e) => {
    e.preventDefault();
    Object.entries(ratings).forEach(([question, rating]) => {
      dispatch(add_r(question, rating));
    });
    const dataArray = Object.values(ratings); 
    console.log(dataArray);
    if (currentQuestion === questions.length - 1) {
      navigate('/end');
      setRatings({});
      const mobileNumber = localStorage.getItem('mobile');
      const PK = localStorage.getItem('PK');
    // Construct the data object
    try {
      console.log(mobileNumber)
     //console.log(dataArray)
      const response = await fetch('https://gt-7tqn.onrender.com/api/auth/AT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber, dataArray, PK }),
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
    <div className={styles.mcq}>
      <main className={styles.frame}>
        <section className={styles.frame1}>
          <div className={styles.divrtShowcase}>
            <div className={styles.heading1}>
              <h1 className={styles.takeOurQuickContainer}>
                <p className={styles.takeOurQuick}>Take our quick</p>
                <p className={styles.takeOurQuick}>ADHD test</p>
              </h1>
            </div>
          </div>
          <div className={styles.divrtMainbodySurround}>
            <div className={styles.divrtMain}>
              <div className={styles.form}>
              <form onSubmit={handleSubmit}>
          {currentQuestion < questions.length - 1 ? (
                <div className={styles.divquestionContainer}>
                  <div className={styles.divcontent}>
                    <div className={styles.heading3}>
                      <h1 className={styles.question1}>Question {currentQuestion + 1}</h1>
                      <div className={styles.pseudo} />
                    </div>
                    <div className={styles.p}>
                      <div className={styles.iFindItContainer}>
                        <p className={styles.takeOurQuick}>
                        {questions[currentQuestion]}
                        </p>
                      </div>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.itemmargin}>
                        <Button
                          sx={{ width: 287 }}
                          variant="text"
                          color="primary"
                          onClick={(event) => handleRatingChange(event, 'Never')}
                        >
                          Never
                        </Button>
                      </div>
                      <div className={styles.itemmargin}>
                        <Button
                          sx={{ width: 287 }}
                          variant="text"
                          color="primary"
                          onClick={(event) => handleRatingChange(event, 'Rarely')}
                        >
                          Rarely
                        </Button>
                      </div>
                      <div className={styles.itemmargin}>
                        <Button
                          sx={{ width: 287 }}
                          variant="text"
                          color="primary"
                          onClick={(event) => handleRatingChange(event, 'Sometimes')}
                        >
                          Sometimes
                        </Button>
                      </div>
                      <div className={styles.itemmargin}>
                        <Button
                          sx={{ width: 287 }}
                          variant="text"
                          color="primary"
                          onClick={(event) => handleRatingChange(event, 'Often')}
                        >
                          Often
                        </Button>
                      </div>
                      <div className={styles.itemmargin}>
                        <Button
                          sx={{ width: 287 }}
                          variant="text"
                          color="primary"
                          onClick={(event) => handleRatingChange(event, 'Very often')}
                        >
                          Very often
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                 ) : (
                  <>
                    <p>All questions answered. Thank you!</p>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </>
                )}
              </form>
                <div className={styles.divcontainer}>
                  <div className={styles.divprogressText}>
                    <div className={styles.question}>{`Question `}</div>
                    <div className={styles.div1}>{currentQuestion + 1}</div>
                    <div className={styles.question}>{` of `}</div>
                    <div className={styles.div1}>10</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divrtMainbottom}>
              <div className={styles.divcustom}>
                <div className={styles.pintro}>
                  <div className={styles.whenAnsweringTheContainer}>
                    <p className={styles.takeOurQuick}>
                      When answering the above
                    </p>
                    <p className={styles.takeOurQuick}>
                      questions please consider how they
                    </p>
                    <p className={styles.takeOurQuick}>
                      have applied to you in the 6 months
                    </p>
                    <p className={styles.takeOurQuick}>or so.</p>
                  </div>
                </div>
                <div className={styles.p1}>
                  <div className={styles.whenAnsweringTheContainer}>
                    <p className={styles.takeOurQuick}>
                      This test will give an indication as to
                    </p>
                    <p className={styles.takeOurQuick}>
                      whether you are experiencing the
                    </p>
                    <p className={styles.takeOurQuick}>
                      most common symptoms of ADHD,
                    </p>
                    <p className={styles.takeOurQuick}>
                      but it cannot replace a full
                    </p>
                    <p className={styles.takeOurQuick}>
                      assessment nor should be used to
                    </p>
                    <p className={styles.takeOurQuick}>
                      self diagnose or decide upon a
                    </p>
                    <p className={styles.takeOurQuick}>treatment plan.</p>
                  </div>
                </div>
                <div className={styles.emphasis}>
                  <div className={styles.strongThisContainer}>
                    <span className={styles.thisTestWas}>
                      This test was adapted from:
                    </span>
                    <span className={styles.adaptedFrom}> Adapted from</span>
                  </div>
                  <div className={styles.mulhausersTheStructured}>
                    {moduleTestName}
                  </div>
                  <div className={styles.mulhausersTheStructured}>(SAAST)</div>
                </div>
              </div>
            </div>
            <div className={styles.divrtContainer}>
              <div className={styles.divrtGrid6}>
                <div className={styles.divcustom2}>
                  <div className={styles.heading21}>Take another test</div>
                  <Button
                    className={styles.linkView}
                    variant="text"
                    color="primary"
                  >
                    View all tests
                  </Button>
                  <div className={styles.p3}>
                    <div className={styles.whenAnsweringTheContainer}>
                      <p className={styles.takeOurQuick}>
                        We have online mental health
                      </p>
                      <p className={styles.takeOurQuick}>
                        quizzes for many conditions
                      </p>
                      <p className={styles.takeOurQuick}>
                        including ADHD, autism, anxiety,
                      </p>
                      <p className={styles.takeOurQuick}>
                        depression, PTSD, and more. Each
                      </p>
                      <p className={styles.takeOurQuick}>
                        one should take no longer than five
                      </p>
                      <p className={styles.takeOurQuick}>minutes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default MCQ;
