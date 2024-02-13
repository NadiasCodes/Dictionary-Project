import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState (false);
  

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = `57t510363ca64d76cf8d437ao0eea1eb`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word= ${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="form"
            ></input>
          </form>
          <div className="hint">
            i.e. tea, yoga, nature, travel, coding, design
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
