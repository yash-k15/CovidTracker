import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CleanHand from "../images/wash-hand.svg";
import Distance from "../images/distance.svg";
import Doctor from "../images/doctor.svg";
import Home from "../images/home.svg";
import Call from "../images/call.svg";
import Workout from "../images/workout.svg";
import Food from "../images/food.svg";

function Symptom() {
  return (
    <div style={{ margin: "20px" }}>
      <p style={{ fontFamily: "Tahoma, Geneva, sans-serif"}}>
      <Tabs>
        <TabList style= {{textAlign: "center"}}>
          <Tab>Overview</Tab>
          <Tab>Symptoms</Tab>
          <Tab>Prevention</Tab>
          <Tab>Treatments</Tab>
        </TabList>

        <TabPanel>
          <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus.
          </p>
          <p>
            Most people who fall sick with COVID-19 will experience mild to
            moderate symptoms and recover without special treatment.
          </p>
          <hr />
          <p><b>HOW IT SPREADS</b></p>
          <p>
            The virus that causes COVID-19 is mainly transmitted through
            droplets generated when an infected person coughs, sneezes, or
            exhales. These droplets are too heavy to hang in the air, and
            quickly fall on floors or surfaces.
          </p>
          <p>
            You can be infected by breathing in the virus if you are within
            close proximity of someone who has COVID-19, or by touching a
            contaminated surface and then your eyes, nose or mouth.
          </p>
          <p><b>Important Websites: </b></p>
          <ul><li><p>
          World Health Organization(WHO) : {" "}
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              target="_blank"
              style={{ color: "blue" }}
            >
              WHO</a>,
              Twitter : <a
              href="https://twitter.com/WHO"
              target="_blank"
              style={{ color: "blue" }}
            >
              Official Account
            </a>
          </p></li>
          <li><p>
          Centers for Disease Control and Prevention(CDC ): {" "}
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
              target="_blank"
              style={{ color: "blue" }}
            >
              CDC
            </a>
            Twitter : <a
              href="https://twitter.com/CDCgov"
              target="_blank"
              style={{ color: "blue" }}
            >
              Official Account
            </a>
          </p></li>
          <li><p>
          The United States Food and Drug Administration (FDA): {" "}
            <a
              href="https://www.fda.gov/"
              target="_blank"
              style={{ color: "blue" }}
            >
              FDA
            </a>
            Twitter : <a
              href="https://twitter.com/US_FDA"
              target="_blank"
              style={{ color: "blue" }}
            >
              Official Account
            </a>
          </p></li>
          <li><p>
          National Institutes of Health (NIH): {" "}
            <a
              href="https://www.nih.gov/coronavirus"
              target="_blank"
              style={{ color: "blue" }}
            >
              NIH
            </a>
            Twitter : <a
              href="https://twitter.com/NIH"
              target="_blank"
              style={{ color: "blue" }}
            >
              Official Account
            </a>
          </p></li>
          <li><p>
          The United States Department of Health and Human Services (HHS): {" "}
            <a
              href="https://www.hhs.gov/"
              target="_blank"
              style={{ color: "blue" }}
            >
              HHS
            </a>
            Twitter : <a
              href="https://twitter.com/HHSGov"
              target="_blank"
              style={{ color: "blue" }}
            >
              Official Account
            </a>
          </p></li>
          <li><p>
          Official Website for COIVD-19: {" "}
            <a
              href="https://www.coronavirus.gov/"
              target="_blank"
              style={{ color: "blue" }}
            >
              COVID-19
            </a>
          </p></li></ul>
        </TabPanel>
        <TabPanel>
          <p>
            COVID-19 affects different people in different ways. Most infected
            people will develop mild to moderate illness and recover without
            hospitalization.
          </p>
          <hr />
          <p><b>Most common symptoms:</b></p>
          <ul>
            <li><i>fever</i></li>
            <li><i>dry cough</i></li>
            <li><i>tiredness</i></li>
          </ul>
          <p><b>Less common symptoms:</b></p>
          <ul>
            <li><i>aches and pains</i></li>
            <li><i>sore throat</i></li>
            <li><i>diarrhoea</i></li>
            <li><i>conjunctivitis</i></li>
            <li><i>headache</i></li>
            <li><i>loss of taste or smell</i></li>
            <li><i>a rash on skin, or discolouration of fingers or toes</i></li>
          </ul>
          <p><b>Serious symptoms:</b></p>
          <ul>
            <li><i>difficulty breathing or shortness of breath</i></li>
            <li><i>chest pain or pressure</i></li>
            <li><i>loss of speech or movement</i></li>
          </ul>
          <p>
            Seek immediate medical attention if you have serious symptoms.
            Always call before visiting your doctor or health facility.
          </p>
          <img src={Doctor} style={{ height: 350 }} />
          <p>
            People with mild symptoms who are otherwise healthy should manage
            their symptoms at home.
          </p>
          <p>
            On average it takes 5–6 days from when someone is infected with the
            virus for symptoms to show, however it can take up to 14 days.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions. Follow advice provided by your local
            public health agency.
          </p>
          <hr />
          <p>To prevent the spread of COVID-19:</p>
          <ul>
            <li>
            <i>Clean your hands often. Use soap and water, or an alcohol-based
              hand rub.</i>
              <img src={CleanHand} style={{ height: 350}} />
            </li>
            <li>
            <i>Maintain a safe distance from anyone who is coughing or sneezing.</i>
              <img src={Distance} style={{ height: 350}} />
            </li>

            <li><i>Don’t touch your eyes, nose or mouth.</i></li>
            <li>
            <i>Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze.</i>
            </li>
            <li><i>Stay home if you feel unwell.</i></li>
            <li>
            <i>If you have a fever, cough and difficulty breathing, seek medical
              attention. Call in advance.</i>
            </li>
            <li><i>Follow the directions of your local health authority.</i></li>
          </ul>
          <p>
            Avoiding unneeded visits to medical facilities allows healthcare
            systems to operate more effectively, therefore protecting you and
            others.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            To date, there are no specific vaccines or medicines for COVID-19.
            Treatments are under investigation, and will be tested through
            clinical trials. World Health Organization
          </p>
          <hr />
          <p>Self-care</p>
          <p>
            If you feel sick you should rest, drink plenty of fluid, and eat
            nutritious food. Stay in a separate room from other family members,
            and use a dedicated bathroom if possible. Clean and disinfect
            frequently touched surfaces.
          </p>
          <p>
            Everyone should keep a healthy lifestyle at home. Maintain a healthy
            diet, sleep, stay active, and make social contact with loved ones
            through the phone or internet. Children need extra love and
            attention from adults during difficult times. Keep to regular
            routines and schedules as much as possible.
          </p>
          <img src={Home} style={{ height: 150 }} />
          <img src={Call} style={{ height: 250 }} />
          <img src={Workout} style={{ height: 250 }} />
          <img src={Food} style={{ height: 200 }} />
          <p>
            It is normal to feel sad, stressed, or confused during a crisis.
            Talking to people you trust, such as friends and family, can help.
            If you feel overwhelmed, talk to a health worker or counsellor.
          </p>
          <p>Medical treatments</p>
          <p>
            If you have mild symptoms and are otherwise healthy, self-isolate
            and contact your medical provider or a COVID-19 information line for
            advice.
          </p>
          <p>
            Seek medical care if you have a fever, a cough, and difficulty
            breathing. Call in advance.
          </p>
        </TabPanel>
      </Tabs>
      </p>
    </div>
  );
}

export default Symptom;