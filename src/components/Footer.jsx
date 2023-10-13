import { useWord } from "../context/FetchData";
function Footer() {
  const { wordData } = useWord();

  const source = wordData.sourceUrls;

  return (
    <>
      <hr className="section" />
      <div className="source">
        <p className="u-grey">Source</p>
        <a href={source} target="_blank">
          <h6>{source}</h6>
        </a>
      </div>
    </>
  );
}

export default Footer;
