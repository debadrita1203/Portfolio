import React from 'react';
import ProjectCard from '../work/ProjectCard';
import '../styles/Work.css';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'Landing Page',
    description: 'Landing page of a Travel Blog.',
    githubLink: 'https://github.com/debadrita1203/Landing-Page',
    tags: ['HTML', 'CSS', 'Javascript'],
    direction: 'left',
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeatherMap API.',
    githubLink: 'https://github.com/debadrita1203/WeatherApp',
    tags: ['React', 'API', 'CSS'],
    direction: 'right',
  },

  {
    title: 'Amazon Clone',
    description: 'Landing page clone of the Amazon Website.',
    githubLink: 'https://github.com/debadrita1203/AmazonClone',
    tags: ['HTML', 'CSS', 'Javascript'],
    direction: 'left',
  },
  {
    title: 'Online Learning Platform',
    description: 'Responsive OLP for students offering courses, and plans',
    githubLink: 'https://github.com/debadrita1203/Eduverse',
    tags: ['React', 'Course.json', 'Stripe (demo)'],
    direction: 'right',
  },
];

const Work = () => {
  return (
    <div className="page-w">
      <div className="work">
        <h2> My Work</h2>
        <div className="timeline">
          <div className="vertical-line" />
          <div className="projects-container">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} direction={idx % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default Work;
