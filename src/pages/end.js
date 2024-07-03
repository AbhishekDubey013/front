// import { Button } from "@mui/material";
// import styles from "./testpage.module.css";
// import { useNavigate } from "react-router-dom";
// const Testpage = () => {
//   const navigate = useNavigate();
//   const handleJoinCommunity = () => {
//     // Use the navigate function to navigate when the button is clicked
//     navigate('/interview');
//   };
//   return (
//     <div className={styles.testpage}>
//        <video src='/videos/bl.mp4' autoPlay loop muted />
//       <section className={styles.bodyMain}>
//         <div className={styles.section}>
//           <div className={styles.divscreencontentwrapperSc}>
//             <div className={styles.divscreencontentScSc1ndo}>
//               <div className={styles.pseudo} />
//               <div className={styles.divcontentwrapperinnerScS}>
//                 <div className={styles.divanimatestyledScScNw4u}>
//                   <div className={styles.heading2}>
//                     <div className={styles.pleaseAnswerAContainer}>
//                       <p className={styles.pleaseAnswerA}>
//                         Thats it, we have your responses
//                       </p>
//                       <p className={styles.pleaseAnswerA}>
//                         after thorough review we will share reults with you
//                       </p>
//                     </div>
//                     <div className={styles.pleaseAnswerAContainer}>
//                       <p className={styles.pleaseAnswerA}>
//                         You can get your results on Whatsapp No.
//                       </p>
//                       <p className={styles.pleaseAnswerA}>
//                         which you provided
//                       </p>
//                       <p className={styles.pleaseAnswerA}>
//                         You can avail free consultation through same
//                       </p>
//                     </div>
//                   </div>
//                   <div className={styles.ptextwrapperScSc1f8vz90}>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.pseudo} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testpage;


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
      <video src='/videos/bl.mp4' autoPlay loop muted />
      <section className={styles.bodyMain}>
        {analysisResult ? (
          <div className={styles.section}>
            <h1 style={{ fontWeight: 'bold', color: 'black'}}>Analysis Results</h1>
            <p style={{ fontWeight: 'bold', fontSize: '25px' }}>{analysisResult}</p>
            <Button variant="contained" color="primary" onClick={() => navigate('/interview')}>
              Go to Interview
            </Button>
          </div>
        ) : (
          <p>Loading results...</p>
        )}
      </section>
    </div>
  );
};

export default Testpage;
