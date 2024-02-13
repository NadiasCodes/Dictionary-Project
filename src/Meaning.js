import React from "react";
import Synonyms from "./Synonyms"
export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p> <strong>Definition:</strong> {props.meaning.definition}</p>
      <p> <strong>Example:</strong> {props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
