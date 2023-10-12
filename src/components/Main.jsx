import ResultTitle from "./ResultTitle";
import PartOfSpeech from "./PartOfSpeech";
import Footer from "./Footer";
import { useWord } from "../context/FetchData";

export function Main() {
  const { isLoading } = useWord();
  return (
    <div>
      {!isLoading && (
        <>
          <ResultTitle />
          <PartOfSpeech />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Main;
