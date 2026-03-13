import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1>Stanislav Bachinskiy</h1>
        <h2>Junior Developer</h2>
        <p>Frontend (React) · C# · Linux & SysAdmin</p>
        <div className="hero-buttons">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I'm a junior developer with a background in programming, 
          interested in frontend development with React, backend with C#, 
          and Linux system administration. Currently based in Odense, Denmark, 
          open to new opportunities.
        </p>
      </section>

      {/* Skills */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>C#</span>
          <span>Linux</span>
          <span>Git</span>
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built with React and Vite.</p>
            <a href="https://github.com/bochie" target="_blank">GitHub →</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:stasikus2003@email.com">stasikus2003@email.com</a></p>
        <p>GitHub: <a href="https://github.com/bochie" target="_blank">github.com/bochie</a></p>
      </section>
    </div>
  )
}

export default App