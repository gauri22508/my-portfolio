import { Box, Container, Typography } from '@mui/material';
import './Projects.css';

const projects = [
  {
    title: "Wanderlust",
    desc: "A full stack travel listing platform. Users can list, explore and review travel destinations.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/gauri22508/project-1",
    live:    "https://project-1-hl0j.onrender.com/listings",
    type: "Full Stack"
  },
  {
    title: "Weather App",
    desc: "Real-time weather application showing live weather data with beautiful UI.",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    github: "#",
    live: "#",
    type: "Frontend"
  },
  {
    title: "Instagram Clone",
    desc: "Frontend clone of Instagram with responsive design and modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gauri22508/instagram-clone",
    live: "#",
    type: "Frontend"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <Container maxWidth="lg">
        <Typography className="projects-title">
          My <span className="highlight">Projects</span>
        </Typography>

        <Box className="projects-grid">
          {projects.map((project, index) => (
            <Box key={index} className="project-card">
              
              <span className="project-type">{project.type}</span>
              
              <Typography className="project-name">
                {project.title}
              </Typography>
              
              <Typography className="project-desc">
                {project.desc}
              </Typography>

              <Box className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </Box>

              <Box className="project-links">
                <a href={project.github} className="project-link">
                  ⭐ GitHub
                </a>
                <a href={project.live} className="project-link">
                  🔗 Live Demo
                </a>
              </Box>

            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Projects;