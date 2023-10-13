import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import { MyProvider } from "./context/FetchData";

function App() {
  const [isNightActive, setIsNightActive] = useState(false);
  const [font, setFont] = useState("sans-serif")
  const [search, setSearch] =useState("keyboard")

  return (
    <div className="app-container" data-theme={isNightActive ? "dark" : ""}>
      <MyProvider search={search}>
        <div className="app" data-theme={font}>
          <Header
            isNightActive={isNightActive}
            setIsNightActive={setIsNightActive}
            setFont= {setFont}
          />
          <SearchBar setSearch={setSearch}/>
          <Main />
        </div>
      </MyProvider>
    </div>
  );
}

export default App;
