import { useWord } from "../context/FetchData";

function ResultTitle(){

    const { wordData } = useWord();
    return(
        <div>
            <h1>{wordData.word}</h1>
            <h2 className="phonetic">{wordData.phonetic}</h2>
        </div>
    )
}

export default ResultTitle
