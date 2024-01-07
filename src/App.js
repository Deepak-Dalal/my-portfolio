import './App.css';
import { TypingAnimation } from './TypingAnimation';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  const handleDownload = () => {
    const pdfUrl = 'resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <header id="header-row">
        <div id="page-links">
          <div className='section-link' onClick={() => scrollToSection('experience-section')}>Experiences</div>
          <div className='section-link' onClick={() => scrollToSection('skills-section')}>Skills</div>
          <div className='section-link' onClick={() => scrollToSection('projects-section')}>Projects</div>
          <div className='section-link' onClick={() => scrollToSection('contact-section')}>Contact</div>
          <div className='section-link' onClick={handleDownload}>Resume download</div>
        </div>
      </header>
      <section className='section'>
        <div className='section-content'>
          <div id='about-section-text'>
            <div>Hi, my name is</div>
            <TypingAnimation />
            <div id='intro-about-me'>
                I am a software Engineer with 2.5 years of full time work experience, currently working in Eagleview, India.
                I have passion for problem-solving and thrive in dynamic environments. Explore my portfolio to witness my journey in crafting impactful and efficient software solutions.
            </div>
          </div>
          <div id='about-section-image'>
            <img src="my-photo.png" alt="myself" width="100%"></img>
          </div>
        </div>
      </section>

      <section className='section' id="experience-section">
        <div className='section-heading'><h1>Work Experiences</h1></div>
        <div className='section-content' id ='experience-section-content'>
          <div className='experience-container'>
            <div className='date'>Feb 2022 - Present</div>
            <div className='experience'>
              <div className='experience-top-row'>
                <div className='title'>Eagleview (Software Engineer I)</div>
                <div>Bangalore, India</div>
              </div>
              <div className='description'>
              <ul className="multi-line-list">
                <li>
                  <div>
                    <span className="bullet-point">&#8226;</span>
                    <span>
                      Developed GIS aerial Imagery related software web applications used in certified imagery workflow and analytics 
                      for US government customers.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="bullet-point">&#8226;</span>
                    <span>
                      Created UI features and associated APIs for ortho-mosaics imagery review, tagging, and quality control 
                      applications with the gRPC framework in a microservices architecture, with unit tests achieving 95%+ code 
                      coverage
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="bullet-point">&#8226;</span>
                      <span>
                        Resolved 300+ code smell issues to pass the Sonarqube quality gate bar for ensuring high-quality code 
                        deliverables and rolling out the projects to production.
                      </span>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="bullet-point">&#8226;</span>
                      <span>
                        Created and enforced ingredients and role-based entitlements throughout the applications to ensure proper access 
                        rights.
                      </span>
                  </div>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className='experience-container'>
            <div className='date'>July 2021 - Jan 2022</div>
            <div className='experience'>
              <div className='experience-top-row'>
                <div className='title'>Sensen.ai (Software Engineer)</div>
                <div>Hyderabad, India</div>
              </div>
              <div className='description'>
                <ul className="multi-line-list">
                  <li>
                    <div>
                      <span className="bullet-point">&#8226;</span>
                      <span>
                        Developed 20+ features for the applications used to manage traffic infringements data generated by the computer 
                        vision ML server
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span className="bullet-point">&#8226;</span>
                      <span>
                        Resolved 30+ bugs and identified several performance bottlenecks in various components and modules, boosting 
                        the overall rendering and execution speed by 300%.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='experience-container'>
            <div className='date'>Feb 2021 - June 2021</div>
            <div className='experience'>
              <div className='experience-top-row'>
                <div className='title'>Cognizant (Internship)</div>
                <div>Chennai, India</div>
              </div>
              <div className='description'>
                <ul className="multi-line-list">
                  <li>
                    <div>
                      <span className="bullet-point">&#8226;</span>
                      <span>
                        Acquired expertise in various web technologies and tools like HTML, CSS, JavaScript, React, Java, Spring 
                        frameworks, Mysql, git, etc., and worked on several case studies as minor projects.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span className="bullet-point">&#8226;</span>
                      <span>
                        Developed a major full-stack web application project to handle overpayments on insurance claims.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section' id="skills-section">
        <div className='section-heading'><h1>Skills</h1></div>
        <div className='section-content'>
          <div className='skill-image'>
            <img src="react-icon.png" alt="react-icon" height="100px"></img>
            <div>React</div>
          </div>
          <div className='skill-image'>
            <img src="redux-icon.png" alt="redux-icon" height="100px"></img>
            <div>Redux</div>
          </div>
          <div className='skill-image'>
            <img src="cpp-icon.png" alt="cpp-icon" height="100px"></img>
            <div>C++</div>
          </div>
          <div className='skill-image'>
            <img src="js-icon.png" alt="js-icon" height="100px"></img>
            <div>Javascript</div>
          </div>
          <div className='skill-image'>
            <img src="html-icon.png" alt="html-icon" height="100px"></img>
            <div>HTML</div>
          </div>
          <div className='skill-image'>
            <img src="css-icon.png" alt="css-icon" height="100px"></img>
            <div>CSS</div>
          </div>
          <div className='skill-image'>
            <img src="nodejs-icon.png" alt="nodejs-icon" height="100px"></img>
            <div>Node js</div>
          </div>
          <div className='skill-image'>
            <img src="expressjs-icon.png" alt="expressjs-icon" height="100px"></img>
            <div>Express js</div>
          </div>
          <div className='skill-image'>
            <img src="postgresql-icon.png" alt="postgresql-icon" height="100px"></img>
            <div>PostgreSQL</div>
          </div>
          <div className='skill-image'>
            <img src="java-icon.png" alt="java-icon" height="100px"></img>
            <div>Java</div>
          </div>
          <div className='skill-image'>
            <img src="golang-icon.png" alt="golang-icon" height="100px"></img>
            <div>Golang</div>
          </div>
          <div className='skill-image'>
            <img src="git-icon.png" alt="git-icon" height="100px"></img>
            <div>Git</div>
          </div>
          <div className='skill-image'>
            <img src="github-icon.png" alt="github-icon" height="100px"></img>
            <div>Github</div>
          </div>
        </div>
      </section>

      <section className='section' id="projects-section">
        <div className='section-heading'><h1>Personal Projects</h1></div>
        <center><h1>City Street Shops (Advance Ecommerce Application)</h1></center>
        <div className='section-content' id='projects-container'>
          
          <div className='experience-container'>
            <div className='project-thumbnail'>
              <img src="city-street-shops-screen.png" alt="city-street-shops-screen" width="100%"></img>
              <div className="project-link" onClick={() => window.open('https://github.com/Deepak-worthy/city-street-shops', '_blank')}>Source code and App link</div>
            </div>
            <div className='project-description'>
              <div className='description'>
                <p>
                  An Advance E-commerce Web Application which helps street shops to sell their stuff
                  online to customers within the same city.
                  <br /><br />
                  Top features:
                </p>
                <li>JWT based logged in user authorization</li>
                <li>Feature to upload images and store them on cloud using AWS S3 bucket</li>
                <li>Online order Payments integration using Razorpay payments API</li>
                <li>Automatic order notification to seller and customer through email</li>
                <li>Google Maps API for selecting delivery address though map</li>
                <li>Customer - Admin chat interface implementation using socket.io</li>
                <li>Cloud NoSQL Database  (MongoDB Atlas)</li>
                <li>Deployed and hosted on Render.com</li>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='section' id="contact-section">
        <div className='section-heading'><h1>Contact me</h1></div>
        <div>
          <div></div>
        </div>
        <div className='section-content'>
          <div className='skill-image contact-option' onClick={() => window.open('https://wa.me/9600162301', '_blank')}>
            <img src="whatsapp-icon.png" alt="whatsapp-icon" height="100px"></img>
            <div>+91 9600162301</div>
          </div>
          <div className='skill-image contact-option' onClick={() => window.location.href = 'mailto:deepakdalal2949@gmail.com'}>
            <img src="gmail-icon.png" alt="gmail-icon" height="100px"></img>
            <div>deepakdalal2949@gmail.com</div>
          </div>
          <div className='skill-image contact-option' onClick={() => window.open('https://www.linkedin.com/in/deepak-dalal-9b7677156/', '_blank')}>
            <img src="linkedin-icon.png" alt="linkedin-icon" height="100px"></img>
            <div>Linkedin Profile</div>
          </div>
          <div className='skill-image contact-option' onClick={() => window.open('https://leetcode.com/dee24da/', '_blank')}>
            <img src="leetcode-icon.png" alt="leetcode-icon" height="100px"></img>
            <div>Leetcode Profile</div>
          </div>
          <div className='skill-image contact-option' onClick={() => window.open('https://github.com/Deepak-worthy', '_blank')}>
            <img src="github-icon.png" alt="github-icon" height="100px"></img>
            <div>Github Profile</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
