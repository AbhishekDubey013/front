import { useCallback } from "react";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import PreFooter from "../components/pre-footer";
import Footer from "../components/footer";
import styles from "./landing-page.module.css";
const LandingPage = () => {
  const navigate = useNavigate();

  const handleJoinCommunity = useCallback(() => {
    navigate("/pretest");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <section className={styles.divhero}>
        <div className={styles.divdivBlock40}>
          <div className={styles.divdivBlock}>
            <div className={styles.divdivBlock16}>
              <div className={styles.frame}>
                <div className={styles.frame1}>
                  <div className={styles.pparagraphmargin}>
                    <div className={styles.pparagraph} />
                  </div>
                  <div className={styles.rocketHealthIsContainer}>
                    <span className={styles.rocketHealthIsContainer1}>
                      <p className={styles.rocketHealthIs}>
                      Your pathway to mental wellness. Experience free diagnostics, assessments, and consultations for mental health concerns.
                      </p>
                      <p className={styles.rocketHealthIs}>
                        Take the free assessment right away
                      </p>
                    </span>
                  </div>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={handleJoinCommunity} 
                    endIcon={<Icon>arrow_forward_ios_sharp</Icon>}
                  >
                   Take the free assessment right away
                  </Button>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={handleJoinCommunity} 
                    endIcon={<Icon>arrow_forward_sharp</Icon>}
                  >
                   Take the free assessment
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divdivBlock2}>
            <img
              className={styles.b642e1b46b47ecfaf8dc61085e8ecIcon}
              alt=""
              src="/6257b642e1b46b47ecfaf8dc-61085e8ec2fa67bd83b2ffad-group5p1080min201p800png@2x.png"
            />
          </div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.pparagraph10margin}>
            <div className={styles.pparagraph10}>
              <h1 className={styles.modernHealthcareForContainer}>
                <p className={styles.rocketHealthIs}>Modern healthcare</p>
                <p className={styles.rocketHealthIs}>for all</p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.divcategorySection}>
        <div className={styles.divdivBlock7}>
          <div className={styles.yourHealthIn}>Your health in your control</div>
        </div>
        <div className={styles.divdivBlock8}>
          <div className={styles.linkmargin}>
            <div className={styles.link}>
              <div className={styles.divimagehonlder}>
                <img
                  className={styles.f0f5aff043683c9bd1dArrow20whIcon}
                  alt=""
                  src="/61058f0f5aff043683c9bd1d-arrow20whitepng@2x.png"
                />
              </div>
              <div className={styles.pparagraph23}>
                <div className={styles.strongMentalHealth}>Mental Health</div>
              </div>
            </div>
          </div>
          <div className={styles.linkmargin1}>
            <div className={styles.link}>
              <div className={styles.divimagehonlder1}>
                <img
                  className={styles.f0f5aff043683c9bd1dArrow20whIcon}
                  alt=""
                  src="/61058f0f5aff043683c9bd1d-arrow20whitepng1@2x.png"
                />
              </div>
              <div className={styles.pparagraph231}>
                <div className={styles.strong}>
                  <div className={styles.strongMentalHealth}>Sexual Health</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.linkmargin2}>
            <div className={styles.link}>
              <div className={styles.divimagehonlder2}>
                <img
                  className={styles.f0f5aff043683c9bd1dArrow20whIcon}
                  alt=""
                  src="/61058f0f5aff043683c9bd1d-arrow20whitepng2@2x.png"
                />
              </div>
              <div className={styles.pparagraph232}>
                <div className={styles.strongMentalHealth}>Women's Health</div>
              </div>
            </div>
          </div>
          <div className={styles.linkmargin3}>
            <div className={styles.link}>
              <div className={styles.divimagehonlder3}>
                <img
                  className={styles.f0f5aff043683c9bd1dArrow20whIcon}
                  alt=""
                  src="/61058f0f5aff043683c9bd1d-arrow20whitepng3@2x.png"
                />
              </div>
              <div className={styles.pparagraph233}>
                <b className={styles.strongCommunity}>Community</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.howItWorks}>
        <div className={styles.heading1}>
          <div className={styles.howItWorks1}>How it works?</div>
        </div>
        <div className={styles.divcontainer4}>
          <div className={styles.regionCarousel}>
            <div className={styles.group1Of3}>
              <div className={styles.divdivBlock13}>
                <img
                  className={styles.ebf249f4528040bf78f758SymptomIcon}
                  alt=""
                  src="/60ebf249f4528040bf78f758-symptomp500png@2x.png"
                />
                <div className={styles.divdivBlock14}>
                  <div className={styles.heading11}>
                    <div className={styles.onlineSurvey}>Online survey</div>
                  </div>
                  <div className={styles.pparagraph7}>
                    <div className={styles.strongCommunity}>
                      <p className={styles.rocketHealthIs}>
                        Report your symptoms and history to
                      </p>
                      <p className={styles.rocketHealthIs}>
                        our psychologist for evaluation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.group3Of3}>
          <div className={styles.divdivBlock141}>
            <div className={styles.heading12}>
              <div className={styles.onlineSurvey}>Assessments</div>
            </div>
            <div className={styles.pparagraph71}>
              <div className={styles.strongCommunity}>
                <p className={styles.rocketHealthIs}>
                  During the session, we will decide the
                </p>
                <p className={styles.rocketHealthIs}>
                  future steps and the required
                </p>
                <p className={styles.rocketHealthIs}>
                  assessments as per need.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divdivBlock131}>
          <div className={styles.divdivBlock142}>
            <div className={styles.heading13}>
              <div className={styles.onlineSurvey}>Therapy session</div>
            </div>
            <div className={styles.pparagraph72}>
              <div className={styles.strongCommunity}>
                <p className={styles.rocketHealthIs}>
                  Consult our RCI Licensed clinical
                </p>
                <p className={styles.rocketHealthIs}>
                   psychologist on call or video
                </p>
              </div>
            </div>
          </div>
          <img
            className={styles.divdivBlock12Icon}
            alt=""
            src="/divdivblock12@2x.png"
          />
        </div>
      </section>
      <section className={styles.weHeardYou}>
        <div className={styles.divdivBlock48}>
          <h2 className={styles.heading14}>We Heard You</h2>
        </div>
        <div className={styles.group3Of4}>
          <img
            className={styles.divdivBlock32Icon}
            alt=""
            src="/divdivblock32@2x.png"
          />
          <div className={styles.divdivBlock30}>
            <div className={styles.pparagraph14}>
              <div className={styles.myTherapistWasContainer}>
                <p className={styles.rocketHealthIs}>
                  "My therapist was just so calm and understanding
                </p>
                <p className={styles.rocketHealthIs}>
                  that she gave me the confidence to relax and be
                </p>
                <p className={styles.rocketHealthIs}>
                  myself. I have always left therapies in between but
                </p>
                <p className={styles.rocketHealthIs}>
                  I think I will continue with her. The sessions have
                </p>
                <p className={styles.rocketHealthIs}>
                  definitely helped me introspect and made me not
                </p>
                <p className={styles.rocketHealthIs}>
                  judge myself. I hope to fully recover this time! —
                </p>
                <p className={styles.rocketHealthIs}>Aniket"</p>
              </div>
            </div>
          </div>
        </div>
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
        <div className={styles.linkmargin4}>
          <div className={styles.link4}>
            <div className={styles.weAreCommittedContainer}>Learn More</div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LandingPage;
