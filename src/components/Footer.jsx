import { useWord } from "../context/FetchData";
function Footer() {
  const { wordData } = useWord();

  const source = wordData.sourceUrls;

  return (
    <div>
      <h2>{source}</h2>;
    </div>
  );
}

export default Footer;
