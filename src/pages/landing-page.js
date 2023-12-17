import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./landing-page.module.css";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLandingPageContainerClick = useCallback(() => {
    navigate("/test-option");
  }, [navigate]);

  return (
    <div>
      <div className={styles.divdivBlock40}>
        <div className={styles.heading}>
          How it works?
        </div>
        <div className={styles.imageBox}>
          <img
            className={styles.imgmain}
            alt=""
            src="/6257b642e1b46b47ecfaf8dc-61085e8ec2fa67bd83b2ffad-group5p1080min201p800png@2x.png"
          />
        </div>
        <div className={styles.aboutusbox}>
          <div className={styles.aboutusinfo}>
            <p>Free mental health diagnostics and consultation for all</p>
          </div>
          <div className={styles.testButton}>
          <Button
            sx={{ width: 287 }}
            color="primary"
            size="medium"
            variant="text"
            onClick={onLandingPageContainerClick}
          >
            Never
          </Button>
        </div>
        </div>
      </div>
      <section className={styles.howItWorks}>
      <p className={styles.heading} style={{ minWidth: '195px', maxHeight: '10px' }}>How it works</p>
          <p className={styles.h1}>How it works</p>
          <p>Easy and secured input collection</p>
          <p className={styles.h1}>How it works</p>
          <p>Diagnosis through our advanced backend technology</p>
          <p className={styles.h1}>How it works</p>
          <p>Free one to one session with the psycologist</p>
      </section>
      <article className={styles.fund}>
        <div className={styles.pparagraph32margin}>
          <h2 className={styles.givingBack}>Giving Back | Rocket Health</h2>
        </div>
        <div className={styles.pparagraph55margin}>
          <div className={styles.pparagraph55}>
            <div className={styles.weAreCommittedContainer}>
              <p className={styles.rocketHealthIs}>
                We are committed and passionate about giving
              </p>
              <p className={styles.rocketHealthIs}>
                back to India in times of need.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.linkmargin}>
          <div className={styles.link}>
            <div className={styles.weAreCommittedContainer}>Learn More</div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LandingPage;
