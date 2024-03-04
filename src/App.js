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
              alt="custom-header"
            ></img>
          </h2>
        </header>

        <main>
          <Dictionary defaultKeyword="Plant" className="main-word" />
        </main>
        
      </div>
    </div>
  );
}
