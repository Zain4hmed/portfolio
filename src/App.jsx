import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import TypingEffect from './TypingEffect'; // Adjust the path as necessary
import HighlightText from './HighlightText'; // Adjust the path as necessary
import myPic from './mypic.jpg'; // Adjust the path if your file is in a subfolder


function App() {
  return (
    <div className='maininfo'>
      {/* Hero Section */}
      <section className="hero text-center p-5 bg-light">
      <h1 className="display-4">
        <TypingEffect text="H i, I'm ZAIN" speed={50} />
      </h1>
      <p className="lead">
        <TypingEffect text="A results-driven programmer harnessing the power of code to build scalable solutions, based in India." speed={50} />
      </p>
      <a href="#projects" className="btn btn-primary">View My Work</a>
    </section>


      {/* About Me Section */}
      <section id="about" className="about text-center py-5">
  <div className="container">
    <h2>About Me</h2>
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-6">
        <p className="about-text">
          I'm a full stack developer specializing in Java and Spring Boot for backend development, and React for the front end. I have a deep passion for problem-solving and thrive on optimizing-algorithms,{' '}
          <HighlightText 
  text="often pushing beyond traditional O(n) complexities to achieve the most efficient runtime solutions."
  speed={40} // Adjust the speed to your preference
/>

        </p>
        <p className="about-text">
          In addition to my professional work in web and mobile development, I have a keen interest in programming microcontrollers and microprocessors like the Raspberry Pi as a hobby. I'm also a fitness enthusiast who tracks various fitness metrics, including sleep patterns. This sparked a personal project where I documented and analyzed the correlation between early bedtimes and deep sleep duration—something I plan to share in my blog.
        </p>
        <p className="about-text">
          <HighlightText 
  text="Currently, I work for an MNC in India. If you have any exciting ideas or projects to collaborate on, feel free to reach out! "
          speed={40} />
        </p>
      </div>
      <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
      <img 
  src={myPic} 
  alt="Zain" 
  className="img-fluid rounded-circle" 
  style={{ maxWidth: '80%' }} 
/>


      </div>
    </div>
  </div>
</section>







      {/* Skills Section */}
      <section id="skills" className="skills py-5 bg-light">
        <div className="container">
          <h2>Skills</h2>
          <ul className="list-inline">
            <li className="list-inline-item p-2">JavaScript</li>
            <li className="list-inline-item p-2">React</li>
            <li className="list-inline-item p-2">Node.js</li>
            <li className="list-inline-item p-2">CSS</li>
            <li className="list-inline-item p-2">Spring Boot</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects py-5">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src="project1.jpg" className="card-img-top" alt="Project 1"/>
                <div className="card-body">
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">A brief description of Project 1.</p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src="project2.jpg" className="card-img-top" alt="Project 2"/>
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">A brief description of Project 2.</p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact bg-light py-5">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <p>If you'd like to work together, feel free to reach out via email or social media.</p>
          <a href="mailto:youremail@example.com" className="btn btn-primary">Email Me</a>
        </div>
      </section>
    </div>
  );
}

export default App;
