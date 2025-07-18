import './Projectcard.css'; // Add this style file in src/

const Projects = () => (
  <section data-aos="fade-up">
    <h2>Projects</h2>
    <div className="project-grid">
      <div className="card">
      <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.slideshare.net%2Fslideshow%2Fpredicting-salary-using-data-science-a-comprehensive-analysispdf%2F267329501&psig=AOvVaw0KbOJ8j7P4P5fa_zOZuw2s&ust=1752926335405000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMD9vNetxo4DFQAAAAAdAAAAABAE"
          alt="employee salary"
          className="project-image"
        />
        <h3>EMPLOYEE SALARY PREDICTION</h3>
        <p>Predicting the salary of an employee by taking inputs as age , workclass , hours per week etc.</p>
      </div>
      <div className="card">
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDszGshjbwY7tZ-nmzwd6BTJbY2HvG3W0ZCQ&s"
          alt="Disease Prediction"
          className="project-image"
        />
        <h3>Disease Outbreak Predictor</h3>
        <p>Python + Pandas + MySQL for health data predictions.</p>
        <a href="https://meghana087-prediction-of-disease-outbreaks-app-6zkagq.streamlit.app/" target="_blank" rel="noreferrer">View Project</a>
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
        <a href="https://meghana087.github.io/ToDoList/" target="_blank" rel="noreferrer">View Project</a>
      </div>
    </div>
  </section>
);

export default Projects;
