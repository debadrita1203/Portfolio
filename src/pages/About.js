import React from 'react';
import '../styles/About.css';
import IntroSection from '../about/IntroSection';
import SkillsEducation from '../about/SkillsEducation';
import InfoCard from '../about/InfoCard';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="page-a">
      <div className="about">

        <h2>About Me</h2>

        <IntroSection />

        <SkillsEducation />

        <div className="cards-container">
          <div className="cards-row">

          <InfoCard title="Personal Skills" direction="left">
              <ul>
                <li>Leadership</li>
                <li>Creativity</li>
                <li>Communication</li>
              </ul>
            </InfoCard>

            <InfoCard title="Languages" direction="right">
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Bengali</li>
              </ul>
            </InfoCard>
          </div>

          <div className="cards-row">
          <InfoCard title="Strengths" direction="left">
              <ul>
                <li>Analytical</li>
                <li>Fast learner</li>
                <li>Hard worker</li>
                <li>Attention to Detail</li>
              </ul>
            </InfoCard>

            <InfoCard title="Hobbies" direction="right">
              <ul>
                <li>Reading</li>
                <li>Designing/Drawing</li>
                <li>Music</li>
                <li>Traveling</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default About;
