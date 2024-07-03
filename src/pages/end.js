
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import styles from "./testpage.module.css";
import { useNavigate } from "react-router-dom";

const Testpage = () => {
  const navigate = useNavigate();
  const [analysisResult, setAnalysisResult] = useState(null);
  const phoneNumber1 = localStorage.getItem('mobile');
  const phoneNumber = `91${phoneNumber1}@c.us`;

  useEffect(() => {
    const fetchData = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phoneNumber: phoneNumber })
        };

        try {
            const response = await fetch('http://localhost:5001/api/auth/results', requestOptions);
            const data = await response.json();
            if (data && response.ok) {
                setAnalysisResult(data.analysisResult);
                console.log(data.analysisResult)
            } else {
                console.log("No results found");
            }
        } catch (error) {
            console.error("Failed to fetch results:", error);
        }
    };

    fetchData();
}, [phoneNumber]);

  return (
    <div className={styles.testpage}>
      <video src='/videos/bk.mp4' autoPlay loop muted />
      <section className={styles.bodyMain}>
        {analysisResult ? (
          <div className={styles.section}>
            <h1 style={{ fontWeight: 'bold', color: 'black', fontSize: '18px', textAlign: 'center'}}>Analysis Results</h1>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{analysisResult}</p>
            {/* <Button variant="contained" color="primary" onClick={() => navigate('/interview')}>
              Go to Interview
            </Button> */}
          </div>
        ) : (
          <p>Loading results...</p>
        )}
      </section>
    </div>
  );
};

export default Testpage;
