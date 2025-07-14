import './Projectcard.css'; // Add this style file in src/

const Projects = () => (
  <section data-aos="fade-up">
    <h2>Projects</h2>
    <div className="project-grid">
      <div className="card">
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIH8fveGeuP3lA2xucMkYviLOGC-ECWc8C0w&s"
          alt="EMOTUNE"
          className="project-image"
        />
        <h3>EMOTUNE</h3>
        <p>Emotion-based music recommender using OpenCV + YouTube API.</p>
      </div>
      <div className="card">
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDszGshjbwY7tZ-nmzwd6BTJbY2HvG3W0ZCQ&s"
          alt="Disease Prediction"
          className="project-image"
        />
        <h3>Disease Outbreak Predictor</h3>
        <p>Python + Pandas + MySQL for health data predictions.</p>
        <a href="https://github.com/Meghana087/Prediction-of-Disease-Outbreaks" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkmU0NnVb_P3Oe7h2efpVN-Vh2JBPyNEvug&s"
          alt="To-Do List"
          className="project-image"
        />
        <h3>To-Do List App</h3>
        <p>
          A minimal task manager built using HTML, CSS, and JavaScript.
          Features include add/delete tasks, mark as complete, and persistent storage using localStorage.
        </p>
        <a href="https://github.com/Meghana087/ToDoList.git" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </section>
);

export default Projects;
