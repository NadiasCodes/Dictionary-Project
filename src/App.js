import Dictionary from "./Dictionary.js";
import "./App.css";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsWindowFullscreen } from "react-icons/bs";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FaReact } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/115/264/original/Designed_by_Nadia_Bouli_%281%29.png?1707846758"
              className="img-fluid image-header"
              alt="header"
            ></img>
          </h2>
          <p className="second-title">
            Made with <FaReact className="ReactIcon" />
          </p>
        </header>

        <main>
          <Dictionary defaultKeyword="Aesthetic" className="main-word" />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nadia-bouli/"
            target="blank"
            className="coder"
          >
            Nadia Bouli
            <br />
          </a>
          Hosting & GitHub <br />
          <br />{" "}
          <FontAwesomeIcon
            icon={faArrowDown}
            bounce
            style={{ color: "#B197FC" }}
          />
          <br />
          <div class="social-links d-flex justify-content-center mb-5">
            <a
              href="https://react-forecast-app.vercel.app/"
              target="_blank"
              title="Vercel"
              rel="noopener noreferrer"
            >
              <BsWindowFullscreen className="VercelIcon" />
            </a>
            <a
              href="https://github.com/NadiasCodes"
              target="_blank"
              title="GitHub Profile"
              rel="noopener noreferrer"
            >
              <BsGithub className="githubIcon" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
