import { useWord } from "../context/FetchData";

function PartOfSpeech() {
  const { wordData } = useWord();
  const meanings = wordData.meanings;

  return meanings.map((el) => (
    <div key={meanings.partOfSpeech} className="meanings-container">
      <div className="section">
        <h2>{el.partOfSpeech}</h2>
        <hr />
      </div>
      <h3 className="u-subtitle">Meaning</h3>
      <ul>
        <Meanings definitions={el.definitions} />
      </ul>
      {el.synonyms != "" && (
        <h3 className="u-subtitle">
          Synonyms<span className="synonyms">{el.synonyms}</span>
        </h3>
      )}
    </div>
  ));
}

function Meanings({ definitions }) {
  return definitions.map((definition) => (
    <li className="bulet-point" key={definition.definition}>
      <span className="dot">🟣</span>
      <div>
        <p className="definition">{definition.definition}</p>
        {definition.example ?<q className="example">{definition.example}</q>: ""}

      </div>
    </li>
  ));
}

export default PartOfSpeech;
