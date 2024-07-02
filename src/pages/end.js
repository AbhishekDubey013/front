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
  const phoneNumber = "phoneNumberFromSomewhere"; // This needs to be dynamically set

  useEffect(() => {
    fetch(`http://localhost:5001/api/auth/results/${phoneNumber}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setAnalysisResult(data);
        } else {
          console.log("No results found");
        }
      })
      .catch(error => console.error("Failed to fetch results:", error));
  }, [phoneNumber]);

  return (
    <div className={styles.testpage}>
      <video src='/videos/bl.mp4' autoPlay loop muted />
      <section className={styles.bodyMain}>
        {analysisResult ? (
          <div className={styles.section}>
            <h1>Analysis Results</h1>
            <p>{analysisResult.analysisResult}</p>
            <p>Results received on: {new Date(analysisResult.timestamp).toLocaleString()}</p>
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
