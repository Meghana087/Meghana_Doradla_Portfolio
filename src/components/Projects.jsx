import './Projectcard.css'; // Add this style file in src/

const Projects = () => (
  <section data-aos="fade-up">
    <h2>Projects</h2>
    <div className="project-grid">
      <div className="card">
      <img
          src="https://storage.googleapis.com/kaggle-datasets-images/2973025/5119031/581d3c4f13b517b78da588da25c07092/dataset-thumbnail.jpg?t=2023-03-07-02-46-31"
          alt="employee salary"
          className="project-image"
        />
        <h3>Employee Salary Prediction</h3>
        <p>Predicting the salary of an employee by taking inputs as age , workclass , hours per week etc.</p>
        <a href="https://employeesalary-prediction.streamlit.app/" target="_blank" rel="noreferrer">View Project</a>

      </div>
      <div className="card">
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDszGshjbwY7tZ-nmzwd6BTJbY2HvG3W0ZCQ&s"
          alt="Disease Prediction"
          className="project-image"
        />
        <h3>Disease Outbreak Predictor</h3>
        <p>Python + Pandas + MySQL for health data predictions.</p>
        <a href="https://prediction-of-diseaseoutbreaks.streamlit.app/" target="_blank" rel="noreferrer">View Project</a>
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

       <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gGEZ11L9351lwv5oj1qieLzIfxNzkQLq_Q&s"
          alt="PrimeStore"
          className="project-image"
        />
        <h3>PrimeStore - Ecommerce</h3>
        <p>
         Full Stack e-commerce website using Python,Django,MySQL,HTML,CSS,
         Javascript and django rest framework. 
        </p>
        <a href="https://primestore-ecommerce.up.railway.app" target="_blank" rel="noreferrer">View Project</a>
      </div>
    </div>
  </section>
);

export default Projects;
