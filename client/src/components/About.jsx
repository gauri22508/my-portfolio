import{ Typography ,Container , Box} from '@mui/material';
import './About.css';

const About = ()=>{
    return(
        <section className='section'>
            <Container maxWidth="lg">
                {/*section title*/}
                <Typography className='title'>
                    About <span className='highlight'> Me </span>
                    </Typography>

                    <Box className="about-grid">
                        {/* left- bio*/}
                        <Box className=" bio">
                            <Typography className="text">
                                Hi! I'm a BCA student at St.john's College, Agra.
                                I'm an intermediate Full Stack Developer with a passion
                                 for creating dynamic and responsive web applications. 
                                 I have experience working with various technologies, including React, 
                                 Node.js, and MongoDB. I enjoy learning new skills and staying up-to-date with 
                                 the latest trends in web development.

                                 And a DSA learner, I am dedicated to improving my 
                                 problem-solving skills and mastering data structures and algorithms.

                            </Typography>
                            
                        </Box>
                       
                        <Box className="image">
                            <a href="/certificate.jpeg" target="_blank">
                                <img src="/certificate.jpeg"  alt="certificate" 
                                className='certificate-img'/>
                            </a>
                        </Box>
                    </Box>
                    {/* Right - Education and Skills */}
                    <Box className="education-skills">
                        <Typography className="subtitle">
                            Education
                        </Typography>
                        <Typography>
                            <Box className="edu-card">
                           <p className='edu-degree'> Bachelor of Computer Applications. </p>
                           <p className='edu-college'> St.john's College, Agra </p>
                           <p className='edu-year'> Currently Pursuing</p>
                            </Box>
                        </Typography>
                         </Box>
                        <Typography className="subtitle">
                            Skills
                        </Typography>
                        <Box className="skills-pills">
                            {["React","Node.js","MongoDB","MySQL","HTML",
                            "CSS","JavaScript","Computer Networks", 
                           " DBMS",
                        "Operating Systems","Tailwind CSS",
                        "Redux","Material UI","Bootstap",
                           " programming languages (C, python, java , php )",
                            "Data Structures and Algorithms"].map((skill) => (
                                <span key={skill} className="skill-pill">
                                    {skill}
                                </span>
                            ))}
                        </Box>
                  
                </Container>
        </section>
    );
};

export default About;



