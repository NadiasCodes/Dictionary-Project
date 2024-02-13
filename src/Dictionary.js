import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import { RotatingTriangles } from "react-loader-spinner";
import "./Dictionary.css";


export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState("");

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data);
    const apiKey = "57t510363ca64d76cf8d437ao0eea1eb";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    axios
      .get(apiUrl).then(handleImages);
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
          <h1>What word are you looking for?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              placeholder="search for a word...."
              className="form"
            ></input>
          </form>
          <div className="hint">
            i.e. tea, yoga, nature, travel, coding, design
          </div>
        </section>
        <Results results={results} />
        <Photos photos ={photos}/>
      </div>
    );
  } else {
    load();
    return (
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
