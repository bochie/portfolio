import './App.css'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

function App() {
  return (
    <div className="app">
      {/* Hero */}
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1>Stanislav Bachinskiy</h1>
        <h2>Junior Developer</h2>
        <p>Frontend (React) · C# · Linux & SysAdmin</p>
        <div className="hero-buttons">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        className="about"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>About Me</h2>
        <p>
          I'm a junior developer with a background in programming,
          interested in frontend development with React, backend with C#,
          and Linux system administration. Currently based in Denmark,
          open to new opportunities.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="skills"
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {['React', 'JavaScript', 'HTML/CSS', 'C#', 'Linux', 'Git'].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, borderColor: '#ff6b2b' }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="projects"
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          <motion.div
            className="card"
            whileHover={{ y: -5, borderColor: '#ff6b2b' }}
            transition={{ duration: 0.2 }}
          >
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built with React and Vite.</p>
            <a href="https://github.com/bochie/portfolio" target="_blank">GitHub →</a>
          </motion.div>
        <motion.div
          className="card"
          whileHover={{ y: -5, borderColor: '#ff6b2b' }}
          transition={{ duration: 0.2 }}
>
  <h3>Task Manager</h3>
  <p>Todo app with filters and animations built with React and Framer Motion.</p>
  <a href="https://github.com/bochie/todo-app" target="_blank">GitHub →</a>
</motion.div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="contact"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2>Contact</h2>
        <p>Email: <a href="mailto:stasikus2003@email.com">stasikus2003@email.com</a></p>
        <p>GitHub: <a href="https://github.com/bochie" target="_blank">github.com/bochie</a></p>
      </motion.section>
    </div>
  )
}

export default App