import Logo from "./Logo";
import NightmodeSwitch from "./NightmodeSwitch";
import FontStyle from "./FontStyle";


function Header({isNightActive, setIsNightActive, setFont}) {
  return (
    <header className="header">
      <Logo />
      <div className="display-preferences">
        <FontStyle setFont={setFont}/>
        <NightmodeSwitch isNightActive={isNightActive} setIsNightActive={setIsNightActive} />
      </div>
    </header>
  );
}

export default Header;
