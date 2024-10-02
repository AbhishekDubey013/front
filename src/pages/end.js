
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import styles from "./testpage.module.css";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const Testpage = () => {
  const navigate = useNavigate();
  const [analysisResult, setAnalysisResult] = useState(null);
  const phoneNumber1 = localStorage.getItem('mobile');
  const phoneNumber = `91${phoneNumber1}@c.us`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mongodb-ttio.onrender.com/api/auth/results', {
          params: { phoneNumber }
        });
        console.log(response);
        const data = response.data;
        if (data && response.status === 200) {
          setAnalysisResult(data.analysisResult);
          console.log(data.analysisResult);
        } else {
          console.log("No results found");
          setAnalysisResult("Sorry couldn't update right now as server is busy processing other request please log in bit later to view results or go premium");
        }
      } catch (error) {
        console.error("Failed to fetch results:", error);
        setAnalysisResult("Sorry couldn't fetch the results due to a server error. Please try again later.");
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 20000); // 90000 ms is 90 seconds

    return () => clearTimeout(timer);
  }, [phoneNumber]);


  return (
    <div className={styles.testpage}>
      <video src='/videos/bk.mp4' autoPlay loop muted />
      <section className={styles.bodyMain}>
        {analysisResult ? (
          <div className={styles.section}>
            <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }} sx={{ fontSize: { xs: '18px', sm: '24px', md: '32px', lg: '40px' } }}>Analysis Results</h1>
            <p style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }} sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px' } }}>{analysisResult}</p>
            <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }} sx={{ fontSize: { xs: '18px', sm: '24px', md: '32px', lg: '40px' } }}>Get free diagnostic consultation</h1>
            <p style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }} sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px' } }}>You can enroll by subscribing to us, and our team will reach out to you</p>

          </div>
        ) : (
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '2px', marginTop: '200px' }}>We are processing your data ETA 20 secs</p>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
              <LinearProgress color="secondary" />
            </Stack>
            <div style={{ marginTop: '200px' }}></div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Testpage;
