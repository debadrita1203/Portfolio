import React from 'react';
import SkillsList from './SkillsList';
import EducationList from './EducationList';
import '../styles/About.css';

function SkillsEducation() {
  return (
    <section className="skills-education-section">
      <SkillsList />
      <EducationList />
    </section>
  );
}

export default SkillsEducation;
